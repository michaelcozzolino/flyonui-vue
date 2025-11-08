import { exec }         from 'node:child_process';
import * as fs          from 'node:fs';
import { resolve }      from 'node:path';
import process          from 'node:process';
import tailwindcss      from '@tailwindcss/vite';
import vue              from '@vitejs/plugin-vue';
import { visualizer }   from 'rollup-plugin-visualizer';
import Components       from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';

/**
 * todo: maybe there is a better alternative to fix this.
 *
 * Vite/Rollup only rebuilds on changes to files that are part of the runtime dependency graph.
 * The props come mainly from external files and are type-only imports,
 * so they’re erased at compile time and don’t exist in the graph. This plugin rebuilds the package whenever a file
 * contains props during hmr.
 */
function rebuildOnMaybePropsUpdate(): Plugin {
    return {
        name:        'rebuild-on-maybe-props-update',
        apply:       'build',
        watchChange: (file: string): void => {
            if (file.endsWith('.ts')) {
                const content = fs.readFileSync(file);

                if (content.includes('Props')) {
                    console.info(`File ${file} contains props. Rebuilding...`);
                    exec('yarn build:vue:ui');
                }
            }
        },
    };
}

export default defineConfig({
    plugins: [
        vue(),
        Components({ dirs: 'src/UI' }),
        tailwindcss(),
        // todo: understand why not working in local
        ...process.env.GENERATE_BUILD_SIZE_VISUALIZER
            ? [visualizer({
                    filename: '../docs/public/build-size-visualizer.html',
                })]
            : [],
        rebuildOnMaybePropsUpdate(),
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
        },
        dedupe: ['vue', 'flyonui', 'flyonui-vue'],
    },
    build: {
        outDir:       'dist-vue',
        emptyOutDir:  false,
        cssCodeSplit: true,
        target:       'ESNext',
        lib:          {
            entry: resolve(__dirname, './src/index.ts'),
            name:  'flyonui-vue',
        },
        rollupOptions: {
            external: ['@iconify/vue', 'vue', 'vue-router', 'tailwindcss'],
            output:   {
                globals: {
                    '@iconify/vue': 'Iconify',
                    'vue':          'Vue',
                    'vue-router':   'VueRouter',
                },
            },
        },
    },
});
