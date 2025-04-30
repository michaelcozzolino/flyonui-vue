import { resolve }      from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
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
            name:  'flyonui-web-components',
        },
        rollupOptions: {
            external: ['vue'],
            output:   {
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
});
