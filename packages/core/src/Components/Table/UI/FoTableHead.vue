<template>
    <thead>
        <slot>
            {{ useRequiredSlotMessage('FoTableHead') }}
        </slot>
    </thead>
</template>

<script setup lang="ts">
import type { WithRequiredDefaultSlot } from '@/Shared/Utils/Types/Slots.ts';
import { useRequiredSlotMessage }       from '@/Shared/Utils/Internal';

defineSlots<WithRequiredDefaultSlot>();
</script>
