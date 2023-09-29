import { js } from '@importantimport/eslint-config/src/configs/js.js'
import { ts } from '@importantimport/eslint-config/src/configs/js.js'
import { GLOB_JSX, GLOB_TSX } from '@importantimport/eslint-config/src/utils/glob.js'
// eslint-plugin-jsx-a11y
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'
// eslint-plugin-react
import reactPlugin from 'eslint-plugin-react'
import reactRuntime from 'eslint-plugin-react/configs/jsx-runtime.js'
import reactRecommended from 'eslint-plugin-react/configs/recommended.js'
// eslint-plugin-react-hooks
import reactHooksPlugin from 'eslint-plugin-react-hooks'
// eslint-plugin-react-refresh
import reactRefreshPlugin from 'eslint-plugin-react-refresh'

// rules
import reactRefreshRules from '../rules/react-refresh.js'

/** @type {import('eslint').Linter.FlatConfig['plugins']} */
const reactPlugins = {
  // @ts-expect-error
  'jsx-a11y': jsxA11yPlugin,
  // @ts-expect-error
  'react': reactPlugin,
  // @ts-expect-error
  'react-hooks': reactHooksPlugin,
  'react-refresh': reactRefreshPlugin,
}

/** @type {import('eslint').Linter.FlatConfig['rules']} */
// @ts-expect-error
const reactRules = {
  ...jsxA11yPlugin.configs.recommended.rules,
  ...reactRecommended.rules,
  ...reactRuntime.rules,
  ...reactHooksPlugin.configs.recommended.rules,
  ...reactRefreshRules,
}

/** @type {import('eslint').Linter.FlatConfig} */
export const jsx = {
  ...js,
  files: [GLOB_JSX],
  languageOptions: {
    ...js.languageOptions,
    parserOptions: {
      ...js.languageOptions?.parserOptions,
      ecmaFeatures: { jsx: true },
    },
  },
  plugins: {
    ...js.plugins,
    ...reactPlugins,
  },
  rules: {
    ...js.rules,
    ...reactRules,
  },
  settings: { react: { version: '18.3' } },
}

/** @type {import('eslint').Linter.FlatConfig} */
export const tsx = {
  ...ts,
  files: [GLOB_TSX],
  languageOptions: {
    ...ts.languageOptions,
    parserOptions: {
      ...ts.languageOptions?.parserOptions,
      ecmaFeatures: { jsx: true },
    }
  },
  plugins: {
    ...ts.plugins,
    ...reactPlugins,
  },
  rules: {
    ...ts.rules,
    ...reactRules,
  },
  settings: jsx.settings,
}
