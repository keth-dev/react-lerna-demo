# Lerna Demo
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

The mono-repository has two packages:
* `web-app`: A React-Application
* `shared-ui`: A React UI Library with Storybook

## Development

* Run `npm run bootstrap` to install dependencies in all packages
* To develop
  * Shared UI-Library: `cd shared-ui && npm run storybook`
  * React Web App: `cd web-app && npm run dev`

## Publish Packages

On every push on `master` branch, the `publish` GitHub Action workflow is triggered.
It will create a patch version and publish the packages to [GitHub Registry](https://github.com/keth-dev?tab=packages&repo_name=react-lerna-demo).

