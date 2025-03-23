<template>
    <FoListGroup class="w-96"
                 is-flushed
    >
        <FoListGroupItem v-for="item in items"
                         :key="item.id"
        >
            {{ item.text }}
        </FoListGroupItem>
    </FoListGroup>
</template>

<script setup lang="ts">
import type { Identifiable }            from 'flyonui-vue';
import { FoListGroup, FoListGroupItem } from 'flyonui-vue';
import { ref }                          from 'vue';

const items = ref<(Identifiable & { text: string })[]>([
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
