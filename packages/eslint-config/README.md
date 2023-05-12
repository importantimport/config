# @importantimport/eslint-config [![npm](https://img.shields.io/npm/v/@importantimport/eslint-config)](https://npmjs.com/package/@importantimport/eslint-config)

An [ESLint Flat Config](https://eslint.org/docs/latest/use/configure/configuration-files-new) for [!mportantImport](https://github.com/importantimport).

> This is a base configuration, with JavaScript / TypeScript as the main focus.

## Features

- Based on [`@antfu/eslint-config-basic`](https://github.com/antfu/eslint-config/tree/main/packages/eslint-config-basic)
  - Single quotes, no semi
  - Auto fix for formatting (aimed to be used standalone **without** Prettier)
- [Validating TSDoc](https://github.com/microsoft/tsdoc/tree/main/eslint-plugin)
- Radical automatic sorting (using [simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort) and [sort-keys-fix](https://github.com/leo-buneev/eslint-plugin-sort-keys-fix))

## Usage

### Install

```bash
pnpm add -D eslint @importantimport/eslint-config
```

### Config

Simple

```js
// eslint.config.js
export { default } from '@importantimport/eslint-config'
```

Define

```js
// with `eslint-define-config`
import config from '@importantimport/eslint-config'
import { defineFlatConfig } from 'eslint-define-config'

export default defineFlatConfig(config)
```

Custom

```js
import ii from '@importantimport/eslint-config'

export default [
  ii.configs.js,
  ii.configs.ts,
  {
    // your config here
  }
]
```

### VSCode

Recommended settings:

```json
// .vscode/settings.json
{
  "prettier.enable": false,
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.experimental.useFlatConfig": true,
  "eslint.validate": ["javascript", "json", "jsonc", "json5"]
}
```

It enables flat config, disables Prettier, auto-formats on save, and adds json to validate.
