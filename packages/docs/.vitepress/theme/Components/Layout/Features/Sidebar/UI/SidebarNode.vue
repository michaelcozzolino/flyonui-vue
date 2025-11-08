<template>
    <FoMenuItem :item="item"
                :navigation="{ navigate: (to: string) => router.go(to), activePath: router.route.path }"
                @click:item="collapseSidebar()"
    >
        <template v-if="item.badge !== undefined"
                  #append
        >
            <FoBadge :color="item.badge.color"
                     preset="dash"
                     size="small"
                     shape="pilled"
            >
                {{ item.badge.text }}
            </FoBadge>
        </template>

        <FoMenuParentTitle v-if="isCollapsed === false && item.to === undefined"
                           class="font-bold! text-primary"
        >
            {{ item.text }}
        </FoMenuParentTitle>

        <FoMenu v-if="item.children.length"
                :hide-text="isCollapsed"
        >
            <SidebarNode v-for="childItem in item.children"
                         :key="childItem.text"
                         :item="childItem"
                         :is-collapsed="isCollapsed"
                         :title="childItem.text"
            />
        </FoMenu>
    </FoMenuItem>
</template>

<script setup lang="ts">
import type { SidebarItem } from '@/.vitepress/theme/Components/Layout/Features/Sidebar/Types/Sidebar';
import {
    useLayoutStore,
}                                                         from '@/.vitepress/theme/Components/Layout/Lib/UseLayoutStore';
import { FoBadge, FoMenu, FoMenuItem, FoMenuParentTitle } from 'flyonui-vue';
import { storeToRefs }                                    from 'pinia';
import { useRouter }                                      from 'vitepress';

interface Props {
    item: SidebarItem;
}

defineProps<Props>();

const router = useRouter();

const { isSidebarCollapsed: isCollapsed, isPageSizeSmallerThanSm } = storeToRefs(useLayoutStore());

function collapseSidebar(): void {
    if (isPageSizeSmallerThanSm.value) {
        isCollapsed.value = true;
    }
}
</script>
