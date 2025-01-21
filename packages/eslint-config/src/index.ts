import type { Linter } from 'eslint'
import type { ResolvableFlatConfig } from 'eslint-flat-config-utils'

import antfu, { type OptionsConfig as AntfuConfig } from '@antfu/eslint-config'
import defu from 'defu'

import { disableAntfuTopLevelFunction, masknet, sonarjs, perfectionist, sortPackageJsonScripts } from './configs'

export interface IIConfig extends AntfuConfig {
  perfectionist: 'alphabetical' | 'line-length' | 'natural' | false
  vanillaExtract: boolean
}

export const defaults: IIConfig = {
  perfectionist: 'natural',
  typescript: { tsconfigPath: './tsconfig.json' },
  vanillaExtract: false,
}

export const ii = (userOptions: Partial<IIConfig> = {}): ResolvableFlatConfig<Linter.Config> => {
  const options = defu(userOptions, defaults)

  return [
    disableAntfuTopLevelFunction,
    sortPackageJsonScripts,
    ...masknet,
    ...sonarjs,
    ...(options.perfectionist
      ? [perfectionist(options.perfectionist)]
      : []
    ),
  ]
}

export const defineConfig = (userOptions: Partial<IIConfig> = {}) => antfu(userOptions).append(ii(userOptions))
