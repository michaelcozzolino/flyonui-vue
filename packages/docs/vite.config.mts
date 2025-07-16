import { resolve }      from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
    resolve: {
        alias: [
            {
                find:        '@',
                replacement: resolve(__dirname, '.'),
            },
        ],
        dedupe: ['vue', 'flyonui', 'flyonui-vue', 'pinia'],
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler',
            },
        },
    },
});
