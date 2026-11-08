<template>
    <div class="card-group sm:flex *:not-last:border-e *:not-last:border-base-content/25 max-w-sm sm:max-w-full">
        <slot>
            {{ useRequiredSlotMessage('FoCardGroup') }}
        </slot>
    </div>
</template>

<script setup lang="ts">
import type { WithRequiredDefaultSlot } from '@/Types';
import { useRequiredSlotMessage }       from '@/Lib/Utils/Internal';

defineSlots<WithRequiredDefaultSlot>();
</script>
