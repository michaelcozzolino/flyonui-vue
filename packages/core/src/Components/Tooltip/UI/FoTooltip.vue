<template>
    <div ref="tooltip"
         class="tooltip"
    >
        <div ref="reference"
             @click.prevent="isPopover && (showTooltip = !showTooltip)"
             @mouseover="!isPopover && (showTooltip = true)"
             @mouseout="!isPopover && (showTooltip = false)"
        >
            <slot />
        </div>

        <div v-if="showTooltip"
             ref="floating"
             :style="floatingStyles"
             :role="isPopover ? 'popover' : 'tooltip'"
        >
            <div class="tooltip-body text-start"
                 :class="[colorClass, sizeClass, isPopover && 'rounded-lg p-4']"
            >
                <slot name="body" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { TooltipProps }           from '@/Components/Tooltip';
import type { ComponentName }          from '@/Shared/Utils/Internal';
import { tooltipAsPopover }            from '@/Components/Tooltip/Internal';
import { useColor }                    from '@/Shared/UseColor/Internal';
import { useFlyonUIVueAppConfig }      from '@/Shared/UseFlyonUIVueAppConfig';
import { useSize }                     from '@/Shared/UseSize/Internal';
import { offset, useFloating }         from '@floating-ui/vue';
import { onClickOutside }              from '@vueuse/core';
import { inject, ref, useTemplateRef } from 'vue';

const props = withDefaults(defineProps<TooltipProps>(), {
    placement: 'top',
});

const componentName: ComponentName = 'FoTooltip';

const config = useFlyonUIVueAppConfig();

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
    sizeClass,
] = [
    useColor(config, componentName, () => props.color),
    useSize(config, componentName, () => props.size),
];

// todo: on resize
// todo: document maxSize and different placements for both tooltip and popover
onClickOutside(tooltipElement, () => isPopover && (showTooltip.value = false));
</script>
