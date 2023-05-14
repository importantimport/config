import { configs as iiConfigs } from '@importantimport/eslint-config'

import { lit, litTest } from './src/configs/lit.js'

/** @type {Record<string, import('eslint').Linter.FlatConfig>} */
export const configs = {
  ...iiConfigs,
  lit,
  litTest,
}

/** @type {import('eslint').Linter.FlatConfig[]} */
export default Object.values(configs)
