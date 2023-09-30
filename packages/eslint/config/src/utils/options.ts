import type { FlatGitignoreOptions } from 'eslint-config-flat-gitignore'

// eslint-disable-next-line n/no-unpublished-import
import type { OptionsTypeScript } from '../../../ts/src/configs/ts'
import type { OptionsIgnores } from '../configs/ignores'
import type { OptionsJavaScript } from '../configs/js/index'

/** TODO: FullOptions */
export type Options = {
  comments: boolean
  gitignore: FlatGitignoreOptions | boolean
  ignores: OptionsIgnores
  js: OptionsJavaScript
  // TODO
  react?: {}
  // TODO
  ts: OptionsTypeScript | boolean
}

/** TODO: defaultFullOptions */
export const defaultOptions = {
  comments: true,
  gitignore: true,
  ignores: true,
  js: {
    ecmaVersion: 'latest',
  },
  ts: false,
} as const satisfies Options