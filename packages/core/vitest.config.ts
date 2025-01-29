import path             from 'node:path';
import vue              from '@vitejs/plugin-vue';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    plugins: [
        vue(),
    ],
    test: {
        include:      ['tests/**/*.{vue,ts,tsx}'],
        globals:      true,
        clearMocks:   true,
        mockReset:    true,
        restoreMocks: true,
        environment:  'jsdom',
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
});
