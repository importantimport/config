import { properties } from '../utils/properties'

/** @type {import('eslint').Linter.FlatConfig['rules']} */
export default {
  'perfectionist/sort-objects': [
    'warn',
    {
      type: 'natural',
      order: 'asc',
      'always-on-top': properties,
      'partition-by-comment': 'Part:**',
    }
  ]
}
