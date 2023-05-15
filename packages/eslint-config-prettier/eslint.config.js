import { prettier } from './src/configs/prettier'

/** @type {Record<string, import('eslint').Linter.FlatConfig>} */
export const configs = {
  prettier,
}

/** @type {import('eslint').Linter.FlatConfig[]} */
export default Object.values(configs)
