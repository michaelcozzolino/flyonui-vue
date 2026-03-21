import { useSidebarItems }    from '@/.vitepress/theme/Components/Layout/Features/Sidebar/Lib/UseSidebarItems';
import { flyonUIVueNextPath } from '@/Next/Lib/Next';
import { expect, test }       from '@playwright/test';

test('props and slots tables do not have empty columns', async ({ page }) => {
    test.setTimeout(10 * 60 * 1000);

    const body = page.locator('body').first();
    await body.waitFor();

    const sidebarItems = useSidebarItems();

    for (const sidebarItem of sidebarItems.value) {
        for (const childSidebarItem of sidebarItem.children) {
            const childSidebarItemPath = childSidebarItem.to;

            if (typeof childSidebarItemPath !== 'string') {
                throw new TypeError('The child sidebar item path must be a string.');
            }

            await page.goto(childSidebarItemPath);

            const propsApis = await page.locator('[data-test="props-api"]').all();
            const slotsApis = await page.locator('[data-test="slots-api"]').all();

            for (const api of [...propsApis, ...slotsApis]) {
                const apiId = await api.getAttribute('id');

                /**
                 * FoCheckbox temporarily excluded as it contains an internal slot and I have to see how to handle this
                 * FoInputText temporarily excluded as it contains modelModifiers and I have to see how to handle this
                 */
                if (apiId?.includes('FoCheckbox') || apiId?.includes('FoInputText')) {
                    continue;
                }

                const rows = await api.locator('tbody tr').all();

                for (const [rowIndex, row] of rows.entries()) {
                    const columns = await row.locator('td').all();

                    // todo: unknown-api should be handled better
                    for (const [columnIndex, column] of columns.entries()) {
                        await expect(
                            column,
                            `Expected "${apiId ?? 'unknown-api'}" on "${childSidebarItemPath}" to have content in row ${rowIndex + 1}, column ${columnIndex + 1}.`,
                        ).not.toHaveText(/^\s*$/);
                    }
                }
            }
        }
    }
});

test('components previews', async ({ page }) => {
    test.setTimeout(10 * 60 * 1000);

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

                        body {
                          -webkit-font-smoothing: antialiased;
                          -moz-osx-font-smoothing: grayscale;
                        }
                    `,
            });

            const codeSnippets = await page.locator('[data-test="code-snippet"]').all();

            /**
             * /content/link -> content/link
             * /next/content/link -> content/link for unreleased features snapshots will still use the standard naming
             *                                    so that it will be easier to test them when a new release is done.
             */
            const pathPrefix = childSidebarItemPath.replace(flyonUIVueNextPath, '').slice(1);

            for (const codeSnippet of codeSnippets) {
                const screenshotId = await codeSnippet.getAttribute('data-test-screenshot');

                // snippets without screenshotId are probably components with animations that cannot be tested through screenshots
                if (screenshotId === null) {
                    continue;
                }

                const preview = codeSnippet.locator('[data-test="flyonui-vue-preview"]').first();
                await preview.waitFor();

                // waits that any async components are loaded into the preview and asserts that there is at least one
                await expect.poll(
                    async () => await preview.locator('*').count(),
                ).toBeGreaterThan(0);

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
