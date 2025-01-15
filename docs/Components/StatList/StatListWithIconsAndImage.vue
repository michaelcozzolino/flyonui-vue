<template>
    <FoStatList :stats="stats">
        <template #image-1>
            <FoIcon class="size-8"
                    icon="tabler:world"
            />
        </template>

        <template #image-2>
            <FoIcon class="size-8"
                    icon="tabler:users-group"
            />
        </template>

        <template #image-3>
            <!--            todo: avatar component -->
            <div class="avatar">
                <div class="size-12 rounded-full">
                    <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-2.png"
                         alt="User Avatar"
                    >
                </div>
            </div>
        </template>
    </FoStatList>
</template>

<script setup lang="ts">
import type { Stat } from '@/Components/StatList/Types/StatList';
import FoIcon        from '@/Components/Icon/UI/FoIcon.vue';
import FoStatList    from '@/Components/StatList/UI/FoStatList.vue';
import { ref }       from 'vue';

const stats = ref<Stat[]>([
    {
        id:          1,
        title:       'Website Traffic',
        value:       '32K',
        description: '5% ↗︎ than last week',
    },
    {
        id:          2,
        title:       'New Signups',
        value:       '1.2K',
        description: '12% increase this month',
    },
    {
        id:          3,
        title:       'Customer Retention',
        value:       '95%',
        description: 'Steady over last quarter',
        classes:     {
            value: 'text-success',
        },
        valueAsTitle: true,
    },
]);
</script>
