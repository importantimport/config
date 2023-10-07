import type { FlatESLintConfigItem } from '@importantimport/eslint-config/utils/types'

import { properties } from '../utils/properties.js'

export const rules: FlatESLintConfigItem['rules'] = {
  'perfectionist/sort-objects': [
    'warn',
    {
      'always-on-top': properties,
      order: 'asc',
      'partition-by-comment': 'Part:**',
      type: 'natural',
    },
  ],
}
