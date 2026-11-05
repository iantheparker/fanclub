# IanTheParker Fan Club

Portfolio site built with Jekyll and served by GitHub Pages.

## Local development

```sh
bundle install
bundle exec jekyll serve
```

Use Ruby 3.3, the version GitHub Pages and CI use. Newer Rubies resolve an older `github-pages` gem.

## Dependency updates

- Dependabot opens one grouped PR per ecosystem (Ruby gems, GitHub Actions) once a month. Security fixes come in their own grouped PR. See `.github/dependabot.yml`.
- The **Build** workflow runs `jekyll build` on every PR and deploys `main` to GitHub Pages. Dependabot PRs that pass are squash-merged and the site is redeployed automatically.
- Add the `hold` label to a Dependabot PR to stop it from auto-merging.
- To see what's been updated, open the PRs labeled `dependencies` ([open](https://github.com/iantheparker/fanclub/pulls?q=label%3Adependencies) / [merged](https://github.com/iantheparker/fanclub/pulls?q=label%3Adependencies+is%3Amerged)).
