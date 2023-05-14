import yamlPlugin from 'eslint-plugin-yml'
import yamlPraser from 'yaml-eslint-parser'

/** @type {import('eslint').Linter.FlatConfig} */
export default {
  files: ['**/*.{yml,yaml}'],
  languageOptions: {
    parser: yamlPraser,
  },
  plugins: {
    yml: yamlPlugin,
  },
  rules: {
    ...yamlPlugin.configs.standard.rules,
  },
}
