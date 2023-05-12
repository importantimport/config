/** @type {import('eslint').Linter.FlatConfig['rules']} */
export default {
  // disable top-level-function
  'antfu/top-level-function': 'off',
  // disable check file names
  'unicorn/prevent-abbreviations': [
    'error',
    {
      checkFileNames: false,
    },
  ],
}
