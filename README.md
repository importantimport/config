# Config

Some Shareable Configs for [!mportantImport](https://github.com/importantimport).

## [ESLint Config](/packages/eslint/) [![npm](https://img.shields.io/npm/v/@importantimport/eslint-config)](https://npmjs.com/package/@importantimport/eslint-config)

An [ESLint Flat Config](https://eslint.org/docs/latest/use/configure/configuration-files-new) for [!mportantImport](https://github.com/importantimport).

```bash
pnpm add -D eslint @importantimport/eslint-config
```

```js
// eslint.config.js
export { default } from '@importantimport/eslint-config'
```

## [TSConfig](/packages/tsconfig/) [![npm](https://img.shields.io/npm/v/@importantimport/tsconfig)](https://npmjs.com/package/@importantimport/tsconfig)

```bash
pnpm add -D @importantimport/tsconfig
```

```jsonc
// tsconfig.json
{
  "extends": "@importantimport/tsconfig",
  "include": ["src"]
}
```

## License

Licensed under the [MIT](LICENSE).
