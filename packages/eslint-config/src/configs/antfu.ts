import type { Linter } from 'eslint'

export const disableAntfuTopLevelFunction: Linter.FlatConfig = {
  name: 'importantimport/antfu/rules',
  rules: {
    'antfu/top-level-function': 'off',
  },
} as const
