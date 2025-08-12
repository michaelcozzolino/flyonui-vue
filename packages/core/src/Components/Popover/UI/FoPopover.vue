<template>
    <FoTooltip v-bind="$props">
        <slot />

        <template #body>
            <slot name="body" />
        </template>
    </FoTooltip>
</template>

<script setup lang="ts">
import type { TooltipProps, TooltipSlots } from '@/Components/Tooltip';
import { FoTooltip }                       from '@/Components/Tooltip';
import { tooltipAsPopover }                from '@/Components/Tooltip/Internal';
import { provide }                         from 'vue';

defineProps<TooltipProps>();

defineSlots<TooltipSlots>();

provide(tooltipAsPopover, true);
</script>
