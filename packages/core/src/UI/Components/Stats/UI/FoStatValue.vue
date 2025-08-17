<template>
    <div class="stat-value">
        <slot>
            {{ useRequiredSlotMessage('FoStatValue') }}
        </slot>
    </div>
</template>

<script setup lang="ts">
import type { WithRequiredDefaultSlot } from '@/Types';
import { useRequiredSlotMessage }       from '@/Lib/Utils/Internal';

defineSlots<WithRequiredDefaultSlot>();
</script>
