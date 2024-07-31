import { antfu } from '@antfu/eslint-config'
import { ii } from '@importantimport/eslint-config'
import eslintPluginPlugin from 'eslint-plugin-eslint-plugin'

export default antfu({
  typescript: true,
//   https://github.com/antfu/eslint-config/issues/564
//   typescript: {
//     tsconfigPath: 'tsconfig.json',
//   },
})
  .append(ii({
    // FIXME: enable functional when the bug above is fixed
    functional: false,
  }))
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
