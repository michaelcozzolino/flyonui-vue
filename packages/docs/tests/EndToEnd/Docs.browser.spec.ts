import type {
    ParentSidebarItem,
    SidebarItem,
}                             from '@/.vitepress/theme/Components/Layout/Features/Sidebar/Types/Sidebar';
import type { Locator }       from 'playwright';
import { useSidebarItems }    from '@/.vitepress/theme/Components/Layout/Features/Sidebar/Lib/UseSidebarItems';
import { flyonUIVueNextPath } from '@/Next/Lib/Next';
import { expect, test }       from '@playwright/test';

const docsPagePathsBySection = getDocsPagePathsBySection();

for (const [section, docsPagePaths] of Object.entries(docsPagePathsBySection)) {
    test(`pages do not emit console messages or page errors: ${section}`, async ({ page }) => {
        const body = page.locator('body').first();
        await body.waitFor();

        const consoleMessages: string[] = [];
        const pageErrors: string[]      = [];

        page.on('console', (message) => {
            consoleMessages.push(`[${message.type()}] ${message.text()}`);
        });

        page.on('pageerror', (error) => {
            pageErrors.push(error.message);
        });

        for (const docsPagePath of getDocsPagePathsBySection(['/extra/build-size-visualizer'])[section] ?? []) {
            await page.goto(docsPagePath);

            expect(
                consoleMessages,
                `Expected "${docsPagePath}" not to emit console messages, but got:\n${consoleMessages.join('\n')}`,
            ).toEqual([]);

            expect(
                pageErrors,
                `Expected "${docsPagePath}" not to emit page errors, but got:\n${pageErrors.join('\n')}`,
            ).toEqual([]);

            consoleMessages.length = 0;
            pageErrors.length = 0;
        }
    });

    test(`props and slots tables do not have empty columns: ${section}`, async ({ page }) => {
        const body = page.locator('body').first();
        await body.waitFor();

        for (const docsPagePath of docsPagePaths) {
            await page.goto(docsPagePath);

            const propsApis = await page.locator('[data-test="props-api"]').all();
            const slotsApis = await page.locator('[data-test="slots-api"]').all();

            for (const api of [...propsApis, ...slotsApis]) {
                const id = await getApiId(api);

                /**
                 * FoCheckbox temporarily excluded as it contains an internal slot and I have to see how to handle this
                 * FoInputText temporarily excluded as it contains modelModifiers and I have to see how to handle this
                 */
                if (id.includes('FoCheckbox') || id.includes('FoInputText')) {
                    continue;
                }

                const rows = await api.locator('tbody tr').all();

                for (const [rowIndex, row] of rows.entries()) {
                    const columns = await row.locator('td').all();

                    // todo: unknown-api should be handled better
                    for (const [columnIndex, column] of columns.entries()) {
                        await expect(
                            column,
                            `Expected "${id}" on "${docsPagePath}" to have content in row ${rowIndex + 1}, column ${columnIndex + 1}.`,
                        ).not.toHaveText(/^\s*$/);
                    }
                }
            }
        }
    });

    test(`components previews: ${section}`, async ({ page }) => {
        test.slow();

        const body = page.locator('body').first();
        await body.waitFor();

        for (const docsPagePath of docsPagePaths) {
            await page.goto(docsPagePath);

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
            const pathPrefix = docsPagePath.replace(flyonUIVueNextPath, '').slice(1);

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

            for (const api of [...propsApis, ...slotsApis]) {
                const id         = await getApiId(api);
                const screenshot = await api.screenshot();

                expect.soft(screenshot).toMatchSnapshot(`${pathPrefix}/${id}.png`.replaceAll('/', '-'));
            }
        }
    });
}

function getDocsPagePathsBySection(excludedDocsPagePaths: string[] = []): Record<string, string[]> {
    const initialSections: Record<string, string[]> = {};

    return getDocsPagePaths(excludedDocsPagePaths).reduce((sections: Record<string, string[]>, docsPagePath: string): Record<string, string[]> => {
        const section: string | undefined = docsPagePath.split('/')[1];

        if (section === undefined) {
            throw new Error(`Cannot resolve section for docs page path "${docsPagePath}".`);
        }

        sections[section] ??= [];
        sections[section].push(docsPagePath);

        return sections;
    }, initialSections);
}

function getDocsPagePaths(excludedDocsPagePaths: string[] = []): string[] {
    return useSidebarItems().value.flatMap((sidebarItem: ParentSidebarItem): string[] => {
        return sidebarItem.children.map((childSidebarItem: SidebarItem): string => {
            if (typeof childSidebarItem.to !== 'string') {
                throw new TypeError('The child sidebar item path must be a string.');
            }

            return childSidebarItem.to;
        });
    }).filter((docsPagePath: string): boolean => {
        return !excludedDocsPagePaths.includes(docsPagePath);
    });
}

async function getApiId(api: Locator): Promise<string> {
    const id = await api.getAttribute('id');

    if (id === null) {
        throw new Error('The Api must have an id.');
    }

    return id;
}
