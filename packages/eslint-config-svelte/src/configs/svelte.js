import ii from '@importantimport/eslint-config'
import sveltePlugin from 'eslint-plugin-svelte'
import svelteParser from 'svelte-eslint-parser'

/** @type {import('eslint').Linter.FlatConfig} */
export default {
  files: ['**/*.svelte'],
  languageOptions: {
    ...ii.configs.ts.languageOptions,
    parser: svelteParser,
    parserOptions: {
      parser: ii.configs.ts.languageOptions.parser,
    },
  },
  plugins: {
    ...ii.configs.ts.plugins,
    svelte: sveltePlugin,
  },
  rules: {
    ...ii.configs.ts.rules,
    ...sveltePlugin.configs.recommended.rules,
  },
}
