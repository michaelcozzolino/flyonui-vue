<template>
    <div class="stat-title">
        <slot>
            {{ useRequiredSlotMessage('stat-title') }}
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
