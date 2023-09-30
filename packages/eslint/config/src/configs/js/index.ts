import type { EcmaVersion, FlatESLintConfigItem, LanguageOptions } from 'eslint-define-config'

// @ts-expect-error missing types
import eslintJs from '@eslint/js'
import globals from 'globals'

import { jsComments } from './comments'
import { jsImports } from './imports'
import { jsNode } from './node'
import { jsPerfectionist } from './perfectionist'
import { jsRegExp } from './regexp'
import { jsStylistic } from './stylistic'
import { jsUnicorn } from './unicorn'

export type OptionsJavaScript = {
  ecmaVersion: EcmaVersion
  globals?: LanguageOptions['globals']
}

export const js = (options: OptionsJavaScript): FlatESLintConfigItem[] => [
  {
    languageOptions: {
      ecmaVersion: options.ecmaVersion,
      globals: options.globals ?? {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
        document: 'readonly',
        navigator: 'readonly',
        window: 'readonly',
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: options.ecmaVersion,
        sourceType: 'module',
      },
      sourceType: 'module',
    },
    rules: {
      /** `eslint:recommended` */
      ...eslintJs.configs.recommended.rules,
      /**
       * perfectionist
       * {@link https://github.com/azat-io/eslint-plugin-perfectionist#%EF%B8%8F-troubleshooting}
       */
      'sort-imports': 'off',
      /**
       * perfectionist
       * {@link https://github.com/azat-io/eslint-plugin-perfectionist#%EF%B8%8F-troubleshooting}
       */
      'sort-keys': 'off',
    },
    settings: {
      'import/external-module-folders': [
        'node_modules',
        'node_modules/@d-ts',
        'node_modules/@types',
      ],
      /**
       * Fucking `eslint-plugin-import`
       * @see {@link https://github.com/import-js/eslint-plugin-import/issues/2556}
       */
      'import/parsers': {
        espree: ['.js', '.cjs', '.mjs', '.jsx'],
      },
      /**
       * Fucking `eslint-plugin-import`
       * @see {@link https://github.com/import-js/eslint-plugin-import/issues/2556}
       */
      'import/resolver': { node: true },
    },
  },
  jsComments(),
  jsImports(),
  jsNode(),
  jsPerfectionist(),
  jsRegExp(),
  jsStylistic(),
  jsUnicorn(),
]