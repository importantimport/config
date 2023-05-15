import yamlPlugin from 'eslint-plugin-yml'
import yamlPraser from 'yaml-eslint-parser'

/** @type {import('eslint').Linter.FlatConfig} */
export const yaml = {
  files: ['**/*.{yml,yaml}'],
  ignores: ['**/pnpm-lock.yaml'],
  languageOptions: {
    parser: yamlPraser,
  },
  plugins: {
    yml: yamlPlugin,
  },
  rules: {
    ...yamlPlugin.configs.base.overrides[0].rules,
    ...yamlPlugin.configs.standard.rules,
    'yml/block-mapping-colon-indicator-newline': [
      'error',
      'never',
    ],
    'yml/no-multiple-empty-lines': 'error',
    'yml/no-trailing-zeros': 'error',
    'yml/sort-keys': [
      'error',
      {
        order: { type: 'asc' },
        pathPattern: '.*',
      },
    ],
  },
}

/** @type {import('eslint').Linter.FlatConfig} */
export const yamlPrettier = {
  files: ['**/*.{yml,yaml}'],
  ignores: ['**/pnpm-lock.yaml'],
  rules: {
    ...yamlPlugin.configs.prettier.rules,
  },
}
