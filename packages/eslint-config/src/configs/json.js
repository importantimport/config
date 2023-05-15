import jsoncPlugin from 'eslint-plugin-jsonc'
import jsoncParser from 'jsonc-eslint-parser'

/** @type {import('eslint').Linter.FlatConfig} */
const shared = {
  languageOptions: {
    // @ts-expect-error
    parser: jsoncParser,
  },
  plugins: {
    // @ts-expect-error
    jsonc: jsoncPlugin,
  },
  rules: {
    'jsonc/sort-keys': [
      'error',
      {
        order: { type: 'asc' },
        pathPattern: '.*',
      },
    ],
  },
}

/** @type {string[]} */
const jsoncFiles = [
  '**/{j,t}sconfig.json',
  '**/{j,t}sconfig-*.json',
  '**/{j,t}sconfig.*.json',
]

/** @type {import('eslint').Linter.FlatConfig} */
export const json = {
  ...shared,
  files: ['**/*.json'],
  ignores: [...jsoncFiles, '**/package-lock.json'],
  languageOptions: {
    ...shared.languageOptions,
    parserOptions: {
      jsonSyntax: 'JSON',
    },
  },
  // @ts-expect-error
  rules: {
    ...jsoncPlugin.configs.base.overrides[0].rules,
    ...jsoncPlugin.configs['recommended-with-json'].rules,
    ...shared.rules,
  },
}

/** @type {import('eslint').Linter.FlatConfig} */
export const jsonc = {
  ...shared,
  files: ['**/*.jsonc', ...jsoncFiles],
  languageOptions: {
    ...shared.languageOptions,
    parserOptions: {
      jsonSyntax: 'JSONC',
    },
  },
  // @ts-expect-error
  rules: {
    ...jsoncPlugin.configs.base.overrides[0].rules,
    ...jsoncPlugin.configs['recommended-with-jsonc'].rules,
    ...shared.rules,
  },
}

/** @type {import('eslint').Linter.FlatConfig} */
export const json5 = {
  ...shared,
  files: ['**/*.json5'],
  languageOptions: {
    ...shared.languageOptions,
    parserOptions: {
      jsonSyntax: 'JSON5',
    },
  },
  // @ts-expect-error
  rules: {
    ...jsoncPlugin.configs.base.overrides[0].rules,
    ...jsoncPlugin.configs['recommended-with-json5'].rules,
    ...shared.rules,
  },
}

/**
 * @type {import('eslint').Linter.FlatConfig}
 * @see {@link https://github.com/antfu/eslint-config/blob/2db56ec8f0b735fe5231405223d00838f66e0f94/packages/eslint-config-basic/index.js#L83-L151}
 */
export const packageJson = {
  files: ['**/package.json'],
  rules: {
    'jsonc/sort-keys': [
      'error',
      {
        order: [
          'publisher',
          'name',
          'displayName',
          'type',
          'version',
          'private',
          'packageManager',
          'description',
          'author',
          'license',
          'funding',
          'homepage',
          'repository',
          'bugs',
          'keywords',
          'categories',
          'sideEffects',
          'exports',
          'main',
          'module',
          'unpkg',
          'jsdelivr',
          'types',
          'typesVersions',
          'bin',
          'icon',
          'files',
          'engines',
          'activationEvents',
          'contributes',
          'scripts',
          'peerDependencies',
          'peerDependenciesMeta',
          'dependencies',
          'optionalDependencies',
          'devDependencies',
          'pnpm',
          'overrides',
          'resolutions',
          'husky',
          'simple-git-hooks',
          'lint-staged',
          'eslintConfig',
        ],
        pathPattern: '^$',
      },
      {
        order: { type: 'asc' },
        pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
      },
      {
        order: [
          'types',
          'require',
          'import',
        ],
        pathPattern: '^exports.*$',
      },
    ],
  },
}

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  json,
  jsonc,
  json5,
  packageJson,
]
