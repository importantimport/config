# @importantimport/eslint-config [![npm](https://img.shields.io/npm/v/@importantimport/eslint-config)](https://npmjs.com/package/@importantimport/eslint-config)

An [ESLint Flat Config](https://eslint.org/docs/latest/use/configure/configuration-files-new) for [!mportantImport](https://github.com/importantimport).

> This is a base configuration, with JavaScript / TypeScript as the main focus.

## Features

- Based on [`@antfu/eslint-config-basic`](https://github.com/antfu/eslint-config/tree/main/packages/eslint-config-basic)
  - Single quotes, no semi
  - Auto fix for formatting (aimed to be used standalone **without** Prettier)
- [Validating TSDoc](https://github.com/microsoft/tsdoc/tree/main/eslint-plugin)
- Automatically sort any data that fits! (via [eslint-plugin-perfectionist](https://github.com/azat-io/eslint-plugin-perfectionist))

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
import { configs } from '@importantimport/eslint-config'

export default [
  configs.js,
  configs.ts,
  {
    // your config here
  },
]
```

With Prettier

```js
import { configs, prettier } from '@importantimport/eslint-config'

export default Object.values({
  ...configs,
  ...prettier,
})
```

### VSCode

Recommended settings:

```jsonc
// .vscode/settings.json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.formatOnSave": false,
  "eslint.experimental.useFlatConfig": true,
  "eslint.validate": [
    "javascript",
    "json",
    "jsonc",
    "json5"
  ],
  "prettier.enable": false
}
```

It enables flat config, disables Prettier, auto-formats on save, and adds json to validate.
