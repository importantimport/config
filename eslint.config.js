import config from '@importantimport/eslint-config'
import extra from '@importantimport/eslint-config-extra'
import { defineFlatConfig } from 'eslint-define-config'
import eslintPluginPlugin from 'eslint-plugin-eslint-plugin'

export default defineFlatConfig([
  ...config,
  ...extra,
  {
    files: ['./packages/eslint-config/**/*.js', './packages/eslint-config-*/**/*.js'],
    plugins: {
      'eslint-plugin': eslintPluginPlugin,
    },
    rules: {
      ...eslintPluginPlugin.configs.recommended.rules,
    },
  },
])
