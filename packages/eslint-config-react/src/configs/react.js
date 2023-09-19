import { configs as iiConfigs } from '@importantimport/eslint-config'
import { GLOB_JSX, GLOB_TSX } from '@importantimport/eslint-config/src/utils/glob.js'
// eslint-plugin-jsx-a11y
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'
// eslint-plugin-react
import reactPlugin from 'eslint-plugin-react'
import reactRuntime from 'eslint-plugin-react/configs/jsx-runtime'
import reactRecommended from 'eslint-plugin-react/configs/recommended'
// eslint-plugin-react-hooks
import reactHooksPlugin from 'eslint-plugin-react-hooks'
// eslint-plugin-react-refresh
import reactRefreshPlugin from 'eslint-plugin-react-refresh'

// rules
import reactRefreshRules from '../rules/react-refresh.js'

/** @type {import('eslint').Linter.FlatConfig} */
export const jsx = {
  files: [GLOB_JSX],
  languageOptions: {
    ...iiConfigs.js.languageOptions,
    parserOptions: {
      ...iiConfigs.js.languageOptions?.parserOptions,
      ecmaFeatures: { jsx: true },
    },
  },
  plugins: {
    'jsx-a11y': jsxA11yPlugin,
    'react': reactPlugin,
    'react-hooks': reactHooksPlugin,
    'react-refresh': reactRefreshPlugin,
  },
  rules: {
    ...jsxA11yPlugin.configs.recommended.rules,
    ...reactRecommended.rules,
    ...reactRuntime.rules,
    ...reactHooksPlugin.configs.recommended.rules,
    ...reactRefreshRules,
  },
  settings: { react: { version: 'latest' } },
}

/** @type {import('eslint').Linter.FlatConfig} */
export const tsx = {
  files: [GLOB_TSX],
  languageOptions: {
    ...iiConfigs.ts.languageOptions,
    parserOptions: {
      ...iiConfigs.ts.languageOptions?.parserOptions,
      ecmaFeatures: { jsx: true },
    }
  },
  plugins: jsx.plugins,
  rules: jsx.rules,
  settings: jsx.settings,
}
