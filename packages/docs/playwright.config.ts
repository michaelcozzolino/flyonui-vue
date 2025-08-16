import * as process              from 'node:process';
import { defineConfig, devices } from '@playwright/test';

const baseURL = 'http://localhost:4173';

export default defineConfig({
    expect: {
        toMatchSnapshot: { maxDiffPixelRatio: 0.04, threshold: 0.2 },
    },
    workers:   '50%',
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
                launchOptions: {
                    args: [
                        '--disable-font-subpixel-positioning',
                    ],
                },
                baseURL,
            },
        },
    ],
    reporter: [
        [
            'html',
            {
                outputFolder: 'tests/EndToEnd/Report',
                open:         process.env.CI ? 'never' : 'always',
            },
        ],
    ],
});
