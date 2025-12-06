<template>
    <div id="flyonui-vue-docs-docs-sidebar"
         class="sticky top-28 h-[calc(100vh-7.25rem)] w-64 overflow-x-hidden overflow-y-auto max-lg:hidden shrink-0"
    >
        <FoMenu class="vp-raw p-0!"
                size="extraSmall"
        >
            <FoMenuParentTitle>
                <b>On This page</b>
            </FoMenuParentTitle>

            <DocsSidebarNode v-for="item in items"
                             :key="item.id"
                             :item="item"
                             :navigation="{ navigate, activePath }"
                             is-parent
            />
        </FoMenu>
    </div>
</template>

<script setup lang="ts">
import type { DocsSidebarItem } from '@/.vitepress/theme/Components/Layout/Features/DocsSidebar/Types/DocsSidebar';

import DocsSidebarNode               from '@/.vitepress/theme/Components/Layout/Features/DocsSidebar/UI/DocsSidebarNode.vue';
import { FoMenu, FoMenuParentTitle } from 'flyonui-vue';
import { useRouter }                 from 'vitepress';
import { computed, watch }           from 'vue';

interface Props {
    items: DocsSidebarItem[];
}

defineProps<Props>();

const router = useRouter();

const activePath = computed((): string => router.route.path + router.route.hash);

watch(() => router.route.path, () => {
    navigate(activePath.value);
}, { immediate: true });

async function navigate(to: string): Promise<void> {
    return router.go(to);
}
</script>
