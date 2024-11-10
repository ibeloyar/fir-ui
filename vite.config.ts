import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

export default defineConfig({
    build: {
        lib: {
            entry: './src/main.ts',
            name: 'fir-vue',
            fileName: (format) => `fir-vue.${format}.js`,
            formats: ['es', 'umd'],
        },
        outDir: './lib',
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled into your library
            external: ['vue'],
            output: {
                // Provide global variables to use in the UMD build for externalized deps
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
    plugins: [
        vue(),
        dts({
            insertTypesEntry: true,
        }),
    ],
});
