import type { Linter } from 'eslint'
import type { FlatConfigComposer } from 'eslint-flat-config-utils'

import { type Options, type AntfuOptions, defaultOptions } from './options'

import { defu } from 'defu'
import { antfu } from '@antfu/eslint-config'

import { functional } from './configs/functional'
import { perfectionist } from './configs/perfectionist'

export const createConfig = (userOptions: Partial<Options> = {}): FlatConfigComposer<Linter.FlatConfig> => {
    const options = defu(userOptions, defaultOptions)
    const configs = antfu(options as AntfuOptions)

    if (options.functional)
        configs.append(functional(options.functional, options.typescript ?? undefined))

    if (options.perfectionist)
        configs.append(perfectionist(options.perfectionist))

    return configs
}