<template>
    <div>
        <Navbar />
        <main class="main">
            <template v-if="page.isNotFound">
                <NotFound />
            </template>

            <Home v-else-if="isHomepage()" />

            <div v-else
                 class="flex"
            >
                <Sidebar />

                <Content class="VPDoc vp-doc flex-grow m-8 min-w-0" />

                <DocsSidebar v-if="frontmatter.aside !== false && items.length"
                             :items="items"
                />
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
import type { DocsSidebarItem } from '@/.vitepress/theme/Components/Layout/Features/DocsSidebar/Types/DocsSidebar.ts';

import DocsSidebar from '@/.vitepress/theme/Components/Layout/Features/DocsSidebar/UI/DocsSidebar.vue';
import Home        from '@/.vitepress/theme/Components/Layout/Features/Home/UI/Home.vue';
import Navbar      from '@/.vitepress/theme/Components/Layout/Features/Navbar/UI/Navbar.vue';

import NotFound from '@/.vitepress/theme/Components/Layout/Features/NotFound/UI/NotFound.vue';
import Sidebar
    from '@/.vitepress/theme/Components/Layout/Features/Sidebar/UI/Sidebar.vue';
import { useLayoutStore }                     from '@/.vitepress/theme/Components/Layout/Lib/UseLayoutStore';
import { Content, onContentUpdated, useData } from 'vitepress';
import { computed, ref }                      from 'vue';

const { isHomepage }        = useLayoutStore();
const { frontmatter, page } = useData();

const docsHeadings = ref<NodeListOf<Element> | null>(null);

const items = computed((): DocsSidebarItem[] => {
    if (docsHeadings.value === null) {
        return [];
    }

    const docsSidebarItems: DocsSidebarItem[] = [];

    let lastHeadingLevel: number | null             = null;
    let lastDocsSidebarItem: DocsSidebarItem | null = null;

    for (let i = 0; i < docsHeadings.value.length; i++) {
        const heading = docsHeadings.value.item(i);

        const headingLevel: number = +heading.tagName.charAt(1);

        if (headingLevel <= 1) {
            continue;
        }

        const a = heading.querySelector<HTMLAnchorElement>('a.header-anchor');

        if (a === null) {
            continue;
        }

        const item: DocsSidebarItem = {
            id:       i,
            to:       `${a.pathname}${a.hash}`,
            text:     heading.textContent ?? '',
            children: [],
        };

        if (lastHeadingLevel === null || headingLevel < lastHeadingLevel) {
            docsSidebarItems.push(item);
        } else if (headingLevel === lastHeadingLevel) {
            const itemsLength = docsSidebarItems.length;

            if (itemsLength === 0) {
                continue;
            }

            docsSidebarItems[docsSidebarItems.length - 1].children.push(item);
        } else {
            if (lastDocsSidebarItem === null) {
                continue;
            }

            lastDocsSidebarItem.children.push(item);
        }

        lastHeadingLevel = headingLevel;
        lastDocsSidebarItem = item;
    }

    return docsSidebarItems;
});

onContentUpdated(() => {
    docsHeadings.value = document.querySelectorAll('.VPDoc :where(h1,h2,h3,h4,h5,h6)');
});
</script>
