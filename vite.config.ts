import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: './src/main.ts',
      name: 'fir-vue',
      fileName: (format) => `fir-vue.${format}.js`,
      formats: ['es', 'umd'],
    },
    outDir: './lib',
  },
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
    }),
  ],
})
