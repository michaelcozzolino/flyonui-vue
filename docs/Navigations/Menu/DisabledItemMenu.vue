<template>
    <FoMenu :items="items" />
</template>

<script setup lang="ts">
import type { MenuItem } from '@/Components/Menu/Types/Menu';
import FoMenu            from '@/Components/Menu/UI/FoMenu.vue';
import { ref }           from 'vue';

const items = ref<MenuItem[]>([
    {
        icon: 'tabler:home',
        text: { value: 'Home' },
        to:   '#',
    },
    {
        icon: 'tabler:user',
        text: { value: 'Account' },
        to:   '#',
    },
    {
        icon:       'tabler:message',
        text:       { value: 'Notifications' },
        to:         '#',
        isDisabled: true,
    },
]);
</script>
