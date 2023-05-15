# @importantimport/eslint-config-lit [![npm](https://img.shields.io/npm/v/@importantimport/eslint-config-lit)](https://npmjs.com/package/@importantimport/eslint-config-lit)

An [ESLint Flat Config](https://eslint.org/docs/latest/use/configure/configuration-files-new) for [!mportantImport](https://github.com/importantimport).

## Features

- Based on [`@importantimport/eslint-config`](../eslint-config/)
  - Single quotes, no semi
  - Auto fix for formatting (aimed to be used standalone **without** Prettier)
  - [Validating TSDoc](https://github.com/microsoft/tsdoc/tree/main/eslint-plugin)
  - Radical automatic sorting (using [simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort) and [sort-keys-fix](https://github.com/leo-buneev/eslint-plugin-sort-keys-fix))
- Lit Support
  - Inspired by [`@open-wc/eslint-config`](https://www.npmjs.com/package/@open-wc/eslint-config)

## Usage

### Install

```bash
pnpm add -D eslint @importantimport/eslint-config-lit prettier prettier-config-standard
```

### Config

```js
// eslint.config.js
export { default } from '@importantimport/eslint-config-lit'
```

```jsonc
// .prettierrc.json
"prettier-config-standard"
```
