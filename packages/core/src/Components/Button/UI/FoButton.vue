<template>
    <component :is="buttonTag"
               class="btn"
               :class="[
                   colorClass,
                   joinItemClass,
                   presetClass,
                   shapeClass,
                   sizeClass,
                   ...stateClass,
                   responsiveClass,
                   layoutClass,
                   glassClass,
                   isDisabled && 'btn-disabled',
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
import type { ButtonProps } from '@/Components/Button/Types/Button';
import type {
    ElementName,
}                               from '@/Shared/Types/Variants';
import { FoIcon }               from '@/Components/Icon';
import { isInJoinInjectionKey } from '@/Components/Join/Internal';
import {
    isTextAllowedForShape,
    useColor,
    useGlass,
    useJoinItem,
    usePreset,
    useResponsive,
    useShape,
    useSize,
    useState,
}                               from '@/Shared/Internal/Lib';
import { computed, inject } from 'vue';
import { RouterLink }       from 'vue-router';

const props = withDefaults(defineProps<ButtonProps>(), {
    color:        'default',
    preset:       'default',
    shape:        'default',
    size:         'default',
    isActive:     false,
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
const isInJoin: boolean        = inject(isInJoinInjectionKey, false);

const [
    colorClass,
    joinItemClass,
    presetClass,
    shapeClass,
    sizeClass,
    glassClass,
    responsiveClass,
] = [
    useColor(elementName, () => props.color),
    useJoinItem(isInJoin),
    usePreset(elementName, () => props.preset),
    useShape(elementName, () => props.shape),
    useSize(elementName, () => props.size),
    useGlass(() => props.withGlass),
    useResponsive(elementName, () => props.isResponsive),
];

const stateClass = computed(() => {
    return [
        useState(elementName, props.isActive ? 'active' : 'default').value,
        useState(elementName, props.isDisabled ? 'disabled' : 'default').value,
    ];
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
