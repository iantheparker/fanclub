# IanTheParker Fan Club

Portfolio site, built with [Vite](https://vite.dev) and served by GitHub Pages at https://iantheparker.github.io/fanclub/.

## Local development

Requires Node (LTS; see `.nvmrc`).

```sh
npm install
npm run dev       # http://localhost:5173/fanclub/
npm run build     # outputs dist/
npm run preview   # serve dist/ locally
```

## Where things live

| Path | What |
| --- | --- |
| `src/projects/*.md` | One page per project. Front matter sets `title`, `order` (homepage position), `tags`, `date_label`, `playful` (pink vs. blue tile), and `permalink`. |
| `src/pages/` | Home page and 404. |
| `src/layouts/`, `src/includes/` | Liquid templates. Embed media with `{% include youtube.html id="..." %}`, `vimeo.html`, `video.html`, or `lgimg.html`. |
| `src/assets/` | CSS, JS, and images (bundled and hashed by Vite). |
| `public/` | Copied as-is (favicon, robots.txt). |
| `plugins/liquid-pages.js` | Small Vite plugin that renders the above into HTML pages. |

To add a project, copy an existing file in `src/projects/` and edit it.

## Dependency updates

- Dependabot opens one grouped PR per ecosystem (npm, GitHub Actions) once a month. Security fixes come in their own grouped PR. See `.github/dependabot.yml`.
- The **Build** workflow runs `npm run build` on every PR and deploys `main` to GitHub Pages. Minor and patch Dependabot PRs that pass are squash-merged and the site is redeployed automatically. Major version bumps come as their own PRs and wait for you.
- Add the `hold` label to a Dependabot PR to stop it from auto-merging.
- To see what's been updated, open the PRs labeled `dependencies` ([open](https://github.com/iantheparker/fanclub/pulls?q=label%3Adependencies) / [merged](https://github.com/iantheparker/fanclub/pulls?q=label%3Adependencies+is%3Amerged)).
