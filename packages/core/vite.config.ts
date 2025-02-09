import { resolve }      from 'node:path';
import vue              from '@vitejs/plugin-vue';
import { visualizer }   from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        vue(),
        visualizer({
            filename: '../docs/public/build-size-visualizer.html',
        }),
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
        },
        dedupe: ['vue'],
    },
    build: {
        emptyOutDir:  false,
        cssCodeSplit: true,
        target:       'ESNext',
        lib:          {
            entry: resolve(__dirname, './src/index.ts'),
            name:  'flyonui-vue',
        },
        rollupOptions: {
            external: ['@iconify/vue', 'vue', 'vue-router'],
            output:   {
                globals: {
                    'vue':        'Vue',
                    'vue-router': 'VueRouter',
                },
            },
        },
    },
});
