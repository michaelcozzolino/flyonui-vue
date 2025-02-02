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

        <slot v-if="isTextAllowedForShape(shape)" />

        <slot name="append">
            <FoIcon v-if="icon?.right"
                    :icon="icon.right"
            />
        </slot>
    </component>
</template>

<script lang="ts" setup>
import type { ButtonProps }                       from '@/Components/Button/Types/Button';
import type { ElementName, State }                from '@/Shared/Types/Variants';
import FoIcon                                     from '@/Components/Icon/UI/FoIcon.vue';
import { isTextAllowedForShape }                  from '@/Shared/Lib/IsTextAllowedForShape';
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

const elementName: ElementName = 'btn';

const [
    colorClass,
    presetClass,
    shapeClass,
    sizeClass,
    glassClass,
] = [
    useColor(elementName, () => props.color),
    usePreset(elementName, () => props.preset),
    useShape(elementName, () => props.shape),
    useSize(elementName, () => props.size),
    useGlass(() => props.hasGlass),
];

const stateClass = computed(() => {
    // todo: i'm not sure this is the correct ay to handle it as an active button could also be disabled
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
</script>
