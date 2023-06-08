/** @type {import('eslint').Linter.FlatConfig} */
export const ignores = {
  ignores: [
    '**/dist/*',
    '**/node_modules/*',
    '**/package-lock.json',
    '**/pnpm-lock.yaml',
    '**/yarn.lock',
  ],
}
