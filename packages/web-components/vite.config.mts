import { resolve }      from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
        },
        dedupe: ['vue', 'flyonui', 'flyonui-vue'],
    },
    build: {
        emptyOutDir:  false,
        cssCodeSplit: true,
        target:       'esnext',
        lib:          {
            entry: resolve(__dirname, './src/index.ts'),
            name:  'flyonui-web-components',
        },
        rolldownOptions: {
            external: ['vue'],
            output:   {
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
});
