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
import { useSidebarItems } from '@/.vitepress/theme/Components/Layout/Features/Sidebar/Lib/UseSidebarItems';
import SidebarNode         from '@/.vitepress/theme/Components/Layout/Features/Sidebar/UI/SidebarNode.vue';
import { useLayoutStore }  from '@/.vitepress/theme/Components/Layout/Lib/UseLayoutStore.ts';
import { onClickOutside }  from '@vueuse/core';
import { FoMenu }          from 'flyonui-vue';
import { storeToRefs }     from 'pinia';
import { useTemplateRef }  from 'vue';

const sidebarElement = useTemplateRef<HTMLElement>('sidebar');

const { isSidebarCollapsed: isCollapsed, isPageSizeSmallerThanSm } = storeToRefs(useLayoutStore());

const items = useSidebarItems();

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
