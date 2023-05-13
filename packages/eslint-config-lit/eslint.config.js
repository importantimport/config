import ii from '@importantimport/eslint-config'

import { lit, litTest } from './src/configs/lit'

/** @type {Record<string, import('eslint').Linter.FlatConfig>} */
export const configs = {
  ...ii.configs,
  lit,
  litTest,
}

/** @type {import('eslint').Linter.FlatConfig[]} */
export default Object.values(configs)
