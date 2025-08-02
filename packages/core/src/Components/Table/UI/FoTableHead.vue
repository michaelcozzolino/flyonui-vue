<template>
    <thead>
        <slot>
            {{ useRequiredSlotMessage('FoTableHead') }}
        </slot>
    </thead>
</template>

<script setup lang="ts">
import type { VNode }             from 'vue';
import { useRequiredSlotMessage } from '@/Shared/Utils/Internal';

defineSlots<{
    default: () => VNode[];
}>();
</script>
