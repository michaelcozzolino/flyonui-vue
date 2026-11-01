<template>
    <div class="mockup-phone">
        <div class="mockup-phone-camera" />

        <slot>
            {{ useRequiredSlotMessage('FoPhone') }}
        </slot>
    </div>
</template>

<script setup lang="ts">
import type { WithRequiredDefaultSlot } from '@/Types';
import { useRequiredSlotMessage }       from '@/Lib/Utils/Internal';

defineSlots<WithRequiredDefaultSlot>();
</script>
