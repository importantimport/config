import type { Linter } from 'eslint'

/**
 * Sort package.json scripts
 *
 * Requires `jsonc` config
 */
export const sortPackageJsonScripts: Linter.Config = {
  files: ['**/package.json'],
  name: 'importantimport/sort/package-json-scripts',
  rules: {
    'jsonc/sort-keys': [
      'error',
      {
        order: { type: 'asc' },
        pathPattern: '^scripts$',
      },
    ],
  },
}
