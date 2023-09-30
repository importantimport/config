import type { FlatESLintConfigItem } from 'eslint-define-config'

import { pluginComments } from '../../utils/plugins'

export const jsComments = (): FlatESLintConfigItem => ({
  plugins: { '@eslint-community/eslint-comments': pluginComments },
  rules: {
    ...pluginComments.configs.recommended.rules,
    '@eslint-community/eslint-comments/no-unused-disable': 'error',
  },
})
