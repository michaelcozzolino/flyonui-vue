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
            // make sure to externalize deps that shouldn't be bundled
            // into your library, todo: maybe something else should be added
            external: ['vue'],
            output:   {
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
});
