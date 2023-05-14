import yamlPlugin from 'eslint-plugin-yml'
import yamlPraser from 'yaml-eslint-parser'

/** @type {import('eslint').Linter.FlatConfig} */
export default {
  files: ['**/*.{yml,yaml}'],
  ignores: ['**/pnpm-lock.yaml'],
  languageOptions: {
    parser: yamlPraser,
  },
  plugins: {
    yml: yamlPlugin,
  },
  rules: {
    ...yamlPlugin.configs.base.overrides[0].rules,
    ...yamlPlugin.configs.standard.rules,
  },
}
