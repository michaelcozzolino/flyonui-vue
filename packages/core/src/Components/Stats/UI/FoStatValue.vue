<template>
    <div class="stat-value">
        <slot>
            {{ useRequiredSlotMessage('FoStatValue') }}
        </slot>
    </div>
</template>

<script setup lang="ts">
import type { VNode }             from 'vue';
import { useRequiredSlotMessage } from '@/Shared/Utils/Internal';

defineSlots<{
    default: () => VNode[];
}>();
</script>
