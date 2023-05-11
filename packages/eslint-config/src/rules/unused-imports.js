/** @type {import('eslint').Linter.FlatConfig['rules']} */
export default {
  '@typescript-eslint/no-unused-vars': 'off',
  'unused-imports/no-unused-vars': [
    'warn',
    {
      args: 'after-used',
      argsIgnorePattern: '^_',
      vars: 'all',
      varsIgnorePattern: '^_',
    },
  ],
  'unused-vars': 'off',
}
