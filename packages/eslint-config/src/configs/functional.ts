import type { ESLint, Linter } from 'eslint'

// import { GLOB_TS, GLOB_TSX } from '@antfu/eslint-config'
import functionalPlugin from 'eslint-plugin-functional'

import type { Options } from '../options'

export const functional = (option: Exclude<Options['functional'], false>): Linter.Config[] => [
  {
    name: 'importantimport/functional/setup',
    plugins: { functional: functionalPlugin as unknown as ESLint.Plugin },
  },
  {
    name: 'importantimport/functional/rules',
    rules: functionalPlugin.configs[option].rules,
  },
  {
    name: 'importantimport/functional/rules-javascript',
    rules: functionalPlugin.configs.externalVanillaRecommended.rules,
  },
  // FIXME: use this when tsconfigPath is set
  // {
  //   files: [GLOB_TS, GLOB_TSX],
  //   name: 'importantimport/functional/rules-typescript',
  //   rules: functionalPlugin.configs.externalTypescriptRecommended.rules,
  // },
]
