import { configs as iiConfigs } from '@importantimport/eslint-config'

import { jsx, tsx } from './src/configs/react'

/** @type {Record<string, import('eslint').Linter.FlatConfig>} */
export const configs = {
  ...iiConfigs,
  jsx,
  tsx,
}

/** @type {import('eslint').Linter.FlatConfig[]} */
export default Object.values(configs)
