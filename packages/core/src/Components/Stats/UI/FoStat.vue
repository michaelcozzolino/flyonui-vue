<template>
    <div class="stat">
        <slot>
            {{ useRequiredSlotMessage('FoStat', 'Please use FoStat{Title|Description|Figure|Value}.vue') }}
        </slot>
    </div>
</template>

<script setup lang="ts">
import type { WithRequiredDefaultSlot } from '@/Shared/Utils/Types/Slots.ts';
import { useRequiredSlotMessage }       from '@/Shared/Utils/Internal';

defineSlots<WithRequiredDefaultSlot>();
</script>
