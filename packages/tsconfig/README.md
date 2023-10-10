# @importantimport/tsconfig

## Usage

### Example

###### general

```jsonc
// tsconfig.json
{
  "extends": "@importantimport/tsconfig",
  // "compilerOptions": {
  //   optional (jsx):
  //   "jsx": "react-jsx",
  //   optional (lit):
  //   "experimentalDecorators": true,
  //   optional (recommended paths):
  //   "baseUrl": ".",
  //   "paths": {
  //     "~/*": ["src/*"]
  //   }
  // },
  "include": ["src"],
  // "references": [
  //   optional (node):
  //   { "path": "./tsconfig.node.json" },
  //   optional (eslint):
  //   { "path": "./tsconfig.eslint.json" },
  // ]
}
```

###### node

```jsonc
// tsconfig.node.json
{
  "extends": "@importantimport/tsconfig/tsconfig.node.json",
  "include": ["*.config.ts"]
}
```

###### eslint

```json
// tsconfig.eslint.json
{
  "extends": "./tsconfig.json",
  "include": ["src", "test", "*.config.ts"],
  "exclude": ["node_modules"]
}
```

### With `@importantimport/eslint-config`

```bash
pnpm add -D eslint @importantimport/eslint-config @importantimport/eslint-config-ts @importantimport/tsconfig
```

```ts
// eslint.config.js
import { createFullConfig } from '@importantimport/eslint-config'

export default await createFullConfig({
  // ...yourOptions,
  ts: {
    // one root tsconfig.json
    project: ['./tsconfig.eslint.json']
    // one tsconfig.json per package
    // project: ['./tsconfig.eslint.json', './packages/*/tsconfig.json']
  }
})
```
