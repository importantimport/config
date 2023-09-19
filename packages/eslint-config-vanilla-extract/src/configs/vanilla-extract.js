// parent config
import { ts } from '@importantimport/eslint-config/src/configs/js.js'

// rules
import recessOrderRules from '../rules/recess-order.js'
// utils
import { GLOB_CSS_TS } from '../utils/glob.js'

/** @type {import('eslint').Linter.FlatConfig} */
export const vanillaExtract = {
  ...ts,
  files: [GLOB_CSS_TS],
  rules: {
    ...ts.rules,
    ...recessOrderRules,
  },
}
