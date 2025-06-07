import { resolve }      from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
    resolve: {
        alias: [
            {
                find:        '@',
                replacement: resolve(__dirname, '.'),
            },
            {
                find:        /^.*\/VPNavBar\.vue$/,
                replacement: resolve(__dirname, '.vitepress/theme/Components/Navbar/UI/Navbar.vue'),
            },
        ],
        dedupe: ['vue', 'flyonui-vue'],
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler',
            },
        },
    },
});
