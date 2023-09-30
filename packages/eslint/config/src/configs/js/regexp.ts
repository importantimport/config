import type { FlatESLintConfigItem } from 'eslint-define-config'

import { pluginRegExp } from '../../utils/plugins'

export const jsRegExp = (): FlatESLintConfigItem => ({
  plugins: { regexp: pluginRegExp },
  rules: pluginRegExp.configs.recommended.rules,
})
