# @importantimport/eslint-config-react [![npm](https://img.shields.io/npm/v/@importantimport/eslint-config-react)](https://npmjs.com/package/@importantimport/eslint-config-react)

An [ESLint Flat Config](https://eslint.org/docs/latest/use/configure/configuration-files-new) for [!mportantImport](https://github.com/importantimport).

## Features

- Based on [`@importantimport/eslint-config`](../eslint-config/)
  - Single quotes, no semi
  - Auto fix for formatting (aimed to be used standalone **without** Prettier)
  - [Validating TSDoc](https://github.com/microsoft/tsdoc/tree/main/eslint-plugin)
  - Automatically sort any data that fits! (via [eslint-plugin-perfectionist](https://github.com/azat-io/eslint-plugin-perfectionist))
- React Support

## Usage

### Install

```bash
pnpm add -D eslint @importantimport/eslint-config-react
```

> `eslint-plugin-react` that this configuration depends on contains a lot of useless polyfills,
> I also recommend replacing them with [nolyfill](https://github.com/SukkaW/nolyfill):
>
> `npx nolyfill install --pm <your-package-manager>`

### Config

```js
// eslint.config.js
export { default } from '@importantimport/eslint-config-react'
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
    "javascriptreact",
    "json",
    "jsonc",
    "json5",
    "typescript",
    "typescriptreact"
  ],
  "prettier.enable": false
}
```

### with Next.js

TODO...
