import type { FlatESLintConfigItem } from '@importantimport/eslint-config/utils/types'

import { GLOB_CSS_JS, GLOB_CSS_TS } from '@importantimport/eslint-config/utils/glob'

import { rules } from '../../rules/recess-order'

export const vanillaExtract = (): FlatESLintConfigItem[] => [{
  files: [GLOB_CSS_JS, GLOB_CSS_TS],
  rules,
}]
