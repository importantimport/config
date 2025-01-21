import type { Linter } from 'eslint'

import sonarjsPlugin from 'eslint-plugin-sonarjs'

export const sonarjs: Linter.Config[] = [
  {
    name: 'importantimport/sonarjs/setup',
    plugins: {
      'sonarjs': sonarjsPlugin
    },
  },
  {
    name: 'importantimport/sonarjs/rules',
    rules: sonarjsPlugin.configs.recommended.rules
  }
] as const
