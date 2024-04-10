import type { Linter } from "eslint"
import { GLOB_TS, GLOB_TSX, type OptionsTypeScriptWithTypes } from '@antfu/eslint-config'

import totalFunctionsPlugin from 'eslint-plugin-total-functions'
import { Options } from "../options"

export const totalFunctions = (typescript: Options['typescript']): Linter.FlatConfig[] => [
    {
        name: 'importantimport/total-functions/setup',
        plugins: { 'total-functions': totalFunctionsPlugin }

    },
    ...(typeof typescript === 'object' && (typescript as OptionsTypeScriptWithTypes).tsconfigPath
    ? [{
        name: 'importantimport/total-functions/rules',
        files: [GLOB_TS, GLOB_TSX],
        rules: totalFunctionsPlugin.configs.recommended.rules,
    }]
    : [])
]