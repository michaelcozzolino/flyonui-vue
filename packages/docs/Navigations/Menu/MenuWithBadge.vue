<template>
    <FoMenu orientation="horizontal">
        <FoMenuItem v-for="item in items"
                    :key="item.id"
                    :item="item"
        >
            <template #append>
                <FoBadge v-if="item.info.text !== null"
                         :color="item.info.color"
                >
                    {{ item.info.text }}
                </FoBadge>

                <FoDotStyleBadge v-else
                                 :color="item.info.color"
                />
            </template>
        </FoMenuItem>
    </FoMenu>
</template>

<script setup lang="ts">
import { type BadgeProps, FoBadge, FoDotStyleBadge, FoMenu, FoMenuItem, type Identifiable, type MenuItem } from 'flyonui-vue';
import { ref }                                                                                             from 'vue';

const items = ref<(MenuItem & Identifiable & { info: BadgeProps & { text: string | null } })[]>([
    {
        id:   1,
        icon: 'tabler:mail',
        text: 'Inbox',
        to:   '#',
        info: { color: 'primary', text: '1K+' },
    },
    {
        id:   2,
        icon: 'tabler:info-circle',
        text: 'Updates',
        to:   '#',
        info: { color: 'warning', text: 'NEW' },
    },
    {
        id:   3,
        text: 'Status',
        to:   '#',
        info: { color: 'success', text: null },
    },
]);
</script>
