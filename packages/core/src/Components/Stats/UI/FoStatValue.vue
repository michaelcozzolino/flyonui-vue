<template>
    <div class="stat-value">
        <slot>
            {{ useRequiredSlotMessage('FoStatValue') }}
        </slot>
    </div>
</template>

<script setup lang="ts">
import type { WithRequiredDefaultSlot } from '@/Shared/Utils/Types/Slots.ts';
import { useRequiredSlotMessage }       from '@/Shared/Utils/Internal';

defineSlots<WithRequiredDefaultSlot>();
</script>
