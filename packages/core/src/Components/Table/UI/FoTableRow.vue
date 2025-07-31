<template>
    <tr :class="isHoverable && 'row-hover'">
        <slot>
            {{ useRequiredSlotMessage('FoTableRow') }}
        </slot>
    </tr>
</template>

<script setup lang="ts">
import type { TableRowProps }     from '@/Components/Table';
import type { VNode }             from 'vue';
import { useRequiredSlotMessage } from '@/Shared/Utils/Internal';

defineProps<TableRowProps>();

defineSlots<{
    default: () => VNode[];
}>();
</script>
