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

```jsonc
// .vscode/settings.json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.formatOnSave": false,
  "eslint.experimental.useFlatConfig": true,
  "eslint.validate": [
    "javascript", "json", "jsonc", "json5"
  ],
  "prettier.enable": false
}
```

### Packages

| Package | Type | Basic Config Included | Basic Config Required | Without Prettier |
| - | - | - | - | - |
| [`@importantimport/eslint-config`](/packages/eslint-config) | Basic Config (JS, JSON, TS, Markdown) | - | - | ✅ |
| [`@importantimport/eslint-config-extra`](/packages/eslint-config-extra) | Extra Config (JSON Schema, YAML, TOML) | - | - | ✅ |
| [`@importantimport/eslint-config-prettier`](/packages/eslint-config-prettier) | Prettier Config | - | - | - |
| [`@importantimport/eslint-config-lit`](/packages/eslint-config-lit) | Library / Frameworks (Lit) | ✅ | - | - |
| [`@importantimport/eslint-config-react`](/packages/eslint-config-react) | Library / Frameworks (React) | ✅ | - | ✅ |
| [`@importantimport/eslint-config-svelte`](/packages/eslint-config-svelte) | Library / Frameworks (Svelte) | ✅ | - | - |

### Developing

ESLint Config does not have a build step.

Just make the changes, and then pnpm link to the test environment:

```bash
pnpm link ../config/packages/eslint-config # or eslint-config-*
```
