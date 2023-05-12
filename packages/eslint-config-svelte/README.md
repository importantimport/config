# @importantimport/eslint-config-svelte [![npm](https://img.shields.io/npm/v/@importantimport/eslint-config-svelte)](https://npmjs.com/package/@importantimport/eslint-config-svelte)

An [ESLint Flat Config](https://eslint.org/docs/latest/use/configure/configuration-files-new) for [!mportantImport](https://github.com/importantimport).

## Features

- Based on [`@importantimport/eslint-config`](../eslint-config/)
  - Single quotes, no semi
  - Auto fix for formatting (aimed to be used standalone **without** Prettier)
  - [Validating TSDoc](https://github.com/microsoft/tsdoc/tree/main/eslint-plugin)
  - Radical automatic sorting (using [simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort) and [sort-keys-fix](https://github.com/leo-buneev/eslint-plugin-sort-keys-fix))
- Svelte Support

## Usage

### Install

```bash
pnpm add -D eslint @importantimport/eslint-config-svelte
```

### Config

```js
// eslint.config.js
import config from '@importantimport/eslint-config-svelte'

export default config
```

### VSCode

```diff
// .vscode/settings.json
{
  "eslint.validate": [
    "javascript",
+   "svelte"
  ]
}
```
