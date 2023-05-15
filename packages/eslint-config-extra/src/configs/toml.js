import tomlPlugin from 'eslint-plugin-toml'
import tomlPraser from 'toml-eslint-parser'

/** @type {import('eslint').Linter.FlatConfig} */
export const toml = {
  files: ['**/*.toml'],
  languageOptions: {
    parser: tomlPraser,
  },
  plugins: {
    toml: tomlPlugin,
  },
  rules: {
    ...tomlPlugin.configs.base.overrides[0].rules,
    ...tomlPlugin.configs.standard.rules,
  },
}
