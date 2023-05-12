import config from '@importantimport/eslint-config'
import { defineFlatConfig } from 'eslint-define-config'
import eslintPluginPlugin from 'eslint-plugin-eslint-plugin'

export default defineFlatConfig([
  ...config,
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
