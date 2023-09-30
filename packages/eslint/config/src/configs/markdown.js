import markdownPlugin from 'eslint-plugin-markdown'

import { GLOB_MARKDOWN } from '../utils/glob.ts'

/** @type {import('eslint').Linter.FlatConfig} */
export const markdown = {
  files: [GLOB_MARKDOWN],
  ignores: ['.changesets/*', '**/CHANGELOG.md'],
  plugins: {
    // @ts-expect-error
    markdown: markdownPlugin,
  },
  processor: markdownPlugin.processors.markdown,
}

/** @type {import('eslint').Linter.FlatConfig} */
export const markdownCodeBlock = {
  files: [`${GLOB_MARKDOWN}/*`],
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        impliedStrict: true,
      },
    },
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
  markdownCodeBlock,
]
