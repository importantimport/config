// eslint-disable-next-line n/no-extraneous-import
import { defineConfig } from 'tsup'

export default defineConfig({
  dts: true,
  entry: ['src/index.ts', 'src/utils/*.ts'],
  format: 'esm',
})