<template>
    <div class="stat-desc">
        <slot>
            {{ useRequiredSlotMessage('FoStatDescription') }}
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
