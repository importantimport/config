// Inline from https://github.com/antfu/eslint-config/blob/main/packages/eslint-config-basic/index.js
/** @type {import('eslint').Linter.FlatConfig['rules']} */
export default {
  // antfu
  'antfu/if-newline': 'error',
  'antfu/import-dedupe': 'error',
  'antfu/top-level-function': 'error',
  'array-bracket-spacing': ['error', 'never'],
  // best-practice
  'array-callback-return': 'error',
  'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
  'block-scoped-var': 'error',
  'block-spacing': ['error', 'always'],
  'brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
  'camelcase': 'off',
  'comma-dangle': ['error', 'always-multiline'],
  'comma-spacing': ['error', { after: true, before: false }],
  'comma-style': ['error', 'last'],
  'complexity': ['off', 11],
  'consistent-return': 'off',
  'curly': ['error', 'multi-or-nest', 'consistent'],
  'eqeqeq': ['error', 'smart'],
  'eslint-comments/disable-enable-pair': 'off',
  'func-call-spacing': ['off', 'never'],
  'generator-star-spacing': 'off',
  'import/first': 'error',
  'import/namespace': 'off',
  'import/newline-after-import': ['error', { considerComments: true, count: 1 }],
  'import/no-absolute-path': 'off',
  'import/no-mutable-exports': 'error',
  'import/no-named-as-default': 'off',
  'import/no-named-as-default-member': 'off',
  'import/no-unresolved': 'off',
  'import/order': 'error',
  'indent': ['error', 2, { SwitchCase: 1, VariableDeclarator: 1, outerIIFEBody: 1 }],
  'key-spacing': ['error', { afterColon: true, beforeColon: false }],
  'max-statements-per-line': ['error', { max: 1 }],
  'n/no-callback-literal': 'off',
  'n/prefer-global/buffer': ['error', 'never'],
  'no-alert': 'warn',
  'no-case-declarations': 'error',
  'no-cond-assign': ['error', 'always'],
  'no-console': ['error', { allow: ['warn', 'error'] }],
  'no-constant-condition': 'warn',
  'no-debugger': 'error',
  'no-invalid-this': 'error',
  'no-multi-spaces': 'error',
  'no-multi-str': 'error',
  'no-param-reassign': 'off',
  'no-restricted-syntax': [
    'error',
    'DebuggerStatement',
    'LabeledStatement',
    'WithStatement',
  ],
  'no-return-assign': 'off',
  'no-return-await': 'off',
  'no-use-before-define': ['error', { classes: false, functions: false, variables: true }],
  'no-useless-escape': 'off',
  'no-var': 'error',
  'no-void': 'error',
  'no-with': 'error',
  'object-curly-spacing': ['error', 'always'],
  'object-shorthand': [
    'error',
    'always',
    {
      avoidQuotes: true,
      ignoreConstructors: false,
    },
  ],
  'operator-linebreak': ['error', 'before'],
  'prefer-arrow-callback': [
    'error',
    {
      allowNamedFunctions: false,
      allowUnboundThis: true,
    },
  ],
  'prefer-const': [
    'error',
    {
      destructuring: 'all',
      ignoreReadBeforeAssign: true,
    },
  ],
  'prefer-exponentiation-operator': 'error',
  'prefer-rest-params': 'error',
  'prefer-spread': 'error',
  'prefer-template': 'error',
  'quote-props': ['error', 'consistent-as-needed'],
  'quotes': ['error', 'single'],
  'require-await': 'off',
  'semi': ['error', 'never'],
  'sort-imports': [
    'error',
    {
      allowSeparatedGroups: false,
      ignoreCase: false,
      ignoreDeclarationSort: true,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
    },
  ],
  'space-before-function-paren': [
    'error',
    {
      anonymous: 'always',
      asyncArrow: 'always',
      named: 'never',
    },
  ],
  'spaced-comment': ['error', 'always', {
    block: {
      balanced: true,
      exceptions: ['*'],
      markers: ['!'],
    },
    line: {
      exceptions: ['/', '#'],
      markers: ['/'],
    },
  }],
  'template-curly-spacing': 'error',
  'unicorn/error-message': 'error',
  'unicorn/escape-case': 'error',
  'unicorn/no-instanceof-array': 'error',
  'unicorn/no-new-buffer': 'error',
  'unicorn/no-unsafe-regex': 'off',
  'unicorn/number-literal-case': 'error',
  'unicorn/prefer-includes': 'error',
  'unicorn/prefer-node-protocol': 'error',
  'unicorn/prefer-string-starts-ends-with': 'error',
  'unicorn/prefer-text-content': 'error',
  'unicorn/prefer-type-error': 'error',
  'unicorn/throw-new-error': 'error',
  'unused-imports/no-unused-imports': 'error',
  'unused-imports/no-unused-vars': [
    'warn',
    { args: 'after-used', argsIgnorePattern: '^_', vars: 'all', varsIgnorePattern: '^_' },
  ],
  'vars-on-top': 'error',
}
