import antfu, { type OptionsConfig } from '@antfu/eslint-config'

import type { Options } from './options'

import { ii } from './factory'

export const defineConfig = (options: OptionsConfig & Partial<Options>) => antfu(options).append(ii(options))
