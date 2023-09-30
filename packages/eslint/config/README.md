# @importantimport/eslint-config [![npm](https://img.shields.io/npm/v/@importantimport/eslint-config)](https://npmjs.com/package/@importantimport/eslint-config)

An
[ESLint Flat Config](https://eslint.org/docs/latest/use/configure/configuration-files-new)
for [!mportantImport](https://github.com/importantimport).

> This is a base configuration, with JavaScript / TypeScript as the main focus.

## Features

- Based on
  [`@antfu/eslint-config-basic`](https://github.com/antfu/eslint-config/tree/main/packages/eslint-config-basic)
  - Single quotes, no semi
  - Auto fix for formatting (aimed to be used standalone **without** Prettier)
- [Validating TSDoc](https://github.com/microsoft/tsdoc/tree/main/eslint-plugin)
- Automatically sort any data that fits! (via
  [eslint-plugin-perfectionist](https://github.com/azat-io/eslint-plugin-perfectionist))

## Usage

### Install

```bash
# lcoal only
pnpm add -D eslint @importantimport/eslint-config

# with config-ts (T)
pnpm add -D eslint @importantimport/eslint-config @importantimport/eslint-config-ts
```

### Config

###### default

```js
// eslint.config.js
export { default } from '@importantimport/eslint-config'
```

###### createConfig

```js
// eslint.config.js
import { createConfig } from '@importantimport/eslint-config'

export default createConfig({ ...yourOptions })
```

###### createFullConfig (experimental)

```js
// eslint.config.js
import { createFullConfig } from '@importantimport/eslint-config'

export default await createFullConfig({
  ...yourOptions,
  /**
   * this will automatically import `@importantimport/eslint-config-ts`
   * so you'll need to install it at the same time.
   */
  ts: true,
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

It enables flat config, disables Prettier, auto-formats on save, and adds json
to validate.

## License

Licensed under the [MIT](../../../LICENSE).

### Third Party Licenses

This project partially copies code from the following projects:

| Project                                                        | License                                                         |
| -------------------------------------------------------------- | --------------------------------------------------------------- |
| [@antfu/eslint-config](https://github.com/antfu/eslint-config) | [MIT](https://github.com/antfu/eslint-config/blob/main/LICENSE) |
