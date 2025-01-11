<template>
    <StatList :stats="stats" />
</template>

<script setup lang="ts">
import type { Stat } from '@/Components/StatList/Types/StatList';
import StatList      from '@/Components/StatList/UI/StatList.vue';
import { ref }       from 'vue';

const stats = ref<Stat[]>([
    {
        id:          1,
        title:       'Total Emails Sent',
        value:       76250,
        description: '18% more than last month',
    },
]);
</script>
