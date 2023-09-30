import type { FlatESLintConfigItem } from 'eslint-define-config'

import { pluginNode } from '../../utils/plugins'

export const jsNode = (): FlatESLintConfigItem => ({
  plugins: { n: pluginNode },
  rules: {
    ...pluginNode.configs['recommended-module'].rules,
    'n/no-missing-import': 'off',
  },
})
