<template>
    <FoMenuItem :item="item"
                :navigation="{ navigate: (to: string) => router.go(to), activePath: router.route.path }"
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

        <template v-if="isCollapsed === false && item.to === undefined">
            <FoMenuParentTitle class="font-bold! text-primary">
                {{ item.text }}
            </FoMenuParentTitle>
        </template>

        <FoMenu v-if="item.children.length"
                :hide-text="isCollapsed"
        >
            <SidebarNode v-for="childItem in item.children"
                         :key="childItem.id"
                         :item="childItem"
                         :is-collapsed="isCollapsed"
                         :title="childItem.text"
            />
        </FoMenu>
    </FoMenuItem>
</template>

<script setup lang="ts">
import type { SidebarItem }                               from '@/.vitepress/theme/Components/Layout/Features/Sidebar/Types/Sidebar.ts';
import { FoBadge, FoMenu, FoMenuItem, FoMenuParentTitle } from 'flyonui-vue';
import { useRouter }                                      from 'vitepress';

interface Props {
    item:        SidebarItem;
    isCollapsed: boolean;
}

defineProps<Props>();

const router = useRouter();
</script>
