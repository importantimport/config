/** @type {import('eslint').Linter.FlatConfig['rules']} */
export default {
  /** https://github.com/vitejs/vite/blob/91a18c2f7da796ff8217417a4bf189ddda719895/packages/create-vite/template-react-ts/.eslintrc.cjs#L12-L17 */
  'react-refresh/only-export-components': [
    'warn',
    { allowConstantExport: true },
  ],
}
