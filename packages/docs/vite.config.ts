import { resolve }      from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
    resolve: {
        alias: [
            {
                find:        /^.*\/VPSwitchAppearance\.vue$/,
                replacement: resolve(__dirname, '.vitepress/theme/Components/ThemeSwitcher.vue'),
            },
        ],
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler',
            },
        },
    },
});
