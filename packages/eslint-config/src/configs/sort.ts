import type { Linter } from 'eslint'

/**
 * Sort package.json scripts
 *
 * Requires `jsonc` config
 */
export const sortPackageJsonScripts = (): Linter.FlatConfig => ({
    name: 'importantimport/sort/package-json-scripts',
    files: ['**/package.json'],
    rules: {
        'jsonc/sort-keys': [
            'error',
            {
                order: { type: 'asc' },
                pathPattern: '^scripts$',
            },
        ]
    }
})