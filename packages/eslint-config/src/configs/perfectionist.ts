import type { Linter } from 'eslint'

import perfectionistPlugin from 'eslint-plugin-perfectionist'

import type { Options } from '../options'

type Option = Exclude<Options['perfectionist'], false>

/** @see {@link https://github.com/azat-io/eslint-plugin-perfectionist/blob/bf730c4343275878814b7f48757c06f4adc69ca5/index.ts#L26C1-L29C2} */
interface PerfectionistOptions {
  type: 'alphabetical' | 'line-length' | 'natural'
  order: 'desc' | 'asc'
}

const { rules } = perfectionistPlugin

/** @see {@link https://github.com/azat-io/eslint-plugin-perfectionist/blob/bf730c4343275878814b7f48757c06f4adc69ca5/index.ts#L62-L68} */
const getRules = (options: PerfectionistOptions): Linter.RulesRecord =>
  Object.fromEntries(
    Object.keys(rules).map(rule => [
      `perfectionist/${rule}`,
      ['error', options],
    ]),
  )

export const perfectionist = (type: Option): Linter.FlatConfig => ({
  name: 'importantimport/perfectionist/rules',
  rules: getRules({
    type,
    order: type === 'line-length' ? 'desc' : 'asc'
  }),
})
