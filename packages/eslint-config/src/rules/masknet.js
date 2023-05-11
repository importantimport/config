// Excerpt from https://github.com/DimensionDev/Maskbook/blob/develop/eslint.config.js
/** @type {import('eslint').Linter.FlatConfig['rules']} */
export default {
  '@masknet/browser-no-set-html': 'error',
  '@masknet/browser-prefer-location-assign': 'warn',
  '@masknet/jsx-no-class-component': 'error',
  '@masknet/prefer-early-return': 'warn',
  '@masknet/prefer-fetch': 'error',
  '@masknet/string-no-locale-case': 'error',
  '@masknet/string-no-simple-template-literal': 'warn',
  // '@masknet/string-no-unneeded-to-string': 'warn',
  '@masknet/type-no-instanceof-wrapper': 'warn',
  '@masknet/unicode-no-bidi': 'error',
  '@masknet/unicode-no-invisible': 'error',
  '@masknet/unicode-specific-set': 'warn',
}
