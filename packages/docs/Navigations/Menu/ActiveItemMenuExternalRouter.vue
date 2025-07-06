<template>
    <FoMenu>
        <FoMenuItem v-for="item in items"
                    :key="item.id"
                    :item="item"
                    :navigation="{ navigate: (to: string) => router.go(to), activePath: router.route.path }"
        />
    </FoMenu>
</template>

<script setup lang="ts">
import type { Id, MenuItem }  from 'flyonui-vue';
import { FoMenu, FoMenuItem } from 'flyonui-vue';
import { useRouter }          from 'vitepress';
import { ref }                from 'vue';

const router = useRouter();

const items = ref<(MenuItem & Id)[]>([
    {
        id:   1,
        icon: 'tabler:home',
        text: 'Home',
        to:   '/',
    },
    {
        id:   2,
        icon: 'mdi:menu',
        text: 'Menu',
        to:   '/navigations/menu',
    },
    {
        id:   3,
        icon: 'mdi:gesture-tap-button',
        text: 'Button',
        to:   '/components/button',
    },
]);
</script>
