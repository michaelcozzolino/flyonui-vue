<template>
    <div class="stat">
        <slot>
            {{ useRequiredSlotMessage('FoStat', 'Please use FoStat{Title|Description|Figure|Value}.vue') }}
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
