// Renders the site's Liquid + Markdown sources (Jekyll-style front matter,
// layouts, includes and a `projects` collection) into HTML pages that Vite
// then builds like any multi-page app.
//
//   src/pages/*.html     → standalone pages (index, 404)
//   src/projects/*.md    → one page per project, exposed as site.projects
//   src/layouts/*.html   → wrap a page via `layout:` front matter (can chain)
//   src/includes/*.html  → {% include name.html key="value" %}
import fs from 'node:fs'
import path from 'node:path'
import { Liquid } from 'liquidjs'
import { Marked } from 'marked'
import { markedSmartypants } from 'marked-smartypants'
import YAML from 'yaml'
import { normalizePath } from 'vite'

// Curly quotes, dashes and ellipses, like Jekyll's kramdown default.
const marked = new Marked(markedSmartypants())

const FRONT_MATTER = /^\uFEFF?---\r?\n([\s\S]*?)\r?\n---\r?\n?/

function readDoc(file) {
  const src = fs.readFileSync(file, 'utf8')
  const m = src.match(FRONT_MATTER)
  if (!m) return { data: {}, body: src }
  return { data: YAML.parse(m[1]) ?? {}, body: src.slice(m[0].length) }
}

// Permalinks are normalized like Jekyll's: leading slash, and a trailing slash
// unless they name a file. "/foo" → "/foo/", "404.html" → "/404.html"
const normalizeUrl = (url) => {
  const u = `/${url}`.replace(/\/+/g, '/')
  return u.endsWith('/') || u.endsWith('.html') ? u : `${u}/`
}

// "/" → "index.html", "/foo/" → "foo/index.html", "/404.html" → "404.html"
const outputPath = (url) => (url.endsWith('/') ? `${url}index.html` : url).slice(1)

export default function liquidPages({ site }) {
  let root
  let base
  let engine
  const dir = (name) => path.join(root, name)

  function loadPages() {
    const pages = []
    for (const file of fs.readdirSync(dir('pages')).filter((f) => f.endsWith('.html'))) {
      const doc = readDoc(path.join(dir('pages'), file))
      const name = path.basename(file, '.html')
      const url = normalizeUrl(doc.data.permalink ?? (name === 'index' ? '/' : name))
      pages.push({ ...doc, url, file: `pages/${file}`, markdown: false })
    }
    for (const file of fs.readdirSync(dir('projects')).filter((f) => f.endsWith('.md'))) {
      const doc = readDoc(path.join(dir('projects'), file))
      const url = normalizeUrl(doc.data.permalink ?? path.basename(file, '.md'))
      pages.push({ ...doc, url, file: `projects/${file}`, markdown: true, collection: 'projects' })
    }
    const seen = new Map()
    for (const page of pages) {
      if (seen.has(page.url)) throw new Error(`Duplicate permalink ${page.url}: ${seen.get(page.url)} and ${page.file}`)
      seen.set(page.url, page.file)
      page.id = normalizePath(path.join(root, outputPath(page.url)))
    }
    return pages
  }

  async function render(page, pages) {
    const projects = pages
      .filter((p) => p.collection === 'projects')
      .map((p) => ({ ...p.data, url: p.url }))
    const ctx = { site: { ...site, projects }, page: { ...page.data, url: page.url } }

    let html = await engine.parseAndRender(page.body, ctx)
    // kramdown's markdown="1": CommonMark parses Markdown inside an HTML block
    // only after a blank line, so drop the attribute and add one.
    if (page.markdown) html = marked.parse(html.replace(/(<[a-z][^>]*?)\s+markdown="1"([^>]*>)/gi, '$1$2\n\n'))

    for (let layout = page.data.layout; layout; ) {
      const doc = readDoc(path.join(dir('layouts'), `${layout}.html`))
      html = await engine.parseAndRender(doc.body, { ...ctx, content: html })
      layout = doc.data.layout
    }
    return html
  }

  return {
    name: 'liquid-pages',

    configResolved(config) {
      root = config.root
      base = config.base
      engine = new Liquid({ root: dir('includes'), jekyllInclude: true, dynamicPartials: false })
    },

    config(config) {
      root = normalizePath(path.resolve(config.root ?? process.cwd()))
      const input = Object.fromEntries(loadPages().map((p) => [outputPath(p.url), p.id]))
      return { build: { rollupOptions: { input } } }
    },

    resolveId(id) {
      if (id.endsWith('.html') && loadPages().some((p) => p.id === id)) return id
    },

    async load(id) {
      const pages = loadPages()
      const page = pages.find((p) => p.id === id)
      if (page) return render(page, pages)
    },

    configureServer(server) {
      server.watcher.add(['layouts', 'includes', 'pages', 'projects'].map(dir))
      // Reload the browser when a template or project is added, edited or removed.
      server.watcher.on('all', (_event, file) => {
        if (/\.(html|md)$/.test(file) && normalizePath(file).startsWith(root)) server.ws.send({ type: 'full-reload' })
      })

      // Runs before Vite's own HTML middleware, so pages are rendered on request.
      server.middlewares.use(async (req, res, next) => {
        try {
          const pathname = new URL(req.url, 'http://localhost').pathname
          if (`${pathname}/` === base) {
            res.writeHead(302, { Location: base })
            return res.end()
          }
          if (!pathname.startsWith(base)) return next()
          const url = `/${pathname.slice(base.length)}`
          const pages = loadPages()
          const page = pages.find((p) => p.url === url || p.url === `${url}/`)
          if (!page) return next()
          const html = await server.transformIndexHtml(req.url, await render(page, pages), req.originalUrl)
          res.setHeader('Content-Type', 'text/html')
          res.end(html)
        } catch (err) {
          next(err)
        }
      })
    },
  }
}
