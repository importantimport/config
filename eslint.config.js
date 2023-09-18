import config from '@importantimport/eslint-config'
import extra from '@importantimport/eslint-config-extra'
// import { defineFlatConfig } from 'eslint-define-config'
import eslintPluginPlugin from 'eslint-plugin-eslint-plugin'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  ...config,
  ...extra,
  {
    files: ['./packages/eslint-config/**/*.js', './packages/eslint-config-*/**/*.js'],
    plugins: {
      'eslint-plugin': eslintPluginPlugin,
    },
    rules: {
      // @ts-ignore jesus christ
      ...eslintPluginPlugin.configs.recommended.rules,
    },
  },
]
