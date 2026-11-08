<template>
    <FoHeading class="card-title"
               level="5"
    >
        <slot>
            {{ useRequiredSlotMessage('FoCardTitle') }}
        </slot>
    </FoHeading>
</template>

<script setup lang="ts">
import type { WithRequiredDefaultSlot } from '@/Types';
import { useRequiredSlotMessage }       from '@/Lib/Utils/Internal';
import { FoHeading }                    from '@/UI/Content';

defineSlots<WithRequiredDefaultSlot>();
</script>
