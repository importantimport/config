import type { Linter } from 'eslint'
import type { ResolvableFlatConfig } from 'eslint-flat-config-utils'

import { defu } from 'defu'

import { functional, perfectionist, sortPackageJsonScripts } from './configs'
import { type Options, defaultOptions } from './options'

export const ii = (userOptions: Partial<Options> = {}): ResolvableFlatConfig<Linter.FlatConfig> => {
  const options = defu(userOptions, defaultOptions)

  return [
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
