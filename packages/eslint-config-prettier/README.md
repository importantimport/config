# @importantimport/eslint-config-prettier [![npm](https://img.shields.io/npm/v/@importantimport/eslint-config-prettier)](https://npmjs.com/package/@importantimport/eslint-config-prettier)

An [ESLint Flat Config](https://eslint.org/docs/latest/use/configure/configuration-files-new) for [!mportantImport](https://github.com/importantimport).

## Features

- When you have to use prettier, add this configuration to override those formatting options.

## Usage

### Install

> If you use eslint-config that requires prettier (e.g. svelte / lit), this configuration is pre-installed and does not need to be set.
> The following are examples of the use of basic and extra config:

```bash
pnpm add -D eslint @importantimport/eslint-config @importantimport/eslint-config-extra @importantimport/eslint-config-prettier
```

### Config

```js
// eslint.config.js
import config, { prettier as prettierConfig } from '@importantimport/eslint-config'
import extra, { prettier as extraPrettierConfig } from '@importantimport/eslint-config'
import prettier from '@importantimport/eslint-config-prettier'

export default [
  ...config,
  ...prettierConfig,
  ...extra,
  ...extraPrettierConfig,
  ...prettier,
]
```
