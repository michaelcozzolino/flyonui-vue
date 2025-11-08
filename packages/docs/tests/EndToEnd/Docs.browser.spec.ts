import { useSidebarItems } from '@/.vitepress/theme/Components/Layout/Features/Sidebar/Lib/UseSidebarItems';
import { expect, test }    from '@playwright/test';

test('components previews', async ({ page }) => {
    test.slow();

    const body = page.locator('body').first();
    await body.waitFor();

    const sidebarItems = useSidebarItems();

    for (const sidebarItem of sidebarItems.value) {
        for (const childSidebarItem of sidebarItem.children) {
            const childSidebarItemPath = childSidebarItem.to; // E.G: /content/link

            if (typeof childSidebarItemPath !== 'string') {
                throw new TypeError('The child sidebar item path must be a string.');
            }

            await page.goto(childSidebarItemPath);

            // Hides navbar and sidebars
            await page.addStyleTag({
                content: `
                        #flyonui-vue-docs-navbar,
                        #flyonui-vue-docs-sidebar,
                        #flyonui-vue-docs-docs-sidebar {
                          display: none !important;
                        }
                        
                        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=block');
                        
                        html,
                        body,
                        * {
                          font-family: 'Inter', system-ui, sans-serif !important;
                        }
                        
                        body {
                          -webkit-font-smoothing: antialiased;
                          -moz-osx-font-smoothing: grayscale;
                        }
                    `,
            });

            const codeSnippets = await page.locator('[data-test="code-snippet"]').all();

            const pathPrefix = childSidebarItemPath.slice(1); // /content/link -> content/link

            for (const codeSnippet of codeSnippets) {
                const screenshotId = await codeSnippet.getAttribute('data-test-screenshot');

                // snippets without screenshotId are probably components with animations that cannot be tested through screenshots
                if (screenshotId === null) {
                    continue;
                }

                const preview = codeSnippet.locator('[data-test="flyonui-vue-preview"]').first();
                await preview.waitFor();
                await preview.scrollIntoViewIfNeeded();

                const screenshot = await preview.screenshot({ animations: 'disabled' });

                expect.soft(screenshot).toMatchSnapshot(`${pathPrefix}/${screenshotId}.png`.replaceAll('/', '-'));
            }

            const propsApis = await page.locator('[data-test="props-api"]').all();
            const slotsApis = await page.locator('[data-test="slots-api"]').all();

            const apis = [...propsApis, ...slotsApis];

            for (const api of apis) {
                const id = await api.getAttribute('id');

                if (id === null) {
                    throw new Error('Api must have an id.');
                }

                const screenshot = await api.screenshot();

                expect.soft(screenshot).toMatchSnapshot(`${pathPrefix}/${id}.png`.replaceAll('/', '-'));
            }
        }
    }
});
