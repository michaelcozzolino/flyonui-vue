import { execSync }      from 'node:child_process';
import { resolve }       from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig }  from 'vite';

export default defineConfig({
    define: {
        FLYONUI_VUE_VERSION: JSON.stringify(execSync('yarn core:version').toString().trim()),
    },
    resolve: {
        alias: [
            {
                find:        '@',
                replacement: resolve(__dirname, '.'),
            },
            {
                find:        /^.*\/VPNavBarSearchButton\.vue$/,
                replacement: fileURLToPath(
                    new URL('./.vitepress/theme/Components/Layout/Features/Navbar/UI/DocsSearchButton.vue', import.meta.url),
                ),
            },
        ],
        dedupe: ['vue', 'flyonui', 'flyonui-vue', 'pinia'],
    },
});
