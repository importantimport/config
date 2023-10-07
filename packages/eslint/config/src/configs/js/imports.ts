import type { FlatESLintConfigItem } from 'eslint-define-config'

// @ts-expect-error missing types
import pluginImportRecommended from 'eslint-plugin-import/config/recommended.js'

import { pluginAntfu, pluginImport, pluginUnusedImports } from '../../utils/plugins'

export const jsImports = (): FlatESLintConfigItem => ({
  plugins: {
    antfu: pluginAntfu,
    import: pluginImport,
    'unused-imports': pluginUnusedImports,
  },
  rules: {
    ...pluginImportRecommended.rules,
    'antfu/import-dedupe': 'error',
    'antfu/no-import-node-modules-by-path': 'error',
    /**
     * perfectionist
     * {@link https://github.com/azat-io/eslint-plugin-perfectionist#%EF%B8%8F-troubleshooting}
     */
    'import/newline-after-import': 'off',
    'import/no-unresolved': 'off',
    /**
     * perfectionist
     * {@link https://github.com/azat-io/eslint-plugin-perfectionist#%EF%B8%8F-troubleshooting}
     */
    'import/order': 'off',
    /**
     * unused-imports
     * {@link https://github.com/sweepline/eslint-plugin-unused-imports#usage}
     */
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      { 'args': 'after-used', 'argsIgnorePattern': '^_', 'vars': 'all', 'varsIgnorePattern': '^_' },
    ],
  },
})
