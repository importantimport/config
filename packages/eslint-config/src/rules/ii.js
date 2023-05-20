/** @type {import('eslint').Linter.FlatConfig['rules']} */
const sort = {
  // https://github.com/lydell/eslint-plugin-simple-import-sort#example-configuration
  'import/first': 'error',
  'import/newline-after-import': 'error',
  'import/no-duplicates': 'error',
  'simple-import-sort/exports': 'error',
  'simple-import-sort/imports': 'error',
  'sort-imports': 'off',
  'sort-keys-fix/sort-keys-fix': 'error',
  'sort-vars': 'error',
}

/** @type {import('eslint').Linter.FlatConfig['rules']} */
export default {
  ...sort,
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
