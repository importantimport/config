import { properties } from '../utils/properties.js'

/** @type {import('eslint').Linter.FlatConfig['rules']} */
export default {
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
