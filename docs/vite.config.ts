import { resolve }      from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
    resolve: {
        alias: [
            {
                find:        '@',
                replacement: resolve(__dirname, '../src'),
            },
            {
                find:        /^.*\/VPSwitchAppearance\.vue$/,
                replacement: resolve(__dirname, '../src/components/ThemeController/UI/SelectThemeController.vue'),
            },
        ],
    },
});
