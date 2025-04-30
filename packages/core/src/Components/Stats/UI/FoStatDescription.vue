<template>
    <div class="stat-desc">
        <slot>
            {{ useRequiredSlotMessage('stat-description') }}
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
