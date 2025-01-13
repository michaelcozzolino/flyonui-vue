<template>
    <FoStatList :stats="stats"
                orientation="vertical"
    />
</template>

<script setup lang="ts">
import type { Stat } from '@/Components/StatList/Types/StatList';
import FoStatList    from '@/Components/StatList/UI/FoStatList.vue';
import { ref }       from 'vue';

const stats = ref<Stat[]>([
    {
        id:          1,
        title:       'Total Invoices',
        value:       '5,780',
        description: 'From Jan 1st to Feb 1st',
    },
    {
        id:          2,
        title:       'Paid Invoices',
        value:       '4,320',
        description: '↗︎ 120 (3%)',
    },
    {
        id:          3,
        title:       'Pending Invoices',
        value:       '1,460',
        description: '↘︎ 80 (5%)',
    },
]);
</script>
