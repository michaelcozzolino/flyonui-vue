import { resolve }      from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
    resolve: {
        alias: [
            {
                find:        /flyonui-vue/,
                replacement: resolve(__dirname, 'node_modules', 'flyonui-vue'),
            },
            {
                find:        /^.*\/VPSwitchAppearance\.vue$/,
                replacement: resolve(__dirname, '.vitepress/theme/Components/ThemeSwitcher.vue'),
            },
        ],
    },
});
