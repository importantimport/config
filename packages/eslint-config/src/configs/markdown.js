import markdownPlugin from 'eslint-plugin-markdown'

/** @type {import('eslint').Linter.FlatConfig} */
export const markdown = {
  ignores: ['.changesets/*', '**/CHANGELOG.md'],
  plugins: {
    markdown: markdownPlugin,
  },
  files: ['**/*.md'],
  processor: markdownPlugin.processors.markdown,
}

/** @type {import('eslint').Linter.FlatConfig} */
export const markdownCodeBlock = {
  files: ['**/*.md/**'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          impliedStrict: true
        }
      }
    },
    rules: {
      // @ts-expect-error
      ...markdownPlugin.configs.recommended.overrides[1].rules,
      // Excerpt from https://github.com/antfu/eslint-config/blob/2db56ec8f0b735fe5231405223d00838f66e0f94/packages/eslint-config-basic/index.js#L187-L205
      '@typescript-eslint/comma-dangle': 'off',
      '@typescript-eslint/consistent-type-imports': 'off',
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/no-redeclare': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      'import/no-duplicates': 'off',
      'import/no-unresolved': 'off',
      'no-alert': 'off',
      'no-console': 'off',
      'no-restricted-imports': 'off',
      'unicorn/filename-case': 'off',
      'unused-imports/no-unused-imports': 'off',
      'unused-imports/no-unused-vars': 'off',
    },
  }

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  markdown,
  markdownCodeBlock
]
