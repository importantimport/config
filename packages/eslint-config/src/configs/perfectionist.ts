import type { Linter } from 'eslint'

import perfectionistPlugin from 'eslint-plugin-perfectionist'

import type { IIConfig } from '..'

export const perfectionist = (option: Exclude<IIConfig['perfectionist'], false>): Linter.Config =>
  ({
    name: 'importantimport/perfectionist/rules',
    rules: perfectionistPlugin.configs[`recommended-${option}`].rules,
  })
