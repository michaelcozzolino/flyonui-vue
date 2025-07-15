<template>
    <aside ref="sidebar"
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
                             :key="item.id"
                             :item="item"
                />
            </FoMenu>
        </div>
    </aside>
</template>

<script setup lang="ts">
import type { SidebarItem }    from '@/.vitepress/theme/Components/Layout/Features/Sidebar/Types/Sidebar.ts';
import SidebarNode             from '@/.vitepress/theme/Components/Layout/Features/Sidebar/UI/SidebarNode.vue';
import { useLayoutStore }      from '@/.vitepress/theme/Components/Layout/Lib/UseLayoutStore.ts';
import { onClickOutside }      from '@vueuse/core';
import { FoMenu }              from 'flyonui-vue';
import { storeToRefs }         from 'pinia';
import { ref, useTemplateRef } from 'vue';

const sidebarElement = useTemplateRef<HTMLElement>('sidebar');

const { isSidebarCollapsed: isCollapsed, isPageSizeSmallerThanSm } = storeToRefs(useLayoutStore());

const items = ref<SidebarItem[]>([
    {
        id:       1,
        text:     'Getting Started',
        children: [
            {
                id:       2,
                text:     'Quick Start',
                to:       '/quick-start',
                icon:     'tabler:rocket',
                children: [],
            },
        ],
    },
    {
        id:       3,
        text:     'Vue Components',
        children: [
            {
                id:       4,
                text:     'Icons',
                to:       '/customisation/icons',
                icon:     'uil:icons',
                children: [],
            },
            {
                id:       5,
                text:     'Link',
                to:       '/content/link',
                icon:     'ic:round-link',
                children: [],
            },
            {
                id:    6,
                text:  'Keyboard',
                to:    '/content/keyboard',
                icon:  'mdi:keyboard-outline',
                badge: {
                    color: 'warning',
                    text:  'Unreleased',
                },
                children: [],
            },
            {
                id:       7,
                text:     'Mask',
                to:       '/content/mask',
                icon:     'mdi:face-mask',
                children: [],
            },
            {
                id:       8,
                text:     'Heading',
                to:       '/content/heading',
                icon:     'mdi:format-header-1',
                children: [],
            },
            {
                id:       9,
                text:     'Badge',
                to:       '/components/badge',
                icon:     'mdi:badge-account-outline',
                children: [],
            },
            {
                id:       10,
                text:     'Button',
                to:       '/components/button',
                icon:     'mdi:gesture-tap-button',
                children: [],
            },
            {
                id:       11,
                text:     'List Group',
                to:       '/components/list-group',
                icon:     'mdi:format-list-bulleted',
                children: [],
            },
            {
                id:       12,
                text:     'Loading',
                to:       '/components/loading',
                icon:     'line-md:loading-twotone-loop',
                children: [],
            },
            {
                id:       13,
                text:     'Stats',
                to:       '/components/stats',
                icon:     'mdi:chart-bar',
                children: [],
            },
            {
                id:       14,
                text:     'Swap',
                to:       '/components/swap',
                icon:     'mdi:swap-horizontal',
                children: [],
            },
            {
                id:       15,
                text:     'Menu',
                to:       '/navigations/menu',
                icon:     'mdi:menu',
                children: [],
            },
            {
                id:       16,
                text:     'Navbar',
                to:       '/navigations/navbar',
                icon:     'mdi:view-sequential',
                children: [],
            },
            {
                id:       17,
                text:     'Popover',
                to:       '/overlays/popover',
                icon:     'mdi:tooltip-outline',
                children: [],
            },
            {
                id:       18,
                text:     'Tooltip',
                to:       '/overlays/tooltip',
                icon:     'mdi:tooltip-text',
                children: [],
            },
            {
                id:       19,
                text:     'Checkbox',
                to:       '/forms/checkbox',
                icon:     'mdi:checkbox-marked',
                children: [],
            },
            {
                id:       20,
                text:     'Input Text',
                to:       '/forms/input-text',
                icon:     'mdi:form-textbox',
                children: [],
            },
            {
                id:       21,
                text:     'Join',
                to:       '/forms/join',
                icon:     'mdi:account-plus',
                children: [],
            },
            {
                id:       22,
                text:     'Select',
                to:       '/forms/select',
                icon:     'mdi:chevron-down-box',
                children: [],
            },
            {
                id:       23,
                text:     'Textarea',
                to:       '/forms/textarea',
                icon:     'mdi:textarea',
                children: [],
            },
        ],
    },
    {
        id:       24,
        text:     'Extra',
        children: [
            {
                id:       25,
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
    () => isCollapsed.value = true,
    { ignore: ['.flyonui-vue-navbar-collapse'] },
);
</script>

<style scoped lang="css">
@reference "tailwindcss";

.sidebar-mobile {
    height: 100%;
    width: 250px;
    position: fixed;
    z-index: 1;
    overflow-x: hidden;
    transition: 0.5s;

    /* due to the search input becoming an icon that is higher than the input */
    @apply top-20;
}
</style>
