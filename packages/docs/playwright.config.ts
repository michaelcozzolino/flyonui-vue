import * as process              from 'node:process';
import { defineConfig, devices } from '@playwright/test';

const baseURL          = 'http://localhost:4173';
const workspaceCommand = 'yarn workspace flyonui-vue-docs';
const previewCommand   = `${workspaceCommand} preview`;

export default defineConfig({
    expect: {
        toMatchSnapshot: process.env.CI ? { maxDiffPixelRatio: 0.025, threshold: 0.025 } : undefined,
    },
    workers:       process.env.CI ? '100%' : '50%',
    fullyParallel: true,
    outputDir:     './tests/EndToEnd/Results',
    webServer:     {
        // In the GitHub action the docs are built before the execution of the tests, in local they might not be.
        command:             process.env.CI ? previewCommand : `yarn workspace flyonui-vue build && ${workspaceCommand} build && ${previewCommand}`,
        url:                 baseURL,
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
