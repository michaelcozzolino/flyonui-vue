<template>
    <FoListGroup is-flushed>
        <FoListGroupItem v-for="item in items"
                         :key="item.id"
        >
            {{ item.text }}
        </FoListGroupItem>
    </FoListGroup>
</template>

<script setup lang="ts">
import { FoListGroup, FoListGroupItem } from 'flyonui-vue';
import { ref }                          from 'vue';

const items = ref<{ id: number; text: string }[]>([
    {
        id:   1,
        text: 'Recent posts',
    },
    {
        id:   2,
        text: 'Upcoming events',
    },
    {
        id:   3,
        text: 'Notifications',
    },
]);
</script>
