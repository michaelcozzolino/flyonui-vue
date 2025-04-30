<template>
    <div class="stat-value">
        <slot>
            {{ useRequiredSlotMessage('stat-value') }}
        </slot>
    </div>
</template>

<script setup lang="ts">
import type { VNode }             from 'vue';
import { useRequiredSlotMessage } from '@/Shared/Internal';

defineSlots<{
    default: () => VNode[];
}>();
</script>
