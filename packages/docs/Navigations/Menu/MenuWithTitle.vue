<template>
    <FoMenu>
        <FoMenuTitle>
            Apps
        </FoMenuTitle>

        <FoMenuItem v-for="item in items"
                    :key="item.id"
                    :item="item"
        />
    </FoMenu>
</template>

<script setup lang="ts">
import { FoMenu, FoMenuItem, FoMenuTitle, type Id, type MenuItem } from 'flyonui-vue';
import { ref }                                                     from 'vue';

const items = ref<(MenuItem & Id)[]>([
    {
        id:   1,
        icon: 'tabler:message',
        text: 'Chat',
        to:   '#',
    },
    {
        id:   2,
        icon: 'tabler:calendar',
        text: 'Calendar',
        to:   '#',
    },
    {
        id:   3,
        icon: 'tabler:book',
        text: 'Academy',
        to:   '#',
    },
]);
</script>
