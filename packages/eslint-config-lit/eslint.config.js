import { configs as iiConfigs, prettier as iiPrettier } from '@importantimport/eslint-config'
import { configs as prettierConfigs } from '@importantimport/eslint-config-prettier'

import { lit, litTest } from './src/configs/lit.js'

/** @type {Record<string, import('eslint').Linter.FlatConfig>} */
export const configs = {
  ...iiConfigs,
  ...iiPrettier,
  lit,
  litTest,
  ...prettierConfigs,
}

/** @type {import('eslint').Linter.FlatConfig[]} */
export default Object.values(configs)
