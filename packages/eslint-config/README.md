# @importantimport/eslint-config [![npm](https://img.shields.io/npm/v/@importantimport/eslint-config)](https://npmjs.com/package/@importantimport/eslint-config)

An [ESLint Flat Config](https://eslint.org/docs/latest/use/configure/configuration-files-new) for [!mportantImport](https://github.com/importantimport).

## Usage

First follow the [instructions](https://github.com/antfu/eslint-config#usage) for setup `@antfu/eslint-config`:

```bash
pnpm dlx @antfu/eslint-config@latest
pnpm i
```

Then add and import `@importantimport/eslint-config`:

```bash
pnpm add -D @importantimport/eslint-config
```

```diff
# eslint.config.js
import antfu from '@antfu/eslint-config'
+ import ii from '@importantimport/eslint-config'

export default antfu()
+  .append(ii())
```

## License

[MIT](../../LICENSE.md)
