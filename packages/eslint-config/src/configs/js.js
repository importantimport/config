import jsConfig from '@eslint/js'
// eslint-disable-next-line import/namespace
import * as masknetPlugin from '@masknet/eslint-plugin'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import antfuPlugin from 'eslint-plugin-antfu'
import * as importPlugin from 'eslint-plugin-import'
import nPlugin from 'eslint-plugin-n'
import promisePlugin from 'eslint-plugin-promise'
import * as regexpPlugin from 'eslint-plugin-regexp'
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort'
import sortKeysFixPlugin from 'eslint-plugin-sort-keys-fix'
import tsdocPlugin from 'eslint-plugin-tsdoc'
import unicornPlugin from 'eslint-plugin-unicorn'
import unusedImportsPlugin from 'eslint-plugin-unused-imports'
import globals from 'globals'

// local
import antfuRules from '../rules/antfu.js'
import importantimportRules from '../rules/ii.js'
import masknetRules from '../rules/masknet.js'
import sortRules from '../rules/sort.js'
import standardRules from '../rules/standard.js'
import unusedImportsRules from '../rules/unused-imports.js'

/** @type {import('eslint').Linter.FlatConfig} */
export const js = {
  files: ['**/*.{js,mjs,jsx}'],
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
    'promise': promisePlugin,
    'regexp': regexpPlugin,
    // @ts-expect-error
    'simple-import-sort': simpleImportSortPlugin,
    'sort-keys-fix': sortKeysFixPlugin,
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
    // ...masknetPlugin.configs.recommended.rules,
    // local
    ...standardRules,
    ...antfuRules,
    ...unusedImportsRules,
    ...masknetRules,
    ...sortRules,
    ...importantimportRules,
  },
  settings: {
    'import/external-module-folders': [
      'node_modules',
      'node_modules/@d-ts',
      'node_modules/@types',
    ],
  },
}

/** @type {import('eslint').Linter.FlatConfig} */
export const ts = {
  ...js,
  files: ['**/*.ts?(x)'],
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
  settings: {
    ...js.settings,
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
}

/** @type {import('eslint').Linter.FlatConfig} */
export const dts = {
  files: ['**/*.d.ts'],
  rules: {
    'import/no-duplicates': 'off',
  },
}
