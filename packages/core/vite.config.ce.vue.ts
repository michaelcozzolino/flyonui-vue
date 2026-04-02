import { resolve }      from 'node:path';
import vue              from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        vue({ features: { customElement: true } }),
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
        },
        dedupe: ['vue', 'flyonui', 'flyonui-vue'],
    },
    build: {
        outDir:       'dist-ce.vue',
        emptyOutDir:  false,
        cssCodeSplit: true,
        target:       'esnext',
        lib:          {
            entry: resolve(__dirname, './src/index.ts'),
            name:  'flyonui-web-components',
        },
        rolldownOptions: {
            external: ['@iconify/vue', 'tailwindcss'],
            output:   {
                globals: {
                    '@iconify/vue': 'Iconify',
                },
            },
        },
    },
});
