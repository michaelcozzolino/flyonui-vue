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

import type { FlyonUITheme } from 'flyonui-vue';
import DocsSidebar           from '@/.vitepress/theme/Components/Layout/Features/DocsSidebar/UI/DocsSidebar.vue';
import Home                  from '@/.vitepress/theme/Components/Layout/Features/Home/UI/Home.vue';
import Navbar                from '@/.vitepress/theme/Components/Layout/Features/Navbar/UI/Navbar.vue';

import NotFound
    from '@/.vitepress/theme/Components/Layout/Features/NotFound/UI/NotFound.vue';
import Sidebar
    from '@/.vitepress/theme/Components/Layout/Features/Sidebar/UI/Sidebar.vue';
import {
    useAnchorScrollSpy,
}                                                        from '@/.vitepress/theme/Components/Layout/Lib/UseAnchorScrollSpy';
import { useLayoutStore }                                from '@/.vitepress/theme/Components/Layout/Lib/UseLayoutStore';
import { useColorMode }                                  from '@vueuse/core';
import { useFlyonUIThemeFont }                           from 'flyonui-vue';
import { Content, onContentUpdated, useData, useRouter } from 'vitepress';
import { computed, onMounted, ref }                      from 'vue';

const router = useRouter();

const { isHomepage, vitepressThemeLocalStorageKey } = useLayoutStore();
const { frontmatter, page }                         = useData();

const docsHeadings = ref<NodeListOf<HTMLElement> | null>(null);

useAnchorScrollSpy(docsHeadings, router);

const items = computed((): DocsSidebarItem[] => {
    if (docsHeadings.value === null) {
        return [];
    }

    const roots: DocsSidebarItem[] = [];
    const stack: DocsSidebarItem[] = [];

    for (let i = 0; i < docsHeadings.value.length; i++) {
        const heading = docsHeadings.value.item(i);

        if (heading === undefined) {
            continue;
        }

        const level = Number(heading.tagName[1]);

        const anchor = heading.querySelector<HTMLAnchorElement>('a.header-anchor');

        if (anchor === null) {
            continue;
        }

        const item: DocsSidebarItem = {
            id:       i,
            to:       `${anchor.pathname}${anchor.hash}`,
            text:     heading.textContent ?? '',
            children: [],
            level,
        };

        // Pop the stack until we find a parent with a lower level
        while (stack.length && Number(stack.at(-1)?.level) >= level) {
            stack.pop();
        }

        if (stack.length === 0) {
            roots.push(item);
        } else {
            stack.at(-1)?.children.push(item);
        }

        stack.push(item);
    }

    return roots;
});

onContentUpdated(() => {
    docsHeadings.value = document.querySelectorAll('.VPDoc :where(h1,h2,h3,h4,h5,h6)');
});

onMounted(() => useFlyonUIThemeFont(
    useColorMode<FlyonUITheme>({ storageKey: vitepressThemeLocalStorageKey }),
    '--vp-font-family-base',
));
</script>
