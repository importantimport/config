import type { FlatESLintConfigItem } from '@importantimport/eslint-config/utils/types'

import { GLOB_DTS } from '@importantimport/eslint-config/utils/glob'

export const dts = (): FlatESLintConfigItem => ({
  files: [GLOB_DTS],
  rules: {
    'eslint-comments/no-unlimited-disable': 'off',
    'import/no-duplicates': 'off',
    'unused-imports/no-unused-vars': 'off',
  },
})