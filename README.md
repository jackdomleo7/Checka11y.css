# Checka11y.css gh-pages

URL - https://checka11y.jackdomleo.dev

![Website status](https://img.shields.io/website?down_color=red&down_message=offline&up_color=green&up_message=online&url=https%3A%2F%2Fchecka11y.jackdomleo.dev "Website status")

---

## Development

Setup for Checka11y.css `gh-pages` branch

### Setup

- `git clone https://github.com/jackdomleo7/Checka11y.css.git`
- `git checkout gh-pages`
- `npm i`
- `npm run serve`
- Navigate to http://localhost:1234

### Branch

- Branch names should be prefixed with `gh-pages__`
- Be sure when submitting a pull request, the base branch is `gh-pages` and NOT `master`

---

## Generating production-ready documentation

The live docs will automatically update when a push is made to `gh-pages`.
Run `npm run docs` to generate the production-ready CSS and sitemap.xml

---

## Updating dependencies

- `npm update`
- `npm outdated`

To update to a new major version of a dependency:
- Research breaking changes
- Manually update in _package.json_
- `npm i`
- `npm update`
- `npm outdated`