<template>
    <FoAlert class="card-alert"
             v-bind="props"
    >
        <slot>
            {{ useRequiredSlotMessage('FoCardAlert') }}
        </slot>
    </FoAlert>
</template>

<script setup lang="ts">
import type { WithRequiredDefaultSlot } from '@/Types';
import type { CardAlertProps }          from '@/UI/Components';
import { useRequiredSlotMessage }       from '@/Lib/Utils/Internal';
import { FoAlert }                      from '@/UI/Components';

const props = defineProps<CardAlertProps>();

defineSlots<WithRequiredDefaultSlot>();
</script>
