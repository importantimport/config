import ii from '@importantimport/eslint-config'

import svelte from './src/configs/svelte'

/** @type {Record<string, import('eslint').Linter.FlatConfig>} */
export const configs = {
  ...ii.configs,
  svelte,
}

/** @type {import('eslint').Linter.FlatConfig[]} */
export default Object.values(configs)
