import commentsPlugin from '@eslint-community/eslint-plugin-eslint-comments'

/** @type {import('eslint').Linter.FlatConfig} */
export default {
  plugins: {
    '@eslint-community/eslint-comments': commentsPlugin,
  },
  rules: {
    ...commentsPlugin.configs.recommended.rules,
    '@eslint-community/eslint-comments/no-unused-disable': 'error',
  },
}
