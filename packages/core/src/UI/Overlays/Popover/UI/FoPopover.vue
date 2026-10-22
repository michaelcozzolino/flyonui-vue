<template>
    <FoTooltip v-bind="$props">
        <slot />

        <template #body>
            <slot name="body" />
        </template>
    </FoTooltip>
</template>

<script setup lang="ts">
import type { TooltipProps, TooltipSlots } from '@/UI/Overlays/Tooltip';
import { provide }                         from 'vue';
import { FoTooltip }                       from '@/UI/Overlays/Tooltip';
import { tooltipAsPopover }                from '@/UI/Overlays/Tooltip/Internal';

defineProps<TooltipProps>();

defineSlots<TooltipSlots>();

provide(tooltipAsPopover, true);
</script>
