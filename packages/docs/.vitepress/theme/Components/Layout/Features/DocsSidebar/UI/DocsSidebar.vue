<template>
    <div class="sticky top-28 h-[calc(100vh-7.25rem)] w-40 overflow-x-hidden overflow-y-auto max-lg:hidden shrink-0">
        <FoMenu class="vp-raw p-0!"
                size="extraSmall"
        >
            <FoMenuParentTitle>
                <b>On This page</b>
            </FoMenuParentTitle>

            <DocsSidebarNode v-for="item in items"
                             :key="item.id"
                             :item="item"
                             :navigation="{ navigate, activePath: router.route.path + activeHash }"
                             is-parent
            />
        </FoMenu>
    </div>
</template>

<script setup lang="ts">
import type { DocsSidebarItem } from '@/.vitepress/theme/Components/Layout/Features/DocsSidebar/Types/DocsSidebar.ts';

import DocsSidebarNode               from '@/.vitepress/theme/Components/Layout/Features/DocsSidebar/UI/DocsSidebarNode.vue';
import { FoMenu, FoMenuParentTitle } from 'flyonui-vue';
import { useRouter }                 from 'vitepress';
import { ref }                       from 'vue';

interface Props {
    items: DocsSidebarItem[];
}

defineProps<Props>();

const router = useRouter();

const activeHash = ref('');

async function navigate(to: string) {
    await router.go(to).then(() => activeHash.value = to.slice(to.indexOf('#')));
}
</script>
