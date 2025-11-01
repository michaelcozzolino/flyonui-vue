<template>
    <ClientOnly>
        <aside id="flyonui-vue-docs-sidebar"
               ref="sidebar"
               class="sticky top-16 overflow-x-hidden overflow-y-auto h-[calc(100vh-4.25rem)] shrink-0"
               :class="[
                   isCollapsed ? 'w-24' : 'w-64',
                   isPageSizeSmallerThanSm && isCollapsed && 'hidden',
                   isPageSizeSmallerThanSm && 'sidebar-mobile',
               ]"
               tabindex="-1"
        >
            <div class="px-0!">
                <FoMenu class="vp-raw pl-0!"
                        size="small"
                        :hide-text="isCollapsed"
                >
                    <SidebarNode v-for="item in items"
                                 :key="item.text"
                                 :item="item"
                    />
                </FoMenu>
            </div>
        </aside>
    </ClientOnly>
</template>

<script setup lang="ts">
import type { SidebarBadge, SidebarItem } from '@/.vitepress/theme/Components/Layout/Features/Sidebar/Types/Sidebar.ts';
import SidebarNode
    from '@/.vitepress/theme/Components/Layout/Features/Sidebar/UI/SidebarNode.vue';
import { useLayoutStore }      from '@/.vitepress/theme/Components/Layout/Lib/UseLayoutStore.ts';
import { onClickOutside }      from '@vueuse/core';
import { FoMenu }              from 'flyonui-vue';
import { storeToRefs }         from 'pinia';
import { ref, useTemplateRef } from 'vue';

const sidebarElement = useTemplateRef<HTMLElement>('sidebar');

const { isSidebarCollapsed: isCollapsed, isPageSizeSmallerThanSm } = storeToRefs(useLayoutStore());

const unreleasedBadge: SidebarBadge = {
    color: 'warning',
    text:  'Unreleased',
};

const items = ref<SidebarItem[]>([
    {
        text:     'Getting Started',
        children: [
            {
                text:     'Quick Start',
                to:       '/quick-start',
                icon:     'tabler:rocket',
                children: [],
            },
        ],
    },
    {
        text:     'Customization',
        children: [
            {
                text:     'Icons',
                to:       '/customisation/icons',
                icon:     'uil:icons',
                children: [],
            },
        ],
    },
    {
        text:     'Content',
        children: [
            {
                text:     'Link',
                to:       '/content/link',
                icon:     'ic:round-link',
                children: [],
            },
            {
                text:     'Keyboard',
                to:       '/content/keyboard',
                icon:     'mdi:keyboard-outline',
                badge:    unreleasedBadge,
                children: [],
            },
            {
                text:     'Mask',
                to:       '/content/mask',
                icon:     'mdi:face-mask',
                children: [],
            },
            {
                text:     'Heading',
                to:       '/content/heading',
                icon:     'mdi:format-header-1',
                children: [],
            },
        ],
    },
    {
        text:     'Components',
        children: [
            {
                text:     'Badge',
                to:       '/components/badge',
                icon:     'mdi:badge-account-outline',
                children: [],
            },
            {
                text:     'Button',
                to:       '/components/button',
                icon:     'mdi:gesture-tap-button',
                children: [],
            },
            {
                text:     'List Group',
                to:       '/components/list-group',
                icon:     'mdi:format-list-bulleted',
                children: [],
            },
            {
                text:     'Loading',
                to:       '/components/loading',
                icon:     'line-md:loading-twotone-loop',
                children: [],
            },
            {
                text:     'Stats',
                to:       '/components/stats',
                icon:     'mdi:chart-bar',
                children: [],
            },
            {
                text:     'Swap',
                to:       '/components/swap',
                icon:     'mdi:swap-horizontal',
                children: [],
            },
        ],
    },
    {
        text:     'Navigations',
        children: [
            {
                text:     'Menu',
                to:       '/navigations/menu',
                icon:     'mdi:menu',
                children: [],
            },
            {
                text:     'Navbar',
                to:       '/navigations/navbar',
                icon:     'mdi:view-sequential',
                children: [],
            },
            {
                text:     'Pagination',
                to:       '/navigations/pagination',
                icon:     'carbon:insert-page',
                badge:    unreleasedBadge,
                children: [],
            },
        ],
    },
    {
        text:     'Overlays',
        children: [
            {
                text:     'Modal',
                to:       '/overlays/modal',
                icon:     'mdi-window-maximize',
                children: [],
            },
            {
                text:     'Popover',
                to:       '/overlays/popover',
                icon:     'mdi:tooltip-outline',
                children: [],
            },
            {
                text:     'Tooltip',
                to:       '/overlays/tooltip',
                icon:     'mdi:tooltip-text',
                children: [],
            },
        ],
    },
    {
        text:     'Forms',
        children: [
            {
                text:     'Checkbox',
                to:       '/forms/checkbox',
                icon:     'mdi:checkbox-marked',
                children: [],
            },
            {
                text:     'Input Text',
                to:       '/forms/input-text',
                icon:     'mdi:form-textbox',
                children: [],
            },
            {
                text:     'Join',
                to:       '/forms/join',
                icon:     'mdi:account-plus',
                children: [],
            },
            {
                text:     'Select',
                to:       '/forms/select',
                icon:     'mdi:chevron-down-box',
                children: [],
            },
            {
                text:     'Textarea',
                to:       '/forms/textarea',
                icon:     'mdi:textarea',
                children: [],
            },
        ],
    },
    {
        text:     'Tables',
        children: [
            {
                text:     'Table',
                to:       '/tables/table',
                icon:     'mdi:table',
                badge:    unreleasedBadge,
                children: [],
            },
        ],
    },
    {
        text:     'Extra',
        children: [
            {
                text:     'Build Size Visualizer',
                to:       '/extra/build-size-visualizer',
                icon:     'mdi:chart-pie',
                children: [],
            },
        ],
    },
]);

onClickOutside(
    sidebarElement,
    () => {
        if (isPageSizeSmallerThanSm.value) {
            isCollapsed.value = true;
        }
    },
    { ignore: ['.flyonui-vue-navbar-collapse'] },
);
</script>

<style scoped lang="css">
@reference "tailwindcss";

.sidebar-mobile {
    position: fixed;
    width: 250px;
    overflow-x: hidden;
    transition: 0.5s;
    z-index: 1;
    background-color: var(--color-base-100);

    /* due to the search input becoming an icon that is higher than the input */
    @apply top-20;
}
</style>
