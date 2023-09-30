import type { FlatESLintConfigItem } from 'eslint-define-config'

import { GLOB_JSON, GLOB_JSON5, GLOB_JSONC } from '../../utils/glob'
import { parserJSONC, pluginJSONC } from '../../utils/plugins'
import { sortPackageJson } from './sort/package'
import { sortTsconfig } from './sort/tsconfig'

export const jsonc = (): FlatESLintConfigItem[] => [
  {
    // @ts-expect-error plugin types error
    plugins: { jsonc: pluginJSONC },
  },
  {
    files: [GLOB_JSON, GLOB_JSON5, GLOB_JSONC],
    // @ts-expect-error parser types error
    languageOptions: { parser: parserJSONC },
    // @ts-expect-error plugin types error
    rules: {
      ...pluginJSONC.configs.base.overrides[0].rules,
      ...pluginJSONC.configs['recommended-with-jsonc'].rules,
      'jsonc/array-bracket-spacing': ['error', 'never'],
      'jsonc/comma-dangle': ['error', 'never'],
      'jsonc/comma-style': ['error', 'last'],
      'jsonc/indent': ['error', 2],
      'jsonc/key-spacing': ['error', { afterColon: true, beforeColon: false }],
      'jsonc/object-curly-newline': ['error', { consistent: true, multiline: true }],
      'jsonc/object-curly-spacing': ['error', 'always'],
      'jsonc/object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],
      'jsonc/quote-props': 'error',
      'jsonc/quotes': 'error',
    },
  },
  sortPackageJson(),
  sortTsconfig(),
]