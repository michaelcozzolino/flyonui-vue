import { resolve }      from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
    resolve: {
        alias: [
            {
                find:        /^.*\/VPSwitchAppearance\.vue$/,
                replacement: resolve(__dirname, '.vitepress/theme/Components/ThemeSwitcher.vue'),
            },
            {
                find:        /^.*\/VPNavBar\.vue$/,
                replacement: resolve(__dirname, '.vitepress/theme/Components/Navbar.vue'),
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
