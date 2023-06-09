# @importantimport/eslint-config-svelte [![npm](https://img.shields.io/npm/v/@importantimport/eslint-config-svelte)](https://npmjs.com/package/@importantimport/eslint-config-svelte)

An [ESLint Flat Config](https://eslint.org/docs/latest/use/configure/configuration-files-new) for [!mportantImport](https://github.com/importantimport).

## Features

- Based on [`@importantimport/eslint-config`](../eslint-config/)
  - Single quotes, no semi
  - Auto fix for formatting (aimed to be used standalone **without** Prettier)
  - [Validating TSDoc](https://github.com/microsoft/tsdoc/tree/main/eslint-plugin)
  - Automatically sort any data that fits! (via [eslint-plugin-perfectionist](https://github.com/azat-io/eslint-plugin-perfectionist))
- Svelte Support

## Usage

### Install

```bash
pnpm add -D eslint @importantimport/eslint-config-svelte prettier prettier-plugin-svelte
```

### Config

```js
// eslint.config.js
export { default } from '@importantimport/eslint-config-svelte'
```

```jsonc
// .prettierrc.json
// https://github.com/sveltejs/kit/blob/master/packages/create-svelte/shared/%2Bprettier/.prettierrc
{
  "overrides": [{"files": "*.svelte", "options": {"parser": "svelte"}}],
  "pluginSearchDirs": ["."],
  "plugins": ["prettier-plugin-svelte"],
  "printWidth": 100,
  "singleQuote": true,
  "trailingComma": "none",
  "useTabs": true
}
```

### VSCode

Add `svelte` to `eslint.validate`.

```diff
// .vscode/settings.json
{
  "eslint.validate": [
    "javascript",
    "json",
    "jsonc",
    "json5",
+   "svelte"
  ]
}
```
