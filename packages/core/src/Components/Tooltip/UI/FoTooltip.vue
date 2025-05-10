<template>
    <div ref="tooltip"
         class="tooltip"
    >
        <div ref="reference"
             @click.prevent="isPopover && (showTooltip = !showTooltip)"
             @mouseover="!isPopover && (showTooltip = !showTooltip)"
             @mouseout="!isPopover && (showTooltip = false)"
        >
            <slot />
        </div>

        <div v-if="showTooltip"
             ref="floating"
             :style="floatingStyles"
             :role="isPopover ? 'popover' : 'tooltip'"
        >
            <div class="tooltip-body rounded-lg p-4 text-start"
                 :class="[colorClass, maxSizeClass]"
            >
                <slot name="body" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { TooltipProps }           from '@/Components/Tooltip';
import { tooltipAsPopover }            from '@/Components/Tooltip/Internal';
import { useSize }                     from '@/Shared/Internal';
import { useColor }                    from '@/Shared/UseColor/Internal';
import { offset, useFloating }         from '@floating-ui/vue';
import { onClickOutside }              from '@vueuse/core';
import { inject, ref, useTemplateRef } from 'vue';

const props = withDefaults(defineProps<TooltipProps>(), {
    color:     'neutral',
    placement: 'top',
    maxSize:   'default',
});

const isPopover = inject(tooltipAsPopover, false);

const tooltipElement   = useTemplateRef('tooltip');
const referenceElement = useTemplateRef('reference');
const floatingElement  = useTemplateRef('floating');

const showTooltip = ref<boolean>(false);

const { floatingStyles } = useFloating(referenceElement, floatingElement, {
    placement:  () => props.placement,
    middleware: [offset(8)],
});

const [
    colorClass,
    maxSizeClass,
] = [
    useColor('tooltip', () => props.color),
    useSize('tooltip', () => props.maxSize),
];

// todo: on resize
// todo: document maxSize and different placements for both tooltip and popover
onClickOutside(tooltipElement, () => isPopover && (showTooltip.value = false));
</script>
