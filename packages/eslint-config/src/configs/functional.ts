import type { Linter } from 'eslint'

import { GLOB_TS, GLOB_TSX, type OptionsTypeScriptWithTypes } from '@antfu/eslint-config'
import functionalPlugin from 'eslint-plugin-functional/flat'

import type { Options } from '../options'

export const functional = (option: Exclude<Options['functional'], false>, typescript: Options['typescript']): Linter.FlatConfig[] => [
  {
    name: 'importantimport/functional/setup',
    plugins: { functional: functionalPlugin as any },

  },
  {
    name: 'importantimport/functional/rules',
    rules: {
      ...functionalPlugin.configs[option].rules as Record<string, any>,
      ...functionalPlugin.configs.externalVanillaRecommended.rules as Record<string, any>,
    },
  },
  ...(typeof typescript === 'object' && (typescript as OptionsTypeScriptWithTypes).tsconfigPath
    ? [{
        files: [GLOB_TS, GLOB_TSX],
        name: 'importantimport/functional/typescript-rules',
        rules: functionalPlugin.configs.externalTypescriptRecommended.rules as Record<string, any>,
      }]
    : []),
]
