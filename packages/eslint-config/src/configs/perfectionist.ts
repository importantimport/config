import type { Linter } from "eslint"
import type { Options } from "../options"

import perfectionistPlugin from 'eslint-plugin-perfectionist'

export const perfectionist = (option: Exclude<Options['perfectionist'], false>): Linter.FlatConfig => ({
    name: 'importantimport/perfectionist/rules',
    rules: perfectionistPlugin.configs[`recommended-${option}`].rules as Record<string, any>
})