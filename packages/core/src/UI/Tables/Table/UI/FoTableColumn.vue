<template>
    <td :colspan="colspan"
        :rowspan="rowspan"
    >
        <slot />
    </td>
</template>

<script setup lang="ts">
import type { WithDefaultSlot } from '@/Types';
import type { TableCellProps }  from '@/UI/Tables';

defineProps<TableCellProps>();

defineSlots<WithDefaultSlot>();
</script>
