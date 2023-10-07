import type { FlatESLintConfigItem } from 'eslint-define-config'

import { pluginPerfectionist } from '../../utils/plugins'

export const jsPerfectionist = (): FlatESLintConfigItem => ({
  plugins: { perfectionist: pluginPerfectionist },
  rules: pluginPerfectionist.configs['recommended-natural'].rules,
})
