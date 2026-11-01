<template>
    <div class="mockup-phone-display">
        <slot>
            {{ useRequiredSlotMessage('FoPhoneDisplay') }}
        </slot>
    </div>
</template>

<script setup lang="ts">
import type { WithRequiredDefaultSlot } from '@/Types';
import { useRequiredSlotMessage }       from '@/Lib/Utils/Internal';

defineSlots<WithRequiredDefaultSlot>();
</script>
