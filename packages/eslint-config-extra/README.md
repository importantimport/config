# @importantimport/eslint-config-extra [![npm](https://img.shields.io/npm/v/@importantimport/eslint-config-extra)](https://npmjs.com/package/@importantimport/eslint-config-extra)

An [ESLint Flat Config](https://eslint.org/docs/latest/use/configure/configuration-files-new) for [!mportantImport](https://github.com/importantimport).

## Features

- [JSON Schema Validator](https://github.com/ota-meshi/eslint-plugin-json-schema-validator)
- [TOML Support](https://github.com/ota-meshi/eslint-plugin-toml)
- [YAML Support](https://github.com/ota-meshi/eslint-plugin-yml)

## Usage

### Install

> Although highly recommended with `@importantimport/eslint-config`, it is optional. 

```bash
pnpm add -D eslint @importantimport/eslint-config @importantimport/eslint-config-extra
```

### Config

Simple

```js
// eslint.config.js
import config from '@importantimport/eslint-config'
import extra from '@importantimport/eslint-config-extra'

export default [
  ...config,
  ...extra,
]
```

With Prettier

```js
import { configs, prettier } from '@importantimport/eslint-config'
import { configs as configsExtra, prettier as prettierExtra } from '@importantimport/eslint-config-extra'

export default Object.values({
  ...configs,
  ...prettier,
  ...configsExtra,
  ...prettierExtra,
})
```

### VSCode

```jsonc
// .vscode/settings.json
{
  "eslint.validate": ["javascript", "json", "jsonc", "json5", "toml", "yaml"]
}
```
