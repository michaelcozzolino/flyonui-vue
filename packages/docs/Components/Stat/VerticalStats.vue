<template>
    <FoStats orientation="vertical">
        <FoStat v-for="stat in stats"
                :key="stat.id"
        >
            <FoStatTitle>
                {{ stat.title }}
            </FoStatTitle>

            <FoStatValue>
                {{ stat.value }}
            </FoStatValue>

            <FoStatDescription>
                {{ stat.description }}
            </FoStatDescription>
        </FoStat>
    </FoStats>
</template>

<script setup lang="ts">
import type { Identifiable } from 'flyonui-vue';
import {
    FoStat,
    FoStatDescription,
    FoStats,
    FoStatTitle,
    FoStatValue,
}                            from 'flyonui-vue';
import { ref } from 'vue';

interface Stat extends Identifiable {
    title:       string;
    value:       string;
    description: string;
}

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
