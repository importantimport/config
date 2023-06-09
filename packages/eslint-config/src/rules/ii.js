/** @type {import('eslint').Linter.FlatConfig['rules']} */
export default {
  // disable top-level-function
  'antfu/top-level-function': 'off',
  // perfer function expressions
  'func-style': [
    'error',
    'expression',
    { allowArrowFunctions: true },
  ],
  // allow array reduce
  'unicorn/no-array-reduce': 'off',
  // disable prevent abbreviations
  'unicorn/prevent-abbreviations': 'off',
}
