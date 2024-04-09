import type { Linter } from "eslint"

import totalFunctionsPlugin from 'eslint-plugin-total-functions'

export const totalFunctions = (): Linter.FlatConfig[] => [
    {
        name: 'importantimport/total-functions/setup',
        plugins: { 'total-functions': totalFunctionsPlugin }

    },
    {
        name: 'importantimport/total-functions/rules',
        rules: totalFunctionsPlugin.configs.recommended.rules,
    }
]