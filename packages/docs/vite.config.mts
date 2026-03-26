import { execSync }     from 'node:child_process';
import { resolve }      from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
    define: {
        FLYONUI_VUE_VERSION: JSON.stringify(execSync('yarn core:version').toString().trim()),
    },
    build: {
        // The generated component API is intentionally large and now lives in its own lazy chunk.
        chunkSizeWarningLimit: 800,
    },
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
