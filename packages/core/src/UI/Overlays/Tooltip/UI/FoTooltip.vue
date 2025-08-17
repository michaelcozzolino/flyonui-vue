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
import type { ComponentName }              from '@/Lib';
import type { TooltipProps, TooltipSlots } from '@/UI/Overlays';
import { useColor }                        from '@/Lib/UseColor/Internal';
import { useFlyonUIVueAppConfig }          from '@/Lib/UseFlyonUIVueAppConfig';
import { useSize }                         from '@/Lib/UseSize/Internal';
import { tooltipAsPopover }                from '@/UI/Overlays/Tooltip/Internal';
import { offset, useFloating }             from '@floating-ui/vue';
import { onClickOutside }                  from '@vueuse/core';
import { inject, ref, useTemplateRef }     from 'vue';

const props = withDefaults(defineProps<TooltipProps>(), {
    placement: 'top',
});

defineSlots<TooltipSlots>();

const componentName: ComponentName = 'FoTooltip';

const { config } = useFlyonUIVueAppConfig();

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
// todo: document maxSize for both tooltip and popover
onClickOutside(tooltipElement, () => isPopover && (showTooltip.value = false));
</script>
