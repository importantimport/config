import { jsonSchema } from './src/configs/json-schema.js'
import { toml } from './src/configs/toml.js'
import { yaml, yamlPrettier } from './src/configs/yaml.js'

/** @type {Record<string, import('eslint').Linter.FlatConfig>} */
export const configs = {
  jsonSchema,
  toml,
  yaml,
}

/** @type {Record<string, import('eslint').Linter.FlatConfig>} */
export const prettier = {
  yamlPrettier,
}

/** @type {import('eslint').Linter.FlatConfig[]} */
export default Object.values(configs)
