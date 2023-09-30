import type { FlatESLintConfigItem } from 'eslint-define-config'

export const sortPackageJson = (): FlatESLintConfigItem => ({
  files: ['**/package.json'],
  rules: {
    'jsonc/sort-array-values': [
      'error',
      {
        order: { type: 'asc' },
        pathPattern: '^files$',
      },
    ],
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
        order: { type: 'asc' },
        pathPattern: '^resolutions$',
      },
      {
        order: { type: 'asc' },
        pathPattern: '^pnpm.overrides$',
      },
      {
        order: [
          'types',
          'import',
          'require',
          'default',
        ],
        pathPattern: '^exports.*$',
      },
    ],
  },
})