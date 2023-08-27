import jsConfig from '@eslint/js'
import * as masknetPlugin from '@masknet/eslint-plugin'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import antfuPlugin from 'eslint-plugin-antfu'
import * as importPlugin from 'eslint-plugin-import'
import nPlugin from 'eslint-plugin-n'
import perfectionistPlugin from 'eslint-plugin-perfectionist'
import promisePlugin from 'eslint-plugin-promise'
import * as regexpPlugin from 'eslint-plugin-regexp'
import tsdocPlugin from 'eslint-plugin-tsdoc'
import unicornPlugin from 'eslint-plugin-unicorn'
import unusedImportsPlugin from 'eslint-plugin-unused-imports'
import globals from 'globals'

// local
import antfuRules from '../rules/antfu.js'
import importantimportRules from '../rules/ii.js'
import masknetRules from '../rules/masknet.js'
import perfectionistRules from '../rules/perfectionist.js'
import standardRules from '../rules/standard.js'
import unusedImportsRules from '../rules/unused-imports.js'
// utils
import { GLOB_ALL_JS, GLOB_ALL_TS, GLOB_DTS } from '../utils/glob.js'

/** @type {import('eslint').Linter.FlatConfig} */
export const js = {
  files: [GLOB_ALL_JS],
  ignores: ['coverage/*', 'dist/*', 'node_modules/*'],
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.es2021,
      ...globals.node,
    },
    parserOptions: {
      ecmaVersion: 'latest',
    },
    sourceType: 'module',
  },
  plugins: {
    // @ts-expect-error
    '@masknet': masknetPlugin,
    // @ts-expect-error
    'antfu': antfuPlugin,
    // @ts-expect-error
    'import': importPlugin,
    // @ts-expect-error
    'n': nPlugin,
    // @ts-expect-error
    'perfectionist': perfectionistPlugin,
    // @ts-expect-error
    'promise': promisePlugin,
    'regexp': regexpPlugin,
    // @ts-expect-error
    'unicorn': unicornPlugin,
    'unused-imports': unusedImportsPlugin,
  },
  rules: {
    ...jsConfig.configs.recommended.rules,
    // @ts-expect-error
    ...importPlugin.configs.recommended.rules,
    ...regexpPlugin.configs.recommended.rules,
    ...unicornPlugin.configs.recommended.rules,
    ...perfectionistPlugin.configs['recommended-natural'].rules,
    // ...masknetPlugin.configs.recommended.rules,
    // local
    ...standardRules,
    ...antfuRules,
    ...masknetRules,
    ...perfectionistRules,
    ...unusedImportsRules,
    ...importantimportRules,
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
}

/** @type {import('eslint').Linter.FlatConfig} */
export const ts = {
  ...js,
  files: [GLOB_ALL_TS],
  languageOptions: {
    ...js.languageOptions,
    // @ts-expect-error
    parser: tsParser,
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  plugins: {
    ...js.plugins,
    // @ts-expect-error
    '@typescript-eslint': tsPlugin,
    'tsdoc': tsdocPlugin,
  },
  // @ts-expect-error
  rules: {
    ...js.rules,
    ...importPlugin.configs.typescript.rules,
    ...tsPlugin.configs.recommended.rules,
    // @ts-expect-error
    ...tsPlugin.configs['eslint-recommended'].overrides[0].rules,
    'tsdoc/syntax': 'warn',
  },
}

/** @type {import('eslint').Linter.FlatConfig} */
export const dts = {
  files: [GLOB_DTS],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-extraneous-class': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'import/no-duplicates': 'off',
  },
}
