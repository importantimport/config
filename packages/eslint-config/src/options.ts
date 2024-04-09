import type { OptionsConfig as AntfuOptions } from '@antfu/eslint-config'

type ImportantimportOptions = {
    perfectionist: false | 'alphabetical' | 'natural' | 'line-length'
    vanillaExtract: boolean
}

export type Options = AntfuOptions & ImportantimportOptions

const defaultOptionsAntfu: AntfuOptions = {
    astro: false,
    gitignore: true,
    react: false,
    solid: false,
    svelte: false,
    typescript: true,
    unocss: false,
    vue: false,
    stylistic: {
        overrides: {
            'antfu/top-level-function': 'off'
        }
    }
}

const defaultOptionsImportantimport: ImportantimportOptions = {
    perfectionist: 'natural',
    vanillaExtract: false,
}

export const defaultOptions: Options = {
    ...defaultOptionsAntfu,
    ...defaultOptionsImportantimport
}

export type { OptionsConfig as AntfuOptions } from '@antfu/eslint-config'
