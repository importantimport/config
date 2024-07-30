# @importantimport/tsconfig

## Usage

### Install

```bash
pnpm add -D @importantimport/tsconfig # pnpm
yarn add -D @importantimport/tsconfig # yarn
npm i -D @importantimport/tsconfig # npm
```

### Example

###### general

```jsonc
// tsconfig.json
{
  "extends": "@importantimport/tsconfig"
}
```

###### app

```jsonc
// tsconfig.app.json
{
  "extends": "@importantimport/tsconfig/app.json",
  "include": ["src", "test"]
}
```

###### node

```jsonc
// tsconfig.node.json
{
  "extends": "@importantimport/tsconfig/node.json",
  "include": ["*.config.ts", "*.config.js"]
}
```

### Parts

This package has some framework-specific tsconfig parts that you can use to override the default tsconfig.

```jsonc
// tsconfig.app.json
{
  "extends": [
    "@importantimport/tsconfig/app.json",
    "@importantimport/tsconfig/parts/jsx-react.json",
    "@importantimport/tsconfig/parts/paths-at.json"
  ],
  "include": ["src", "test"]
}
```

Go to the [`parts`](/packages/tsconfig/parts/) directory to see all available parts.

## License

[MIT](../../LICENSE.md)
