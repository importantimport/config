import prettierConfig from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier'

/** @type {import('eslint').Linter.FlatConfig} */
export const prettier = {
  plugins: {
    prettier: prettierPlugin,
  },
  rules: {
    ...prettierConfig.rules,
    ...prettierPlugin.configs.recommended.rules,
    'prettier/prettier': 'error',
  },
}
