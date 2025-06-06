# Monorepo

This is the mono repo 

Packages from repository are distributed as NPM packages

## Packages

| Package      | Description                                                                                                          | README                           |
| ------------ | -------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| Tokens       | Design tokens: compiled with [Style Dictionary](https://github.com/amzn/style-dictionary)                            | [README](./packages/tokens/README.md)       |
| Frontend-web | Component scss, html: developed in [Storybook](https://storybook.js.org/), compiled with [Vite](https://vitejs.dev/) | [README](./packages/frontend-web/README.md) |
| Assets       | Fonts and icons, compiled with npm _svgo_ & _svg-join_                                                               | [README](./packages/assets/README.md)       |

## Build

Command will run the build script in each project and generate any output files for npm artifacts

```bash
npm i
npm run build --workspaces --if-present
```

## Developers Getting Started

Generate dependencies

```bash
npm i
npm run build --workspaces --if-present
```

Start the storybook site of the specific brand

```bash
npm run storybook:bcbst --workspaces=frontend-web --if-present
```

or navigate to the

```bash
cd frontend-web
npm run storybook:bcbst
```

_See local READMEs in each package for additional information_

### Preview an unpublished package locally within another repository

#### In repo

This command will run `npm link` within each package

```bash
npm run preview-bcbst --workspaces
```

#### In BCBST repo

This will replace the installed node_modules package  
with a local reference to your current branch 

To unlink the preview package rerun `npm i`

```bash
cd frontend
npm run preview-bcbst
```

#### In any repository 

You can link to a specific package manually by running the  
below command in root dir where your package JSON is located.

```bash
npm link @bcbst/tokens
```

## Learn more

- [Storybook](https://storybook.js.org/) (react w/ vite)
- [Style Dictionary](https://amzn.github.io/style-dictionary/#/)
