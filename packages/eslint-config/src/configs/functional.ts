import type { Linter } from "eslint"
import type { Options } from "../options"

// @ts-ignore
import functionalPlugin from 'eslint-plugin-functional/flat'

export const functional = (option: Exclude<Options['functional'], false>, typescript: Options['typescript']): Linter.FlatConfig[] => [
    {
        name: 'importantimport/functional/setup',
        plugins: { functional: functionalPlugin }

    },
    {
        name: 'importantimport/functional/rules',
        rules: {
            ...functionalPlugin.configs[option].rules as Record<string, any>,
            ...functionalPlugin.configs.externalVanillaRecommended.rules as Record<string, any>,
            ...(!!typescript
                ? functionalPlugin.configs.externalTypescriptRecommended.rules as Record<string, any>
                : {}
            )
        }
    }
]