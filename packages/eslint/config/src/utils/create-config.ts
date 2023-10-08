import { defu } from 'defu'
import gitignore from 'eslint-config-flat-gitignore'
import { type FlatESLintConfigItem } from 'eslint-define-config'

import { ignores } from '../configs/ignores'
import { js } from '../configs/js'
import { jsonc } from '../configs/jsonc'
import { type Options, defaultOptions } from './options'

export const createConfig
  = (userOptions?: Partial<Options>, ...userConfigs: FlatESLintConfigItem[]): FlatESLintConfigItem[] => {
    const options = defu(userOptions, defaultOptions)
    const config: FlatESLintConfigItem[] = []

    // Ignores (.gitignore)
    if (options.gitignore)
      config.push(gitignore(typeof options.gitignore === 'boolean' ? undefined : options.gitignore))

    // Ignores (config.ignores)
    if (options.ignores)
      config.push(ignores(options.ignores))

    // JavaScript
    js(options.js)
      .forEach(item => config.push(item))

    // JSONC
    jsonc()
      .forEach(item => config.push(item))

    if (userConfigs)
      userConfigs.forEach(userConfig => config.push(userConfig))

    return config
  }

export const createFullConfig
  = async (userOptions?: Partial<Options>, ...userConfigs: FlatESLintConfigItem[]): Promise<FlatESLintConfigItem[]> => {
    const options = defu(userOptions, defaultOptions)
    const config: FlatESLintConfigItem[] = createConfig(options)

    // TypeScript
    if (options.ts) {
      await import('@importantimport/eslint-config-ts')
        .then(({ createConfig }) =>
          createConfig(typeof options.ts === 'boolean' ? {} : options.ts)
            .forEach(item => config.push(item)),
        )
    }

    // React
    if (options.react) {
      await import('@importantimport/eslint-config-react')
        .then(({ createConfig }) =>
          createConfig(typeof options.react === 'boolean' ? {} : options.react)
            .forEach(item => config.push(item)),
        )
    }

    // Vanilla Extract
    if (options.vanillaExtract) {
      await import('@importantimport/eslint-config-vanilla-extract')
        .then(({ createConfig }) =>
          // TODO: OptionsVanillaExtract
          createConfig()
            .forEach(item => config.push(item)),
        )
    }

    if (userConfigs)
      userConfigs.forEach(userConfig => config.push(userConfig))

    return config
  }
