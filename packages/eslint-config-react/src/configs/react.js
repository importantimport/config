import ii from '@importantimport/eslint-config'
import { GLOB_JSX, GLOB_TSX } from '@importantimport/eslint-config/src/utils/glob'
// eslint-plugin-react
import reactPlugin from 'eslint-plugin-react'
import reactRuntime from 'eslint-plugin-react/configs/jsx-runtime'
import reactRecommended from 'eslint-plugin-react/configs/recommended'
// eslint-plugin-react-hooks
import reactHooksPlugin from 'eslint-plugin-react-hooks'
// eslint-plugin-react-refresh
import reactRefreshPlugin from 'eslint-plugin-react-refresh'

// rules
import reactRefreshRules from '../rules/react-refresh'

/** @type {import('eslint').Linter.FlatConfig} */
export const jsx = {
  files: [GLOB_JSX],
  languageOptions: {
    parserOptions: {
      ...ii.configs.js.languageOptions,
      ecmaFeatures: { jsx: true },
    },
  },
  plugins: {
    'react': reactPlugin,
    'react-hooks': reactHooksPlugin,
    'react-refresh': reactRefreshPlugin,
  },
  rules: {
    ...reactRefreshRules,
    ...reactRecommended.rules,
    ...reactRuntime.rules,
    ...reactHooksPlugin.configs.recommended.rules,
  },
  settings: { react: { version: 'latest' } },
}

/** @type {import('eslint').Linter.FlatConfig} */
export const tsx = {
  files: [GLOB_TSX],
  languageOptions: {
    ...ii.configs.ts.languageOptions,
    ecmaFeatures: { jsx: true },
  },
  plugins: jsx.plugins,
  rules: jsx.rules,
  settings: jsx.settings,
}

// module.exports = {
//   root: true,
//   env: { browser: true, es2020: true },
//   extends: [
//     'eslint:recommended',
//     'plugin:@typescript-eslint/recommended',
//     'plugin:react-hooks/recommended',
//   ],
//   ignorePatterns: ['dist', '.eslintrc.cjs'],
//   parser: '@typescript-eslint/parser',
//   plugins: ['react-refresh'],
//   rules: {
//     'react-refresh/only-export-components': [
//       'warn',
//       { allowConstantExport: true },
//     ],
//   },
// }

// /** @type {import('eslint').Linter.FlatConfig} */
// export default {
//   files: ['**/*.tsx'],
//   languageOptions: {
//     ...ii.configs.ts.languageOptions,
//     parser: svelteParser,
//     parserOptions: {
//       parser: ii.configs.ts.languageOptions.parser,
//     },
//   },
//   plugins: {
//     ...ii.configs.ts.plugins,
//     svelte: sveltePlugin,
//   },
//   rules: {
//     ...ii.configs.ts.rules,
//     ...sveltePlugin.configs.recommended.rules,
//   },
// }
