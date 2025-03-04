<template>
    <FoMenu>
        <FoMenuItem v-for="item in items"
                    :key="item.id"
                    :item="item"
        >
            <FoMenuParentTitle v-if="item.to === undefined">
                {{ item.text }}
            </FoMenuParentTitle>

            <FoMenu v-if="item.children.length">
                <FoMenuItem v-for="child in item.children"
                            :key="child.id"
                            :item="child"
                />
            </FoMenu>
        </FoMenuItem>
    </FoMenu>
</template>

<script setup lang="ts">
import { FoMenu, FoMenuItem, FoMenuParentTitle, type Id, type MenuItem } from 'flyonui-vue';
import { ref }                                                           from 'vue';

interface Item extends Id, MenuItem {
    children: Item[];
}

const items = ref<Item[]>([
    {
        id:       0,
        text:     'Apps',
        children: [
            {
                id:       1,
                icon:     'tabler:message',
                text:     'Chat',
                to:       '#',
                children: [],
            },
            {
                id:       2,
                icon:     'tabler:calendar',
                text:     'Calendar',
                to:       '#',
                children: [],
            },
            {
                id:       3,
                icon:     'tabler:book',
                text:     'Academy',
                to:       '#',
                children: [],
            },
        ],
    },
]);
</script>
