<template>
    <FoMenu :items="items" />
</template>

<script setup lang="ts">
import type { MenuItem } from '@/Components/Menu/Types/Menu';
import FoMenu            from '@/Components/Menu/UI/FoMenu.vue';
import { ref }           from 'vue';

const items = ref<MenuItem[]>([
    {
        text: { value: 'Home' },
        to:   '#',
    },
    {
        text: { value: 'Account' },
        to:   '#',
    },
    {
        text: { value: 'Notifications' },
        to:   '#',
    },
]);
</script>
