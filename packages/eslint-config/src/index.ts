import type { Linter } from 'eslint'
import type { ResolvableFlatConfig } from 'eslint-flat-config-utils'

import antfu, { type OptionsConfig as AntfuConfig } from '@antfu/eslint-config'
import defu from 'defu'

import { disableAntfuTopLevelFunction, masknet, perfectionist, sonarjs, sortPackageJsonScripts } from './configs'

export interface IIConfig extends AntfuConfig {
  perfectionist: 'alphabetical' | 'line-length' | 'natural' | false
}

export const defaults: IIConfig = {
  perfectionist: 'natural',
  typescript: true,
}

export const ii = (userOptions: Partial<IIConfig> = {}): ResolvableFlatConfig<Linter.Config> => {
  const options: IIConfig = defu(userOptions as IIConfig, defaults)

  return [
    disableAntfuTopLevelFunction,
    sortPackageJsonScripts,
    ...masknet(options),
    ...sonarjs,
    ...(options.perfectionist !== false
      ? [perfectionist(options.perfectionist)]
      : []
    ),
  ]
}

export const defineConfig = async (userOptions: Partial<IIConfig> = {}) => antfu(userOptions).append(ii(userOptions))
