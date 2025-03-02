<template>
    <FoMenu orientation="horizontal">
        <template v-for="item in items"
                  :key="item.id"
        >
            <MenuWithSubmenuNode :item="item" />
        </template>
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
        text:     'Services',
        children: [
            {
                id:       2,
                text:     'Design Solutions',
                to:       '#',
                children: [],
            },
            {
                id:       3,
                text:     'Software Development',
                to:       '#',
                children: [],
            },
            {
                id:       4,
                text:     'Web Hosting',
                to:       '#',
                children: [],
            },
            {
                id:       5,
                text:     'Domain Registration',
                to:       '#',
                children: [],
            },
        ],
    },
    {
        id:       6,
        text:     'Corporate Solutions',
        children: [
            {
                id:       7,
                text:     'CRM',
                to:       '#',
                children: [],
            },
            {
                id:       8,
                text:     'Management Solutions',
                to:       '#',
                children: [],
            },
            {
                id:       9,
                text:     'Security Services',
                to:       '#',
                children: [],
            },
            {
                id:       10,
                text:     'Consulting Services',
                to:       '#',
                children: [],
            },
        ],
    },
    {
        id:       11,
        text:     'Product Offerings',
        children: [
            {
                id:       12,
                text:     'UI Kits',
                to:       '#',
                children: [],
            },
            {
                id:       13,
                text:     'Component Library',
                to:       '#',
                children: [],
            },
            {
                id:       14,
                text:     'Wordpress Plugins',
                to:       '#',
                children: [],
            },
            {
                id:       15,
                text:     'Open Source Projects',
                to:       '#',
                children: [
                    {
                        id:       16,
                        text:     'Authentication System',
                        to:       '#',
                        children: [],
                    },
                    {
                        id:       17,
                        text:     'FlyonUI Theme',
                        to:       '#',
                        children: [],
                    },
                ],
            },
        ],
    },
    {
        id:       18,
        text:     'Company',
        children: [
            {
                id:       19,
                text:     'About us',
                to:       '#',
                children: [],
            },
            {
                id:       20,
                text:     'Contact us',
                to:       '#',
                children: [],
            },
            {
                id:       21,
                text:     'Privacy Policy',
                to:       '#',
                children: [],
            },
            {
                id:       22,
                text:     'Careers',
                to:       '#',
                children: [],
            },
        ],
    },
]);
</script>
