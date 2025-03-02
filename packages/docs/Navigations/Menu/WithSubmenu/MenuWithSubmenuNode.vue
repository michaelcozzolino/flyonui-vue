<template>
    <FoMenuItem :item="item">
        <template v-if="item.to === undefined">
            <FoMenuParentTitle>
                {{ item.text }}
            </FoMenuParentTitle>
        </template>

        <FoMenu v-if="item.children.length">
            <MenuWithSubmenuNode v-for="childItem in item.children"
                                 :key="childItem.id"
                                 :item="childItem"
            />
        </FoMenu>
    </FoMenuItem>
</template>

<script setup lang="ts">
import type { Item }                             from './Types/Item';
import { FoMenu, FoMenuItem, FoMenuParentTitle } from 'flyonui-vue';

interface Props {
    item: Item;
}

defineProps<Props>();
</script>
