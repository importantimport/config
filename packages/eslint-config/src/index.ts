import type { OptionsConfig as AntfuConfig } from '@antfu/eslint-config'
import type { Linter } from 'eslint'

import antfu from '@antfu/eslint-config'
import defu from 'defu'

import { disableAntfuTopLevelFunction, masknet, perfectionist, sonarjs, sortPackageJsonWithScripts } from './configs'
import { deMorgan } from './configs/de-morgan'

export interface IIConfig extends AntfuConfig {
  perfectionist: 'alphabetical' | 'line-length' | 'natural' | false
}

export const defaults: IIConfig = {
  perfectionist: 'natural',
  typescript: true,
}

export const ii = (userOptions: Partial<IIConfig> = {}): Linter.Config[] => {
  const options: IIConfig = defu(userOptions as IIConfig, defaults)

  return [
    disableAntfuTopLevelFunction,
    sortPackageJsonWithScripts,
    ...deMorgan,
    ...masknet(options),
    ...sonarjs,
    ...(options.perfectionist !== false
      ? [perfectionist(options.perfectionist)]
      : []
    ),
  ]
}

export const defineConfig = async (userOptions: Partial<IIConfig> = {}, userConfigs?: Parameters<typeof antfu>[2]) =>
  antfu(userOptions, ii(userOptions), userConfigs ?? {})
