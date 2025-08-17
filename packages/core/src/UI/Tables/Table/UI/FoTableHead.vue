<template>
    <thead>
        <slot>
            {{ useRequiredSlotMessage('FoTableHead') }}
        </slot>
    </thead>
</template>

<script setup lang="ts">
import type { WithRequiredDefaultSlot } from '@/Types';
import { useRequiredSlotMessage }       from '@/Lib/Utils/Internal';

defineSlots<WithRequiredDefaultSlot>();
</script>
