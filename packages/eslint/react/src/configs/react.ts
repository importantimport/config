import type { FlatESLintConfigItem } from '@importantimport/eslint-config/utils/types'

import { GLOB_JSX, GLOB_TSX } from '@importantimport/eslint-config/utils/glob'
// @ts-ignore missing types
import configRuntime from 'eslint-plugin-react/configs/jsx-runtime.js'
// @ts-ignore missing types
import configRecommended from 'eslint-plugin-react/configs/recommended.js'

import type { OptionsReact } from '../utils/options'

import { pluginJsxA11y, pluginReact, pluginReactHooks, pluginReactRefresh } from '../utils/plugins'

export const react = (options?: OptionsReact): FlatESLintConfigItem[] => [{
  files: [GLOB_JSX, GLOB_TSX],
  languageOptions: {
    parserOptions: {
      ecmaFeatures: { jsx: true },
    },
  },
  plugins: {
    'jsx-a11y': pluginJsxA11y,
    'react': pluginReact,
    'react-hooks': pluginReactHooks,
    'react-refresh': pluginReactRefresh,
  },
  rules: {
    ...pluginJsxA11y.configs.recommended.rules,
    ...pluginReactHooks.configs.recommended.rules,
    ...configRuntime.rules,
    ...configRecommended.rules,
    /** {@link https://github.com/vitejs/vite/blob/91a18c2f7da796ff8217417a4bf189ddda719895/packages/create-vite/template-react-ts/.eslintrc.cjs#L12-L17} */
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  settings: { react: { version: options?.version ?? 'detect' } },
}]
