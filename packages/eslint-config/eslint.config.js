import { comments } from './src/configs/comments.js'
import { dts, js, ts } from './src/configs/js.js'
import { json, json5, jsonc, jsoncPrettier, jsoncSortKeysIgnores, packageJson } from './src/configs/json.js'
import { markdown, markdownCodeBlock } from './src/configs/markdown.js'

/** @type {Record<string, import('eslint').Linter.FlatConfig>} */
export const configs = {
  comments,
  dts,
  js,
  json,
  json5,
  jsonc,
  jsoncSortKeysIgnores,
  markdown,
  markdownCodeBlock,
  packageJson,
  ts,
}

export const prettier = {
  jsoncPrettier,
}

/** @type {import('eslint').Linter.FlatConfig[]} */
export default Object.values(configs)
