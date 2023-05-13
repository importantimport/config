import litPlugin from 'eslint-plugin-lit'
import litA11yPlugin from 'eslint-plugin-lit-a11y'
import wcPlugin from 'eslint-plugin-wc'

/** @type {import('eslint').Linter.FlatConfig} */
export const lit = {
  files: ['**/*.{js,mjs,ts}'],
  plugins: {
    'lit': litPlugin,
    'lit-a11y': litA11yPlugin,
    'wc': wcPlugin,
  },
  rules: {
    ...litPlugin.configs.recommended.rules,
    ...litA11yPlugin.configs.recommended.rules,
    ...wcPlugin.configs.recommended.rules,
    ...wcPlugin.configs['best-practice'].rules,
    'class-methods-use-this': [
      'error',
      {
        exceptMethods: [
          // web components life cycle
          'connectedCallback',
          'disconnectedCallback',
          // LitElement life cycle
          'performUpdate',
          'shouldUpdate',
          'firstUpdated',
          'update',
          'updated',
          'createRenderRoot',
          'render',
        ],
      },
    ],
    // eslint-plugin-lit
    'lit/attribute-value-entities': 'error',
    'lit/binding-positions': 'error',
    'lit/no-duplicate-template-bindings': 'error',
    'lit/no-invalid-escape-sequences': 'error',
    'lit/no-invalid-html': 'error',
    'lit/no-legacy-template-syntax': 'error',
    'lit/no-native-attributes': 'error',
    'lit/no-private-properties': 'error',
    'lit/no-template-bind': 'error',
    'lit/no-useless-template-literals': 'error',
    'lit/no-value-attribute': 'error',
  },
  settings: {
    wc: {
      elementBaseClasses: ['LitElement'],
    },
  },
}

/** @type {import('eslint').Linter.FlatConfig} */
export const litTest = {
  files: [
    '**/test/**/*.{js,mjs,ts}',
    '**/demo/**/*.{js,mjs,ts}',
    '**/stories/**/*.{js,mjs,ts}',
  ],
  rules: {
    'class-methods-use-this': 'off',
    'lit/binding-positions': 'off',
    'lit/no-duplicate-template-bindings': 'off',
    'lit/no-invalid-html': 'off',
    'lit/no-private-properties': 'off',
    'lit/no-template-bind': 'off',
    'lit/no-useless-template-literals': 'off',
    'no-console': 'off',
    'no-unused-expressions': 'off',
  },
}

export default [
  lit,
  litTest,
]
