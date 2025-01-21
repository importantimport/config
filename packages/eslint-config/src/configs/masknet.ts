import type { Linter } from 'eslint'

import { GLOB_ASTRO_TS, GLOB_MARKDOWN_CODE, GLOB_TS, GLOB_TSX } from '@antfu/eslint-config'
import masknetPlugin from '@masknet/eslint-plugin'

export const masknet: Linter.Config[] = [
  {
    name: 'importantimport/masknet/setup',
    plugins: {
      '@masknet': masknetPlugin,
    },
  },
  {
    name: 'importantimport/masknet/rules',
    /**
     * @see {@link https://github.com/DimensionDev/eslint-plugin#usage}
     * @remarks "@masknet/array/no-unneeded-flat-map" => "@masknet/array-no-unneeded-flat-map"
     */
    rules: {
      '@masknet/array-no-unneeded-flat-map': 'warn',
      '@masknet/array-prefer-from': 'error',
      '@masknet/browser-no-persistent-storage': 'error',
      '@masknet/browser-no-set-html': 'error',
      '@masknet/browser-prefer-location-assign': 'warn',
      '@masknet/jsx-no-class-component': 'warn',
      '@masknet/jsx-no-logical': 'error',
      '@masknet/jsx-no-set-html': 'error',
      '@masknet/jsx-no-template-literal': 'warn',
      '@masknet/jsx-no-unneeded-nested': 'warn',
      '@masknet/jsx-prefer-test-id': 'error',
      '@masknet/no-builtin-base64': 'error',
      '@masknet/no-for-in': 'warn',
      '@masknet/no-redundant-variable': 'warn',
      '@masknet/no-single-return': 'warn',
      '@masknet/no-then': 'warn',
      '@masknet/no-timer': 'error',
      '@masknet/no-top-level': 'error',
      '@masknet/prefer-default-export': 'warn',
      '@masknet/prefer-defer-import': 'error',
      '@masknet/prefer-early-return': 'warn',
      '@masknet/prefer-fetch': 'warn',
      '@masknet/prefer-timer-id': 'error',
      '@masknet/string-no-data-url': 'error',
      '@masknet/string-no-interpolation': 'warn',
      '@masknet/string-no-locale-case': 'error',
      '@masknet/string-no-simple-template-literal': 'warn',
      '@masknet/type-no-const-enum': 'error',
      '@masknet/type-no-empty-literal': 'error',
      '@masknet/type-no-force-cast-via-top-type': 'error',
      '@masknet/type-no-instanceof-wrapper': 'error',
      '@masknet/type-no-number-constructor': 'error',
      '@masknet/type-no-wrapper-type-reference': 'error',
      '@masknet/type-prefer-return-type-annotation': 'warn',
      '@masknet/unicode-no-bidi': 'error',
      '@masknet/unicode-no-invisible': 'error',
      '@masknet/unicode-specific-set': 'error',
      'unicorn/no-instanceof-array': 'off',
    },
  },
  {
    files: [GLOB_TS, GLOB_TSX],
    ignores: [GLOB_MARKDOWN_CODE, GLOB_ASTRO_TS],
    name: 'importantimport/masknet/rules-type-aware',
    rules: {
      '@masknet/no-default-error': 'error',
      '@masknet/no-unsafe-date': 'error',
      '@masknet/string-no-unneeded-to-string': 'warn',
    },
  },
] as const
