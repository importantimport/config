import type { Linter } from "eslint"
import type { Options } from "../options"

import { GLOB_TS, GLOB_TSX, type OptionsTypeScriptWithTypes } from '@antfu/eslint-config'

import functionalPlugin from 'eslint-plugin-functional/flat'

export const functional = (option: Exclude<Options['functional'], false>, typescript: Options['typescript']): Linter.FlatConfig[] => [
    {
        name: 'importantimport/functional/setup',
        plugins: { functional: functionalPlugin as any }

    },
    {
        name: 'importantimport/functional/rules',
        rules: {
            ...functionalPlugin.configs[option].rules as Record<string, any>,
            ...functionalPlugin.configs.externalVanillaRecommended.rules as Record<string, any>,
        }
    },
    ...(typeof typescript === 'object' && (typescript as OptionsTypeScriptWithTypes).tsconfigPath
        ? [{
            name: 'importantimport/functional/typescript-rules',
            files: [GLOB_TS, GLOB_TSX],
            rules: functionalPlugin.configs.externalTypescriptRecommended.rules as Record<string, any>
        }]
        : [])
]