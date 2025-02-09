<template>
    <FoStatList :stats="stats" />
</template>

<script setup lang="ts">
import { FoStatList, type Stat } from 'flyonui-vue';
import { ref }                   from 'vue';

const stats = ref<Stat[]>([
    {
        id:          1,
        title:       'Total Sales',
        value:       '52K',
        description: 'From Jan 1st to Feb 1st',
        classes:     {
            stat: 'place-items-center',
        },
    },
    {
        id:          2,
        title:       'Active Customers',
        value:       '8,350',
        description: '↗︎ 150 (1.8%)',
        classes:     {
            stat: 'place-items-center',
        },
    },
    {
        id:          3,
        title:       'New Signups',
        value:       '2,400',
        description: '↘︎ 180 (7%)',
        classes:     {
            stat: 'place-items-center',
        },
    },
]);
</script>
