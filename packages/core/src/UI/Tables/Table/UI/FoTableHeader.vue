<template>
    <th :colspan="colspan"
        :rowspan="rowspan"
    >
        <slot />
    </th>
</template>

<script setup lang="ts">
import type { WithDefaultSlot } from '@/Types';
import type { TableCellProps }  from '@/UI/Tables';

defineProps<TableCellProps>();

defineSlots<WithDefaultSlot>();
</script>
