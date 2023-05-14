# Config

Some Shareable Configs for [!mportantImport](https://github.com/importantimport).

## ESLint Config

### [@importantimport/eslint-config](/packages/eslint-config/)

[![npm](https://img.shields.io/npm/v/@importantimport/eslint-config)](https://npmjs.com/package/@importantimport/eslint-config)

An [ESLint Flat Config](https://eslint.org/docs/latest/use/configure/configuration-files-new) for [!mportantImport](https://github.com/importantimport).

```bash
pnpm add -D eslint @importantimport/eslint-config
```

```js
// eslint.config.js
export { default } from '@importantimport/eslint-config'
```

### Packages

| Package | Type | Basic Config Included | Basic Config Required |
| - | - | - | - |
| [`@importantimport/eslint-config`](/packages/eslint-config) | Basic Config (JS, JSON, TS, Markdown) | - | - |
| [`@importantimport/eslint-config-svelte`](/packages/eslint-config-svelte) | Library / Frameworks (Svelte) | ✅ | - |
| [`@importantimport/eslint-config-lit`](/packages/eslint-config-lit) | Library / Frameworks (Lit) | ✅ | - |
| [`@importantimport/eslint-config-extra`](/packages/eslint-config-extra) | Extra Config (JSON Schema, YAML, TOML) | - | - |

### Developing

ESLint Config does not have a build step.

Just make the changes, and then pnpm link to the test environment:

```bash
pnpm link ../config/packages/eslint-config # or eslint-config-*
```
