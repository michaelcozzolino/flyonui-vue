<template>
    <ClientOnly>
        <aside id="flyonui-vue-docs-sidebar"
               ref="sidebar"
               class="sticky top-16 h-[calc(100vh-4.25rem)] shrink-0 overflow-x-hidden overflow-y-auto"
               :class="[
                   isCollapsed ? 'w-24' : 'w-64',
                   isPageSizeSmallerThanSm && 'fixed! z-1 overflow-x-hidden top-20 transition-[width]',
                   showMenu && 'bg-base-100'
               ]"
               tabindex="-1"
        >
            <div class="px-0! vp-raw">
                <div class="sticky top-0 z-10 flex items-center justify-center gap-1 p-2 border-b border-base-content/10 bg-base-100"
                     :class="isCollapsed && 'justify-center'"
                >
                    <FoButton :icon="isCollapsed ? 'bi:chevron-double-right' : 'bi:chevron-double-left'"
                              color="neutral"
                              preset="text"
                              size="extraSmall"
                              @click="isCollapsed = !isCollapsed; expandAll();"
                    />

                    <template v-if="isCollapsed === false">
                        <FoButton icon="tabler:current-location"
                                  color="neutral"
                                  preset="text"
                                  size="extraSmall"
                                  title="Scroll to the current page"
                                  @click="expandActiveItemParent(); scrollToActiveItem()"
                        />

                        <FoButton icon="bi:chevron-expand"
                                  color="neutral"
                                  preset="text"
                                  size="extraSmall"
                                  title="Expand all"
                                  @click="expandAll()"
                        />

                        <FoButton icon="bi:chevron-contract"
                                  color="neutral"
                                  preset="text"
                                  size="extraSmall"
                                  title="Collapse all"
                                  @click="collapseAll()"
                        />
                    </template>
                </div>

                <FoMenu v-show="showMenu"
                        class="vp-raw pl-0!"
                        size="small"
                        :hide-text="isCollapsed"
                >
                    <SidebarNode v-for="(item, index) in items"
                                 :key="item.text"
                                 v-model:active-node-id="activeItemId"
                                 v-model:item="items[index] as ParentSidebarItem"
                    />
                </FoMenu>
            </div>
        </aside>
    </ClientOnly>
</template>

<script setup lang="ts">
import type {
    ParentSidebarItem,
    SidebarItem,
}                          from '@/.vitepress/theme/Components/Layout/Features/Sidebar/Types/Sidebar';
import { useSidebarItems }                   from '@/.vitepress/theme/Components/Layout/Features/Sidebar/Lib/UseSidebarItems';
import SidebarNode                           from '@/.vitepress/theme/Components/Layout/Features/Sidebar/UI/SidebarNode.vue';
import { useLayoutStore }                    from '@/.vitepress/theme/Components/Layout/Lib/UseLayoutStore';
import { onClickOutside, useArrayFindIndex } from '@vueuse/core';
import { FoButton, FoMenu }                  from 'flyonui-vue';
import { storeToRefs }                       from 'pinia';
import {
    computed,
    nextTick,
    ref,
    useTemplateRef,
    watch,
}                           from 'vue';

const sidebarElement = useTemplateRef('sidebar');

const { isSidebarCollapsed: isCollapsed, isPageSizeSmallerThanSm } = storeToRefs(useLayoutStore());

const items = useSidebarItems();

const showMenu = computed((): boolean => isPageSizeSmallerThanSm.value === false || isCollapsed.value === false);

// The active items can only be the children by implementation
const activeItemId = ref<string | null>(null);

const activeItemParentIndex = useArrayFindIndex(items, (parentItem: ParentSidebarItem): boolean => {
    return parentItem.children.findIndex(
        (childItem: SidebarItem): boolean => childItem.text === activeItemId.value,
    ) !== -1;
});

onClickOutside(
    sidebarElement,
    () => {
        if (isPageSizeSmallerThanSm.value) {
            isCollapsed.value = true;
        }
    },
    { ignore: ['.flyonui-vue-navbar-collapse'] },
);

watch(activeItemId, scrollToActiveItem, { immediate: true });

async function scrollToActiveItem(): Promise<void> {
    // We should wait for the active item id to be populated after its component has been mounted
    await nextTick();

    if (sidebarElement.value === null) {
        throw new Error(`Cannot scroll to the active item: the sidebar element does not exist.`);
    }

    if (activeItemId.value === null) {
        throw new Error(`Cannot scroll to the active item: the item element does not exist.`);
    }

    const activeItemElement = document.getElementById(activeItemId.value);

    if (activeItemElement === null) {
        throw new Error(`Cannot scroll to the active item: the item element does not exist.`);
    }

    const activeItemRect = activeItemElement.getBoundingClientRect();
    const sidebarRect    = sidebarElement.value.getBoundingClientRect();

    const scrollTop = sidebarElement.value.scrollTop
        + activeItemRect.top
        - sidebarRect.top
        - sidebarElement.value.clientHeight / 2
        + activeItemRect.height / 2;

    sidebarElement.value.scrollTo({
        top:      scrollTop,
        behavior: 'smooth',
    });
}

function expandActiveItemParent(): void {
    const activeItemParent = items.value[activeItemParentIndex.value] ?? null;

    if (activeItemParent === null) {
        throw new Error(`Cannot expand active item parent: the parent item element does not exist.`);
    }

    activeItemParent.isCollapsed = false;
}

function collapseAll(): void {
    toggleCollapse(true);
}

function expandAll(): void {
    toggleCollapse(false);
}

function toggleCollapse(isCollapsed: boolean): void {
    for (const item of items.value) {
        item.isCollapsed = isCollapsed;
    }
}
</script>
