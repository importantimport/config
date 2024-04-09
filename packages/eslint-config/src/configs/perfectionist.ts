import type { Linter } from "eslint"
import type { Options } from "../options"

import EslintPluginPerfectionist from 'eslint-plugin-perfectionist'

export const perfectionist = (option: Exclude<Options['perfectionist'], false>): Linter.FlatConfig => ({
    name: 'importantimport/perfectionist/rules',
    rules: EslintPluginPerfectionist.configs[`recommended-${option}`].rules as Record<string, any>
})