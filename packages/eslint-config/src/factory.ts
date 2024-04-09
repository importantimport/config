import type { Linter } from 'eslint'
import type { FlatConfigComposer } from 'eslint-flat-config-utils'

import { defu } from 'defu'
import { type OptionsConfig as AntfuOptions, antfu } from '@antfu/eslint-config'

export type Options = AntfuOptions & {
    vanillaExtract?: boolean
}

const defaultOptions: Options = {
    astro: false,
    gitignore: true,
    react: false,
    solid: false,
    svelte: false,
    typescript: true,
    unocss: false,
    vue: false,
    vanillaExtract: false
}

export const createConfig = (userOptions: Options = {}): FlatConfigComposer<Linter.FlatConfig> => {
    const options = defu(userOptions, defaultOptions)
    const configs = antfu(options)

    return configs
}