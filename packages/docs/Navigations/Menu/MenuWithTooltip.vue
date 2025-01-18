<template>
    <FoMenu :items="items" />
</template>

<script setup lang="ts">
import type { MenuItem } from 'flyonui-vue';
import { FoMenu }        from 'flyonui-vue';
import { ref }           from 'vue';

const items = ref<MenuItem[]>([
    {
        icon: 'tabler:home',
        text: { value: 'Home', asTooltip: true },
        to:   '#',
    },
    {
        icon: 'tabler:user',
        text: { value: 'Account', asTooltip: true },
        to:   '#',
    },
    {
        icon: 'tabler:message',
        text: { value: 'Notifications', asTooltip: true },
        to:   '#',
    },
]);
</script>
