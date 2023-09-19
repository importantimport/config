// plugins
import { js } from '@importantimport/eslint-config/src/configs/js.js'

// rules
import rules from '../rules/recess-order.js'

// utils
import { GLOB_CSS_JS, GLOB_CSS_TS } from '../utils/glob.js'

const { perfectionist } = /** @type {Object.<string, import('eslint').ESLint.Plugin>} */ (js.plugins)

/** @type {import('eslint').Linter.FlatConfig} */
export const vanillaExtract = {
  files: [GLOB_CSS_JS, GLOB_CSS_TS],
  ignores: ['coverage/*', 'dist/*', 'node_modules/*'],
  plugins: { perfectionist },
  rules,
}
