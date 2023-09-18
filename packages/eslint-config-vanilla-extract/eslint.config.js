import { vanillaExtract } from './src/configs/vanilla-extract.js'

/** @type {Record<string, import('eslint').Linter.FlatConfig>} */
export const configs = {
  vanillaExtract,
}

/** @type {import('eslint').Linter.FlatConfig[]} */
export default Object.values(configs)
