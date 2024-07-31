import type { Linter } from 'eslint'

import type { Options } from '../options'

type Option = Exclude<Options['perfectionist'], false>

/** @see {@link https://github.com/azat-io/eslint-plugin-perfectionist/blob/bf730c4343275878814b7f48757c06f4adc69ca5/index.ts#L26C1-L29C2} */
interface PerfectionistOptions {
  order: 'asc' | 'desc'
  type: 'alphabetical' | 'line-length' | 'natural'
}

/** @see {@link https://github.com/azat-io/eslint-plugin-perfectionist/blob/bf730c4343275878814b7f48757c06f4adc69ca5/index.ts#L38-L58} */
const rules = [
  'sort-variable-declarations',
  'sort-intersection-types',
  'sort-svelte-attributes',
  'sort-astro-attributes',
  'sort-vue-attributes',
  'sort-array-includes',
  'sort-named-imports',
  'sort-named-exports',
  'sort-object-types',
  'sort-union-types',
  'sort-switch-case',
  'sort-interfaces',
  'sort-jsx-props',
  'sort-classes',
  'sort-imports',
  'sort-exports',
  'sort-objects',
  'sort-enums',
  'sort-maps',
] as const

/** @see {@link https://github.com/azat-io/eslint-plugin-perfectionist/blob/bf730c4343275878814b7f48757c06f4adc69ca5/index.ts#L62-L68} */
const getRules = (options: PerfectionistOptions): Linter.RulesRecord =>
  Object.fromEntries(
    rules.map(rule => [
      `perfectionist/${rule}`,
      ['error', options],
    ]),
  )

export const perfectionist = (type: Option): Linter.FlatConfig => ({
  name: 'importantimport/perfectionist/rules',
  rules: {
    'import/order': 'off',
    'sort-imports': 'off',
    ...getRules({
      order: type === 'line-length' ? 'desc' : 'asc',
      type,
    }),
  },
})
