# @importantimport/eslint-config [![npm](https://img.shields.io/npm/v/@importantimport/eslint-config)](https://npmjs.com/package/@importantimport/eslint-config)

An [ESLint Flat Config](https://eslint.org/docs/latest/use/configure/configuration-files-new) for [!mportantImport](https://github.com/importantimport).

## Usage

### `createFullConfig`

You can create a configuration containing extensions directly using the `createFullConfig` function provided by `@importantimport/eslint-config`.

First install the configuration, add `ts` and `react` here:

```bash
pnpm add -D eslint @importantimport/eslint-config @importantimport/eslint-config-ts @importantimport/eslint-config-react
# or yarn add -D
# or npm i -D
```

Then enable the installed extensions in the options:

```js
// eslint.config.js
import { createFullConfig } from '@importantimport/eslint-config'

export default await createFullConfig({
  ts: true,
  react: true,
})
```

A portion of the configuration also allows you to customize options, like this:

```js
import { createFullConfig } from '@importantimport/eslint-config'

export default await createFullConfig({
  ts: { project: ['./tsconfig.eslint.json', './packages/*/tsconfig.json'] },
  react: { version: '18.3' },
})
```

### `createConfig`

You can also use `createConfig` to create configurations separately. As opposed to `createFullConfig`, which is synchronized.

```js
// eslint.config.js
import { createConfig } from '@importantimport/eslint-config'
import { createConfig as createTsConfig } from '@importantimport/eslint-config-ts'
import { createConfig as createReactConfig } from '@importantimport/eslint-config-react'

export default createConfig(
  {/* ...yourOptions */},
  ...createTsConfig({ project: true }),
  ...createReactConfig({ version: '18.3' })
)
```

### `default`

If you don't need to customize it at all, you can use the default export.

```js
// eslint.config.js
export { default } from '@importantimport/eslint-config'
```

```js
// eslint.config.js
import config from '@importantimport/eslint-config'
import ts from '@importantimport/eslint-config-ts'
import react from '@importantimport/eslint-config-react'

export default [
  ...config,
  ...ts,
  ...react,
]
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
