<template>
    <tbody>
        <slot>
            {{ useRequiredSlotMessage('FoTableBody') }}
        </slot>
    </tbody>
</template>

<script setup lang="ts">
import type { WithRequiredDefaultSlot } from '@/Types';
import { useRequiredSlotMessage }       from '@/Lib/Utils/Internal';

defineSlots<WithRequiredDefaultSlot>();
</script>
