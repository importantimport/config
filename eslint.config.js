import { createConfig } from '@importantimport/eslint-config'
import eslintPluginPlugin from 'eslint-plugin-eslint-plugin'

export default createConfig(
  {},
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
)
