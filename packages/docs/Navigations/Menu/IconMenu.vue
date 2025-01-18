<template>
    <FoMenu :items="items" />
</template>

<script setup lang="ts">
import type { MenuItem } from 'flyonui-vue/dist/Components/Menu/Types/Menu';
import { FoMenu }        from 'flyonui-vue';
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
        icon: 'tabler:message',
        text: { value: 'Notifications' },
        to:   '#',
    },
]);
</script>
