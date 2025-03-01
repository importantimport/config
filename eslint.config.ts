import { defineConfig } from '@importantimport/eslint-config'

export default defineConfig({
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
}, {
  ignores: ['cspell.config.yaml'],
})
