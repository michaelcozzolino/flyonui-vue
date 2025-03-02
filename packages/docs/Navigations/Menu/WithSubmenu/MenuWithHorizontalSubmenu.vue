<template>
    <FoMenu orientation="horizontal">
        <MenuWithSubmenuNode v-for="item in items"
                             :key="item.id"
                             :item="item"
        />
    </FoMenu>
</template>

<script setup lang="ts">
import type { Item }       from './Types/Item';
import { FoMenu }          from 'flyonui-vue';
import { ref }             from 'vue';
import MenuWithSubmenuNode from './MenuWithSubmenuNode.vue';

const items = ref<Item[]>([
    {
        id:       1,
        icon:     'tabler:home',
        text:     'Home',
        to:       '#',
        children: [],
    },
    {
        id:       2,
        icon:     'tabler:apps',
        text:     'Apps',
        to:       '#',
        children: [
            {
                id:       3,
                icon:     'tabler:message',
                text:     'Chat',
                to:       '#',
                children: [],
            },
            {
                id:       4,
                icon:     'tabler:calendar',
                text:     'Calendar',
                to:       '#',
                children: [],
            },
            {
                id:       5,
                icon:     'tabler:book',
                text:     'Academy',
                to:       '#',
                children: [],
            },
        ],
    },
    {
        id:       6,
        icon:     'tabler:settings',
        text:     'Settings',
        to:       '#',
        children: [],
    },
]);
</script>
