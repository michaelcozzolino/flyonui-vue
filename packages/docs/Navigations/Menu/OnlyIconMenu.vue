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
        text: { value: 'Home', isHidden: true },
        to:   '#',
    },
    {
        icon: 'tabler:user',
        text: { value: 'Account', isHidden: true },
        to:   '#',
    },
    {
        icon: 'tabler:message',
        text: { value: 'Notifications', isHidden: true },
        to:   '#',
    },
]);
</script>
