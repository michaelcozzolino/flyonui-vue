<template>
    <div id="flyonui-vue-docs-docs-sidebar"
         class="sticky top-27 h-[calc(100vh-6.75rem)] w-60 overflow-x-hidden overflow-y-auto max-lg:hidden shrink-0"
    >
        <FoMenu class="vp-raw p-0!"
                size="extraSmall"
        >
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

import DocsSidebarNode           from '@/.vitepress/theme/Components/Layout/Features/DocsSidebar/UI/DocsSidebarNode.vue';
import { enableAnchorScrollSpy } from '@/.vitepress/theme/Components/Layout/Lib/UseAnchorScrollSpy';
import { useEventListener }      from '@vueuse/core';
import { FoMenu }                from 'flyonui-vue';
import { useRouter }             from 'vitepress';
import { computed, watch }       from 'vue';

interface Props {
    items: DocsSidebarItem[];
}

defineProps<Props>();

const router = useRouter();

const activePath = computed((): string => router.route.path + router.route.hash);

watch(() => router.route.path, () => {
    navigate(activePath.value);
}, { immediate: true });

function navigate(to: string): Promise<void> {
    enableAnchorScrollSpy.value = false;

    return router.go(to, { smoothScroll: true });
}

/**
 * The scrollend will, at least, be fired after that a manual click with scroll on the sidebar will be performed and,
 * according to the navigate function above, the scroll spy that was disabled will be enabled again. This is to avoid
 * conflicts with the manual scroll.
 */
useEventListener('scrollend', () => enableAnchorScrollSpy.value = true);
</script>
