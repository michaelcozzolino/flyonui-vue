import type { PlaywrightTestArgs }             from '@playwright/test';
import type { ConsoleMessage, Locator }        from 'playwright';
import type { Framework, FrameworkId }         from '@/.vitepress/theme/Components/Layout/Features/FrameworkSelector/Types/FrameworkSelector';
import type { ParentSidebarItem, SidebarItem } from '@/.vitepress/theme/Components/Layout/Features/Sidebar/Types/Sidebar';
import { Buffer }                              from 'node:buffer';
import { expect, test }                        from '@playwright/test';
import { createPinia, setActivePinia }         from 'pinia';
import { useFrameworkSelectionStore }          from '@/.vitepress/theme/Components/Layout/Features/FrameworkSelector/Lib/UseFrameworkSelectionStore';
import { useSidebarItems }                     from '@/.vitepress/theme/Components/Layout/Features/Sidebar/Lib/UseSidebarItems';
import { playwrightServerURL }                 from '@/playwright.config';

setActivePinia(createPinia());

const docsPagePathsBySection = getDocsPagePathsBySection();

const { frameworks, selectedFrameworksLocalStorageKey } = useFrameworkSelectionStore();
const selectedFrameworkIds: FrameworkId[]               = frameworks.map(({ id }: Framework): FrameworkId => id);

test.use({
    storageState: {
        cookies: [],
        origins: [
            {
                origin:       playwrightServerURL,
                localStorage: [
                    {
                        name:  selectedFrameworksLocalStorageKey,
                        value: JSON.stringify(selectedFrameworkIds),
                    },
                ],
            },
        ],
    },
});

for (const [section, docsPagePaths] of Object.entries(docsPagePathsBySection)) {
    test(`pages do not emit console messages or page errors: ${section}`, async ({ page }: PlaywrightTestArgs): Promise<void> => {
        const body = page.locator('body').first();
        await body.waitFor();

        const consoleMessages: string[] = [];
        const pageErrors: string[]      = [];

        page.on('console', (message: ConsoleMessage): void => {
            consoleMessages.push(`[${message.type()}] ${message.text()}`);
        });

        page.on('pageerror', (error: Error): void => {
            pageErrors.push(error.message);
        });

        for (const docsPagePath of getDocsPagePathsBySection(['/extra/build-size-visualizer'])[section] ?? []) {
            await page.goto(docsPagePath);

            // todo: remove filter when the web-components package is production-ready
            const unexpectedConsoleMessages = consoleMessages.filter((message: string): boolean => !message.includes(
                '[warning] FlyonUI web components is still an experimental package, its api and behaviour might change. DO NOT use on production.',
            ));

            expect(
                unexpectedConsoleMessages,
                `Expected "${docsPagePath}" not to emit console messages, but got:\n${unexpectedConsoleMessages.join('\n')}`,
            ).toEqual([]);

            expect(
                pageErrors,
                `Expected "${docsPagePath}" not to emit page errors, but got:\n${pageErrors.join('\n')}`,
            ).toEqual([]);

            consoleMessages.length = 0;
            pageErrors.length = 0;
        }
    });

    test(`props and slots tables do not have empty columns: ${section}`, async ({ page }: PlaywrightTestArgs): Promise<void> => {
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

    test(`components previews: ${section}`, async ({ page }: PlaywrightTestArgs): Promise<void> => {
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

            // /content/link -> content/link
            const pathPrefix = docsPagePath.slice(1);

            for (const codeSnippet of codeSnippets) {
                const screenshotId = await codeSnippet.getAttribute('data-test-screenshot');

                // snippets without screenshotId are probably components with animations that cannot be tested through screenshots
                if (screenshotId === null) {
                    continue;
                }

                let vueScreenshot: Buffer<ArrayBufferLike> | null = null;

                for (const { id, label } of frameworks) {
                    const frameworkTab = codeSnippet.getByRole('tab', { name: label, exact: true });

                    if (await frameworkTab.count() === 0) {
                        continue;
                    }

                    await frameworkTab.click();

                    const preview = codeSnippet.locator(`#tab-content-${id} [data-test="flyonui-vue-preview"]`);
                    await preview.waitFor();

                    // Wait for the framework preview to render before capturing it.
                    await expect.poll(
                        async (): Promise<number> => await preview.locator('*').count(),
                    ).toBeGreaterThan(0);

                    await preview.scrollIntoViewIfNeeded();

                    // move mouse outside the components preview to avoid unwanted hover
                    await page.mouse.move(0, 0);

                    const screenshot = await preview.screenshot({ animations: 'disabled' });

                    if (id === 'vue') {
                        vueScreenshot = screenshot;
                        expect.soft(screenshot).toMatchSnapshot(`${pathPrefix}/${screenshotId}.png`.replaceAll('/', '-'));

                        continue;
                    }

                    if (vueScreenshot === null) {
                        throw new Error(`Cannot compare the ${label} preview because the Vue preview is missing.`);
                    }

                    expect.soft(
                        Buffer.compare(screenshot, vueScreenshot),
                        `Expected the ${label} preview for "${screenshotId}" to match the Vue preview.`,
                    ).toBe(0);
                }
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
