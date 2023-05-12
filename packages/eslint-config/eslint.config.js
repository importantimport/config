import jsConfig from '@eslint/js'
// eslint-disable-next-line import/namespace
import * as masknetPlugin from '@masknet/eslint-plugin'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import antfuPlugin from 'eslint-plugin-antfu'
import * as importPlugin from 'eslint-plugin-import'
import nPlugin from 'eslint-plugin-n'
import promisePlugin from 'eslint-plugin-promise'
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort'
import sortKeysFixPlugin from 'eslint-plugin-sort-keys-fix'
import tsdocPlugin from 'eslint-plugin-tsdoc'
import unicornPlugin from 'eslint-plugin-unicorn'
import unusedImportsPlugin from 'eslint-plugin-unused-imports'
import globals from 'globals'

// local
import comments from './src/configs/comments.js'
import { json, json5, jsonc, packageJson } from './src/configs/json.js'
import markdown from './src/configs/markdown.js'
import antfuRules from './src/rules/antfu.js'
import masknetRules from './src/rules/masknet.js'
import sortRules from './src/rules/sort.js'
import standardRules from './src/rules/standard.js'
import unusedImportsRules from './src/rules/unused-imports.js'

/** @type {import('eslint').Linter.FlatConfig} */
const js = {
  files: ['**/*.{js,mjs}'],
  ignores: ['coverage/*', 'dist/*', 'node_modules'],
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
    ...unicornPlugin.configs.recommended.rules,
    // ...masknetPlugin.configs.recommended.rules,
    // local
    ...standardRules,
    ...antfuRules,
    ...unusedImportsRules,
    ...masknetRules,
    ...sortRules,
    // disable antfu/top-level-function
    'antfu/top-level-function': 'off',
  },
  settings: {
    'import/parsers': {
      espree: ['.js', '.mjs'],
    },
    'import/resolver': {
      node: { extensions: ['.js', '.mjs'] },
    },
  },
}

/** @type {import('eslint').Linter.FlatConfig} */
const ts = {
  ...js,
  files: ['**/*.ts'],
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
  rules: {
    ...js.rules,
    ...tsPlugin.configs.recommended.rules,
    // @ts-expect-error
    ...tsPlugin.configs['eslint-recommended'].overrides[0].rules,
    'tsdoc/syntax': 'warn',
  },
  settings: {
    ...js.settings,
    'import/parsers': {
      espree: ['.js', '.mjs', '.ts', '.d.ts'],
    },
    'import/resolver': {
      node: { extensions: ['.js', '.mjs', '.ts', '.d.ts'] },
      typescript: {
        extensions: ['.js', '.mjs', '.ts', '.d.ts'],
      },
    },
  },
}

/** @type {import('eslint').Linter.FlatConfig} */
const dts = {
  files: ['**/*.d.ts'],
  rules: {
    'import/no-duplicates': 'off',
  },
}

/** @type {Record<string, import('eslint').Linter.FlatConfig>} */
export const configs = {
  comments,
  dts,
  js,
  json,
  json5,
  jsonc,
  markdown,
  packageJson,
  ts,
}

/** @type {import('eslint').Linter.FlatConfig[]} */
export default Object.values(configs)
