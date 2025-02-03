<template>
    <FoListGroup>
        <FoListGroupItem v-for="item in items"
                         :key="item.id"
                         class="justify-between"
        >
            {{ item.text }}

            <FoBadge color="primary"
                     shape="pilled"
            >
                {{ item.info }}
            </FoBadge>
        </FoListGroupItem>
    </FoListGroup>
</template>

<script setup lang="ts">
import { FoBadge, FoListGroup, FoListGroupItem } from 'flyonui-vue';
import { ref }                                   from 'vue';

const items = ref<{ id: number; text: string; info: string }[]>([
    {
        id:   1,
        text: 'Recent posts',
        info: 'New',
    },
    {
        id:   2,
        text: 'Upcoming events',
        info: '2',
    },
    {
        id:   3,
        text: 'Notifications',
        info: '+99',
    },
]);
</script>
