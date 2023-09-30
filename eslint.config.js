import { createFullConfig } from '@importantimport/eslint-config'
import extra from '@importantimport/eslint-config-extra'
import eslintPluginPlugin from 'eslint-plugin-eslint-plugin'

export default await createFullConfig(
  { ts: true },
  // @ts-ignore
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
)
