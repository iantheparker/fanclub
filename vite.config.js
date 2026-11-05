import { defineConfig } from 'vite'
import liquidPages from './plugins/liquid-pages.js'

const baseurl = '/fanclub'

export default defineConfig({
  root: 'src',
  base: `${baseurl}/`,
  publicDir: '../public',
  build: { outDir: '../dist', emptyOutDir: true },
  plugins: [
    liquidPages({
      site: {
        title: 'IanTheParker Fan Club',
        description: 'a place for lovers.',
        url: 'https://iantheparker.github.io',
        baseurl,
      },
    }),
  ],
})
