import type { FlatESLintConfigItem } from '@importantimport/eslint-config/utils/types'

import { GLOB_TS, GLOB_TSX } from '@importantimport/eslint-config/utils/glob'
import { pluginAntfu } from '@importantimport/eslint-config/utils/plugins'

import type { OptionsTypeScript } from '../../utils/options'

import { parserTypeScript, pluginStylisticTs, pluginTSDoc, pluginTypeScript } from '../../utils/plugins'
import { dts } from './dts'

export const ts = (options?: OptionsTypeScript): FlatESLintConfigItem[] => [
  {
    files: [GLOB_TS, GLOB_TSX],
    languageOptions: {
      // @ts-expect-error parser types error
      parser: parserTypeScript,
      parserOptions: {
        project: options?.project,
        sourceType: 'module',
      },
    },
    plugins: {
      '@stylistic/ts': pluginStylisticTs,
      // @ts-expect-error plugin types error
      '@typescript-eslint': pluginTypeScript,
      antfu: pluginAntfu,
      tsdoc: pluginTSDoc,
    },
    // @ts-expect-error plugin types error
    rules: {
      ...pluginTypeScript.configs['eslint-recommended'].overrides![0].rules,
      ...(options?.project
        ? [
            // @ts-expect-error plugin types error
            ...pluginTypeScript.configs.strict.rules,
            ...pluginTypeScript.configs['recommended-requiring-type-checking'].rules,
          ]
        : []),
      /**
       * perfectionist
       * {@link https://github.com/azat-io/eslint-plugin-perfectionist#%EF%B8%8F-troubleshooting}
       */
      '@typescript-eslint/adjacent-overload-signatures': 'off',
      /**
       * unused-imports
       * {@link https://github.com/sweepline/eslint-plugin-unused-imports#usage}
       */
      '@typescript-eslint/no-unused-vars': 'off',
      /**
       * perfectionist
       * {@link https://github.com/azat-io/eslint-plugin-perfectionist#%EF%B8%8F-troubleshooting}
       */
      '@typescript-eslint/sort-type-constituents': 'off',
      'antfu/no-const-enum': 'error',
      'tsdoc/syntax': 'warn',
    },
  },
  dts(),
]
