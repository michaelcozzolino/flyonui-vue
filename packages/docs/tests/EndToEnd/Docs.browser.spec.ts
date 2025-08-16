import { getSidebarItems } from '@/.vitepress/theme/Shared/Config/Lib/getSidebarItems';
import { expect, test }    from '@playwright/test';

test('components previews', async ({ page }) => {
    test.slow();

    const body = page.locator('body').first();
    await body.waitFor();

    const sidebarItems = getSidebarItems();

    for (const parentItem of sidebarItems) {
        const childItems = parentItem.items ?? [];

        for (const childItem of childItems) {
            for (const childChildItem of childItem.items ?? []) {
                const categoryPath = childItem.base; // E.G: /content/

                if (categoryPath === undefined) {
                    throw new Error('The category path cannot be undefined.');
                }

                const itemName = childChildItem.link;

                // todo: check how to do it through github action
                const url = `${categoryPath}${itemName}`;

                await page.goto(url);

                await page.addStyleTag({
                    content: ` #flyonui-vue-docs-navbar { display: none !important; }`,
                });

                const codeSnippets = await page.locator('[data-test="code-snippet"]').all();

                const pathPrefix = categoryPath.slice(1);

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

                    expect.soft(screenshot).toMatchSnapshot(`${pathPrefix}${itemName}/${screenshotId}.png`);
                }

                const propsApis    = await page.locator('[data-test="props-api"]').all();
                const slotsApis    = await page.locator('[data-test="slots-api"]').all();

                const apis = [...propsApis, ...slotsApis];

                for (const api of apis) {
                    const id = await api.getAttribute('id');

                    if (id === null) {
                        throw new Error('Api must have an id.');
                    }

                    const screenshot = await api.screenshot();

                    expect.soft(screenshot).toMatchSnapshot(`${pathPrefix}${itemName}/${id}.png`);
                }
            }
        }
    }
});
