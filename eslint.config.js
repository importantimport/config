import { createConfig } from '@importantimport/eslint-config'
import eslintPluginPlugin from 'eslint-plugin-eslint-plugin'

export default createConfig()
  .append({
    name: 'workspace/eslint-plugin/setup',
    plugins: {
      'eslint-plugin': eslintPluginPlugin,
    },
  }, {
    name: 'workspace/eslint-plugin/rules',
    files: ['./packages/eslint-config/**/*.ts'],
    rules: {
      // @ts-ignore jesus christ
      ...eslintPluginPlugin.configs.recommended.rules,
    },
  })
