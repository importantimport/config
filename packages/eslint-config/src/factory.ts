import type { Linter } from 'eslint'
import type { ResolvableFlatConfig } from 'eslint-flat-config-utils'

import { defu } from 'defu'

import { disableAntfuTopLevelFunction, functional, perfectionist, sortPackageJsonScripts } from './configs'
import { defaultOptions, type Options } from './options'

export const ii = (userOptions: Partial<Options> = {}): ResolvableFlatConfig<Linter.Config> => {
  const options = defu(userOptions, defaultOptions)

  return [
    disableAntfuTopLevelFunction,
    sortPackageJsonScripts,
    // ...(options.jsonc
    //   ? [sortPackageJsonScripts]
    //   : []
    // ),
    ...(options.functional
      ? functional(options.functional)
      : []
    ),
    ...(options.perfectionist
      ? [perfectionist(options.perfectionist)]
      : []
    ),
  ]
}
