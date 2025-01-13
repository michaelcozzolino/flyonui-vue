<template>
    <component :is="buttonTag"
               class="btn"
               :class="[
                   colorClass,
                   presetClass,
                   shapeClass,
                   sizeClass,
                   stateClass,
                   responsiveClass,
                   layoutClass,
                   noAnimation && 'no-animation',
                   glassClass,
               ]"
    >
        <slot name="prepend">
            <FoIcon v-if="icon?.left"
                    :icon="icon.left"
            />
        </slot>

        <slot />

        <slot name="append">
            <FoIcon v-if="icon?.right"
                    :icon="icon.right"
            />
        </slot>
    </component>
</template>

<script lang="ts" setup>
import type { ButtonProps }                       from '@/Components/Button/Types/Button';
import type { State }                             from '@/Shared/Types/Variants';
import FoIcon                                     from '@/Components/Icon/UI/FoIcon.vue';
import { useGlass }                               from '@/Shared/Lib/UseClass';
import { useColor, usePreset, useShape, useSize } from '@/Shared/Lib/UseElementClass';
import { computed }                               from 'vue';
import { RouterLink }                             from 'vue-router';

const props = withDefaults(defineProps<ButtonProps>(), {
    color:        'default',
    preset:       'default',
    shape:        'default',
    size:         'default',
    noAnimation:  false,
    isActive:     undefined,
    layout:       'default',
    isResponsive: false,
});

const buttonTag = computed(() => {
    if (props.to === undefined) {
        return 'button';
    }

    return RouterLink;
});

const colorClass = useColor('btn', () => props.color);
const presetClass = usePreset('btn', () => props.preset);
const shapeClass = useShape('btn', () => props.shape);
const sizeClass = useSize('btn', () => props.size);

const stateClass = computed(() => {
    const states: Record<State, string> = {
        default:  '',
        active:   'btn-active',
        disabled: 'btn-disabled',
    };

    if (props.isActive === undefined) {
        return states.default;
    }

    return props.isActive ? states.active : states.disabled;
});

const responsiveClass = computed(() => {
    return props.isResponsive && 'max-sm:btn-sm lg:btn-lg';
});

const layoutClass = computed(() => {
    const layouts = {
        default: '',
        wide:    'btn-wide',
        block:   'btn-block',
    };

    return layouts[props.layout];
});

const glassClass = useGlass(() => props.hasGlass);
</script>
