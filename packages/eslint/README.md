# ESLint Config

## Packages

| Package | Description | Basic Config Required |
| - | - | - |
| [`@importantimport/eslint-config`](./config/) | Basic Config (JS, JSON) | - |
| [`@importantimport/eslint-config-ts`](./ts/) | TypeScript Config | ✅ |
| [`@importantimport/eslint-config-react`](./react) | Library / Frameworks (React) | ✅ |
| [`@importantimport/eslint-config-vanilla-extract`](./vanilla-extract) | Library / Frameworks (Vanilla Extract) | ✅ |

## Usage

### `createFullConfig`

You can create a configuration containing extensions directly using the `createFullConfig` function provided by `@importantimport/eslint-config`.

First install the configuration, add `ts` and `react` here:

```bash
pnpm add -D eslint @importantimport/eslint-config @importantimport/eslint-config-ts @importantimport/eslint-config-react
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

