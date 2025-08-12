<template>
    <FoStats>
        <FoStat v-for="stat in stats"
                :key="stat.id"
                class="place-items-center"
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
        title:       'Total Sales',
        value:       '52K',
        description: 'From Jan 1st to Feb 1st',
    },
    {
        id:          2,
        title:       'Active Customers',
        value:       '8,350',
        description: '↗︎ 150 (1.8%)',
    },
    {
        id:          3,
        title:       'New Signups',
        value:       '2,400',
        description: '↘︎ 180 (7%)',
    },
]);
</script>
