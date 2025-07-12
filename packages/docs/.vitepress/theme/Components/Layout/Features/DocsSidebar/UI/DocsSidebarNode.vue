<template>
    <FoMenuItem :item="item"
                :navigation="navigation"
    >
        <FoMenu v-if="item.children.length">
            <DocsSidebarNode v-for="childItem in item.children"
                             :key="childItem.id"
                             :item="childItem"
                             :navigation="navigation"
            />
        </FoMenu>
    </FoMenuItem>
</template>

<script setup lang="ts">
import type { DocsSidebarItem } from '@/.vitepress/theme/Components/Layout/Features/DocsSidebar/Types/DocsSidebar.ts';
import type { Navigation }      from 'flyonui-vue';
import { FoMenu, FoMenuItem }   from 'flyonui-vue';

interface Props {
    item:       DocsSidebarItem;
    navigation: Navigation;
    isParent?:  boolean;
}

defineProps<Props>();
</script>
