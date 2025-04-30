<template>
    <div class="stat">
        <slot>
            {{ useRequiredSlotMessage('stat', 'Please use FoStat{Title|Description|Figure|Value}.vue') }}
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
