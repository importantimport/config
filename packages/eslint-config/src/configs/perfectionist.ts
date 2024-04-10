import type { Linter } from 'eslint'

// @ts-expect-error no types
import perfectionistPlugin from 'eslint-plugin-perfectionist'

import type { Options } from '../options'

export const perfectionist = (option: Exclude<Options['perfectionist'], false>): Linter.FlatConfig => ({
  name: 'importantimport/perfectionist/rules',
  rules: perfectionistPlugin.configs[`recommended-${option}`].rules as Record<string, any>,
})
