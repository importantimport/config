import tomlPlugin from 'eslint-plugin-toml'
import tomlPraser from 'toml-eslint-parser'

/** @type {import('eslint').Linter.FlatConfig} */
export default {
  files: ['**/*.toml'],
  languageOptions: {
    parser: tomlPraser,
  },
  plugins: {
    toml: tomlPlugin,
  },
  rules: {
    ...tomlPlugin.configs.standard.rules,
  },
}
