import { resolve }      from 'node:path';
import vue              from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
        },
        dedupe: ['vue'],
    },
    build: {
        cssCodeSplit: true,
        target:       'ESNext',
        lib:          {
            entry: resolve(__dirname, './src/index.ts'),
            name:  'flyonui-vue',
        },
        rollupOptions: {
            external: ['vue', 'vue-router'],
            output:   {
                globals: {
                    'vue':        'Vue',
                    'vue-router': 'VueRouter',
                },
            },
        },
    },
});
