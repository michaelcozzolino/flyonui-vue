<template>
    <div class="card-footer">
        <slot>
            {{ useRequiredSlotMessage('FoCardFooter') }}
        </slot>
    </div>
</template>

<script setup lang="ts">
import type { WithRequiredDefaultSlot } from '@/Types';
import { useRequiredSlotMessage }       from '@/Lib/Utils/Internal';

defineSlots<WithRequiredDefaultSlot>();
</script>
