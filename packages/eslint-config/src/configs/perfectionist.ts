import type { Linter } from 'eslint'

import perfectionistPlugin from 'eslint-plugin-perfectionist'

import type { Options } from '../options'

type Option = Exclude<Options['perfectionist'], false>

/* eslint-disable ts/no-unsafe-assignment, ts/no-unsafe-member-access */
const perfectionistRules = {
  'alphabetical': perfectionistPlugin.configs['recommended-alphabetical'].rules,
  'line-length': perfectionistPlugin.configs['recommended-line-length'].rules,
  'natural': perfectionistPlugin.configs['recommended-natural'].rules,
} as const satisfies Record<Option, unknown>
/* eslint-enable ts/no-unsafe-assignment, ts/no-unsafe-member-access */

export const perfectionist = (option: Option): Linter.FlatConfig => ({
  name: 'importantimport/perfectionist/rules',
  rules: perfectionistRules[option] as Linter.RulesRecord,
})
