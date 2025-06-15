import { getSidebarItems } from '@/.vitepress/theme/Shared/Config/Lib/getSidebarItems';
import { expect, test }    from '@playwright/test';

test('docs preview screenshots snapshots', async ({ page }) => {
    test.slow();

    const body = page.locator('body').first();
    await body.waitFor();

    const sidebarItems = getSidebarItems();

    for (const parentItem of sidebarItems) {
        const childItems = parentItem.items ?? [];

        for (const childItem of childItems) {
            for (const childChildItem of childItem.items ?? []) {
                const categoryPath = childItem.base; // E.G: /content/
                const itemName     = childChildItem.link;

                // todo: check how to do it through github action
                const url          = `http://localhost:5173${categoryPath}${itemName}`;

                await page.goto(url);

                const codeSnippets = await page.locator('[data-test="code-snippet"]').all();

                for (const codeSnippet of codeSnippets) {
                    const id = await codeSnippet.getAttribute('id');

                    // snippets without id are probably components with animations that cannot be tested through screenshots
                    if (id === null) {
                        continue;
                    }

                    const preview = codeSnippet.locator('[data-test="flyonui-vue-preview"]').first();
                    await preview.waitFor();
                    await preview.scrollIntoViewIfNeeded();

                    const screenshot = await preview.screenshot({ animations: 'disabled' });

                    expect.soft(screenshot).toMatchSnapshot(`${categoryPath?.slice(1)}${itemName}/${id}.png`);
                }
            }
        }
    }
});
