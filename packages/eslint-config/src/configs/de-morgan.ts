import type { Linter } from 'eslint'

import deMorganPlugin from 'eslint-plugin-de-morgan'

export const deMorgan: Linter.Config[] = [
  {
    name: 'importantimport/de-morgan/setup',
    plugins: {
      'de-morgan': deMorganPlugin,
    },
  },
  {
    name: 'importantimport/de-morgan/rules',
    rules: deMorganPlugin.configs.recommended.rules,
  },
] as const
