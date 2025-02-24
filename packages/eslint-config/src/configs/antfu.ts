import type { Linter } from 'eslint'

export const disableAntfuTopLevelFunction: Linter.Config = {
  name: 'importantimport/antfu/rules',
  rules: {
    'antfu/top-level-function': 'off',
    'func-style': ['error', 'expression'],
  },
} as const
