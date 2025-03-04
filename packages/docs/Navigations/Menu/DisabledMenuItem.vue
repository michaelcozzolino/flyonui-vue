<template>
    <FoMenu>
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
        icon: 'tabler:settings',
        text: 'Settings',
        to:   '#',
    },
    {
        id:         3,
        icon:       'tabler:lock',
        text:       'Security',
        to:         '#',
        isDisabled: true,
    },
]);
</script>
