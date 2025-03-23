<template>
    <FoListGroup class="w-96">
        <FoListGroupItem v-for="item in items"
                         :key="item.id"
        >
            <FoIcon size="large"
                    :icon="item.icon"
            />

            {{ item.text }}
        </FoListGroupItem>
    </FoListGroup>
</template>

<script setup lang="ts">
import type { Identifiable }                    from 'flyonui-vue';
import { FoIcon, FoListGroup, FoListGroupItem } from 'flyonui-vue';
import { ref }                                  from 'vue';

const items = ref<(Identifiable & { text: string; icon: string })[]>([
    {
        id:   1,
        text: 'Recent posts',
        icon: 'tabler:user',
    },
    {
        id:   2,
        text: 'Upcoming events',
        icon: 'tabler:calendar-event',
    },
    {
        id:   3,
        text: 'Notifications',
        icon: 'tabler:message',
    },
]);
</script>
