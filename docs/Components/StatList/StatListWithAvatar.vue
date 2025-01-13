<template>
    <FoStatList :stats="stats">
        <template #image-1>
            <!--            todo: avatar component -->
            <div class="avatar">
                <div class="size-12 rounded-full">
                    <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png"
                         alt="User Avatar"
                    >
                </div>
            </div>
        </template>
    </FoStatList>
</template>

<script setup lang="ts">
import type { Stat } from '@/Components/StatList/Types/StatList';
import FoStatList    from '@/Components/StatList/UI/FoStatList.vue';
import { ref }       from 'vue';

const stats = ref<Stat[]>([
    {
        id:          1,
        title:       'Total page views',
        value:       89400,
        description: '21% ↗︎ than last month',
    },
]);
</script>
