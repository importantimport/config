import { createConfig } from '@importantimport/eslint-config'
import eslintPluginPlugin from 'eslint-plugin-eslint-plugin'

export default createConfig({
  typescript: {
    tsconfigPath: 'tsconfig.json',
  },
})
  .append({
    name: 'workspace/eslint-plugin/setup',
    plugins: {
      'eslint-plugin': eslintPluginPlugin,
    },
  }, {
    files: ['./packages/eslint-config/**/*.ts'],
    name: 'workspace/eslint-plugin/rules',
    rules: eslintPluginPlugin.configs.recommended.rules,
  })
