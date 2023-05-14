import jsonSchemaValidatorPlugin from 'eslint-plugin-json-schema-validator'

/** @type {import('eslint').Linter.FlatConfig} */
export default {
  files: ['**/*.{json,jsonc,json5,yml,yaml,toml}'],
  plugins: {
    'json-schema-validator': jsonSchemaValidatorPlugin,
  },
  rules: {
    ...jsonSchemaValidatorPlugin.configs.recommended.rules,
  },
}
