/**
 * Inline from https://github.com/npetruzzelli/prettier-config-standard/blob/master/.prettierrc.json
 * @type {import("prettier").Options}
 */
export const standard = {
  arrowParens: 'always',
  bracketSameLine: true,
  bracketSpacing: true,
  embeddedLanguageFormatting: 'auto',
  endOfLine: 'lf',
  htmlWhitespaceSensitivity: 'css',
  insertPragma: false,
  jsxSingleQuote: false,
  printWidth: 80,
  proseWrap: 'preserve',
  quoteProps: 'as-needed',
  requirePragma: false,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'none',
  useTabs: false,
  vueIndentScriptAndStyle: false,
}

/** @type {import("prettier").Options} */
export default {
  ...standard,
}
