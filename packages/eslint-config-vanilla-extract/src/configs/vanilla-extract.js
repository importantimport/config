// rules
import rules from '../rules/recess-order.js'

// utils
import { GLOB_CSS_JS, GLOB_CSS_TS } from '../utils/glob.js'

/** @type {import('eslint').Linter.FlatConfig} */
export const js = {
  files: [GLOB_CSS_JS, GLOB_CSS_TS],
  ignores: ['coverage/*', 'dist/*', 'node_modules/*'],
  rules,
}
