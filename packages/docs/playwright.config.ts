import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    outputDir: './tests/EndToEnd/Results',
    projects:  [
        {
            name: 'chromium',
            use:  { ...devices['Desktop Chrome'] },
        },
    ],
});
