<template>
    <tbody>
        <slot>
            {{ useRequiredSlotMessage('FoTableBody') }}
        </slot>
    </tbody>
</template>

<script setup lang="ts">
import type { VNode }             from 'vue';
import { useRequiredSlotMessage } from '@/Shared/Utils/Internal';

defineSlots<{
    default: () => VNode[];
}>();
</script>
