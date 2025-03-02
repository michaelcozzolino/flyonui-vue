<template>
    <FoMenu>
        <FoMenuItem v-for="item in items"
                    :key="item.id"
                    :item="item"
        />
    </FoMenu>
</template>

<script setup lang="ts">
import { FoMenu, FoMenuItem, type Identifiable, type MenuItem } from 'flyonui-vue';
import { ref }                                                  from 'vue';

const items = ref<(MenuItem & Identifiable)[] >([
    {
        id:   1,
        text: 'Home',
        to:   '#',
    },
    {
        id:   2,
        text: 'Account',
        to:   '#',
    },
    {
        id:   3,
        text: 'Notifications',
        to:   '#',
    },
]);
</script>
