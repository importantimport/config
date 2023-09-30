import type { FlatESLintConfigItem } from 'eslint-define-config'

import { pluginUnicorn } from '../../utils/plugins'

export const jsUnicorn = (): FlatESLintConfigItem => ({
  plugins: { unicorn: pluginUnicorn },
  rules: {
    ...pluginUnicorn.configs.recommended.rules,
    // only kebab-case & snake_case
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          kebabCase: true,
          snakeCase: true,
        },
        ignore: ['README.md'],
      },
    ],
    // allow array for each
    'unicorn/no-array-for-each': 'off',
    // allow array reduce
    'unicorn/no-array-reduce': 'off',
    // disable prevent abbreviations
    'unicorn/prevent-abbreviations': 'off',
  },
})