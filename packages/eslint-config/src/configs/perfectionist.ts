import type { Linter } from 'eslint'

import type { IIConfig } from '..'

import perfectionistPlugin from 'eslint-plugin-perfectionist'

export const perfectionist = (option: Exclude<IIConfig['perfectionist'], false>): Linter.Config => 
  ({
    name: 'importantimport/perfectionist/rules',
    rules: perfectionistPlugin.configs[`recommended-${option}`].rules,
  })

