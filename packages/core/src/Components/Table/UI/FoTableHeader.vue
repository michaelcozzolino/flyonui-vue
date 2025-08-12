<template>
    <th :colspan="colspan">
        <slot />
    </th>
</template>

<script setup lang="ts">
import type { WithDefaultSlot } from '@/Shared/Utils/Types/Slots.ts';

// todo: add rowspan too and also for td
interface Props {
    /** The number of columns for which a cell should span over */
    colspan?: number;
}

defineProps<Props>();

defineSlots<WithDefaultSlot>();
</script>
