<template>
    <FoMenu hide-text>
        <FoMenuItem v-for="item in items"
                    :key="item.id"
                    :item="item"
        />
    </FoMenu>
</template>

<script setup lang="ts">
import { FoMenu, FoMenuItem, type Id, type MenuItem } from 'flyonui-vue';
import { ref }                                        from 'vue';

const items = ref<(MenuItem & Id)[]>([
    {
        id:   1,
        icon: 'tabler:home',
        text: 'Home',
        to:   '#',
    },
    {
        id:   2,
        icon: 'tabler:user',
        text: 'Account',
        to:   '#',
    },
    {
        id:   3,
        icon: 'tabler:message',
        text: 'Notifications',
        to:   '#',
    },
]);
</script>
