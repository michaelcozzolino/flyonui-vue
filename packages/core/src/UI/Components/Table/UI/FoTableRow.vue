<template>
    <tr :class="isHoverable && 'row-hover'">
        <slot>
            {{ useRequiredSlotMessage('FoTableRow') }}
        </slot>
    </tr>
</template>

<script setup lang="ts">
import type { WithRequiredDefaultSlot } from '@/Types';
import type { TableRowProps }           from '@/UI/Components';
import { useRequiredSlotMessage }       from '@/Lib/Utils/Internal';

defineProps<TableRowProps>();

defineSlots<WithRequiredDefaultSlot>();
</script>
