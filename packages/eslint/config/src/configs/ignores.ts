import type { FlatESLintConfigItem } from 'eslint-define-config'

import { GLOB_EXCLUDE } from '../utils/glob'

export type OptionsIgnores = FlatESLintConfigItem['ignores'] | boolean

export const ignores = (options: OptionsIgnores): FlatESLintConfigItem => ({
  ignores: typeof options === 'boolean' ? GLOB_EXCLUDE : options,
})
