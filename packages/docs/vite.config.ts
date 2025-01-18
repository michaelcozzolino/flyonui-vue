import { resolve }      from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        sourcemap: 'inline',
    },
    resolve: {
        alias: [
            {
                find:        /^.*\/VPSwitchAppearance\.vue$/,
                replacement: resolve(__dirname, '.vitepress/theme/Components/ThemeSwitcher.vue'),
            },
        ],
    },
});
