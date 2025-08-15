import * as process              from 'node:process';
import { defineConfig, devices } from '@playwright/test';

const baseURL = 'http://localhost:4173';

export default defineConfig({
    outputDir: './tests/EndToEnd/Results',
    webServer: {
        command:             'yarn workspace flyonui-vue-docs preview',
        url:                 baseURL,
        timeout:             120 * 1000,
        reuseExistingServer: !process.env.CI,
    },
    projects: [
        {
            name: 'chromium',
            use:  {
                ...devices['Desktop Chrome'],
                baseURL,
            },
        },
    ],
});
