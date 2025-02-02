import { resolve }      from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
    resolve: {
        alias: [
            {
                find:        /^.*\/VPNavBar\.vue$/,
                replacement: resolve(__dirname, '.vitepress/theme/Components/Navbar.vue'),
            },
        ],
        dedupe: ['vue'],
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler',
            },
        },
    },
});
