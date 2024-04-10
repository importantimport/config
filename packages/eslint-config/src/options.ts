import type { OptionsConfig as AntfuOptions } from '@antfu/eslint-config'

interface ImportantimportOptions {
  functional: 'lite' | 'recommended' | 'strict' | false
  perfectionist: 'alphabetical' | 'line-length' | 'natural' | false
  vanillaExtract: boolean
}

export type Options = AntfuOptions & ImportantimportOptions

const defaultOptionsAntfu: AntfuOptions = {
  astro: false,
  gitignore: true,
  react: false,
  solid: false,
  stylistic: {
    overrides: {
      'antfu/top-level-function': 'off',
    },
  },
  svelte: false,
  typescript: true,
  unocss: false,
  vue: false,
}

const defaultOptionsImportantimport: ImportantimportOptions = {
  functional: 'recommended',
  perfectionist: 'natural',
  vanillaExtract: false,
}

export const defaultOptions: Options = {
  ...defaultOptionsAntfu,
  ...defaultOptionsImportantimport,
}

export type { OptionsConfig as AntfuOptions } from '@antfu/eslint-config'
