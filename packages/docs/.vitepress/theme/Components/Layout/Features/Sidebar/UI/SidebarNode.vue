<template>
    <FoMenuItem v-if="item.to !== undefined"
                :id="item.text"
                :item="item"
                :navigation="{ navigate: (to: string) => router.go(to), activePath: router.route.path }"
                @click:item="collapseSidebar()"
    >
        <template v-if="item.badge !== undefined"
                  #append
        >
            <FoBadge :color="item.badge.color"
                     preset="dash"
                     size="extraSmall"
                     shape="pilled"
            >
                {{ item.badge.text }}
            </FoBadge>
        </template>
    </FoMenuItem>

    <FoMenuItem v-else
                :item="item"
    >
        <FoButton v-if="isCollapsed === false"
                  class="flex w-full justify-between mx-2 font-bold"
                  color="primary"
                  preset="text"
                  @click="toggleCollapse()"
        >
            <span class="truncate">
                {{ item.text }}
            </span>

            <FoIcon :class="isItemCollapsed === false && 'rotate-180'"
                    class="shrink-0 transition-transform"
                    icon="tabler:chevron-down"
                    size="extraSmall"
            />
        </FoButton>

        <FoMenu v-show="isItemCollapsed === false"
                v-if="item.children.length"
                :hide-text="isCollapsed"
                size="small"
        >
            <SidebarNode v-for="childItem in item.children"
                         :key="childItem.text"
                         v-model:active-node-id="activeNodeId"
                         :item="childItem"
                         :title="childItem.text"
            />
        </FoMenu>
    </FoMenuItem>
</template>

<script setup lang="ts">
import type {
    ParentSidebarItem,
    SidebarItem,
}                         from '@/.vitepress/theme/Components/Layout/Features/Sidebar/Types/Sidebar';
import { useLayoutStore } from '@/.vitepress/theme/Components/Layout/Lib/UseLayoutStore';
import { syncRef }        from '@vueuse/core';
import {
    FoBadge,
    FoButton,
    FoIcon,
    FoMenu,
    FoMenuItem,
}                      from 'flyonui-vue';
import { storeToRefs } from 'pinia';
import { useRouter }   from 'vitepress';
import { computed }    from 'vue';

const item         = defineModel<ParentSidebarItem | SidebarItem>('item', { required: true });
const activeNodeId = defineModel<string | null>('activeNodeId', { required: true });

const router = useRouter();

const { isSidebarCollapsed: isCollapsed, isPageSizeSmallerThanSm } = storeToRefs(useLayoutStore());

const isItemActive    = computed((): boolean => item.value.to === router.route.path);
const isItemCollapsed = computed((): boolean => isParentSidebarItem(item.value) ? item.value.isCollapsed : false);

syncRef(isItemActive, activeNodeId, {
    direction: 'ltr',
    transform: {
        ltr: (left: boolean): string | null => {
            if (left) {
                return item.value.text;
            }

            return activeNodeId.value;
        },
    },
});

function collapseSidebar(): void {
    if (isPageSizeSmallerThanSm.value) {
        isCollapsed.value = true;
    }
}

function toggleCollapse(): void {
    if (isParentSidebarItem(item.value)) {
        item.value = { ...item.value, isCollapsed: !item.value.isCollapsed };
    }
}

function isParentSidebarItem(item: ParentSidebarItem | SidebarItem): item is ParentSidebarItem {
    return 'isCollapsed' in item;
}
</script>
