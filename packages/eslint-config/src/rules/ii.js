/** @type {import('eslint').Linter.FlatConfig['rules']} */
export default {
  // disable top-level-function
  'antfu/top-level-function': 'off',
  // allow array reduce
  'unicorn/no-array-reduce': 'off',
  // disable check file names
  'unicorn/prevent-abbreviations': [
    'error',
    {
      checkFilenames: false,
    },
  ],
}
