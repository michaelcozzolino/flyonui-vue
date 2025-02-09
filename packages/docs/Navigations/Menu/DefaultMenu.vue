<template>
    <FoMenu :items="items" />
</template>

<script setup lang="ts">
import { FoMenu, type MenuItem } from 'flyonui-vue';
import { ref }                   from 'vue';

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
