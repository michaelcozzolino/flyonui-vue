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
            <FoIcon v-if="buttonIcon?.left"
                    :icon="buttonIcon.left"
                    :size="size"
            />
        </slot>

        <slot v-if="isTextAllowedForShape(config, componentName, shape)" />

        <slot name="append">
            <FoIcon v-if="buttonIcon?.right"
                    :icon="buttonIcon.right"
                    :size="size"
            />
        </slot>
    </component>
</template>

<script lang="ts" setup>
import type { ButtonProps }   from '@/Components/Button';
import type { ComponentName } from '@/Shared/Utils/Internal';

import { FoIcon }                            from '@/Components/Icon';
import { usePositionableIcon }               from '@/Components/Icon/Internal';
import { isInJoinInjectionKey, useJoinItem } from '@/Components/Join/Internal';
import { useColor }                          from '@/Shared/UseColor/Internal';
import { useFlyonUIVueAppConfig }            from '@/Shared/UseFlyonUIVueAppConfig';
import { useGlass }                          from '@/Shared/UseGlass/Internal';
import { usePreset }                         from '@/Shared/UsePreset/Internal';
import { useResponsitivity }                 from '@/Shared/UseResponsitivity/Internal';
import { isTextAllowedForShape, useShape }   from '@/Shared/UseShape/Internal';
import { useSize }                           from '@/Shared/UseSize/Internal';
import { useState }                          from '@/Shared/UseState/Internal';
import { computed, inject }                  from 'vue';
import { RouterLink }                        from 'vue-router';

const props = withDefaults(defineProps<ButtonProps>(), {
    isActive:     false,
    layout:       'default',
    isResponsive: false,
});

const componentName: ComponentName = 'FoButton';
const config                       = useFlyonUIVueAppConfig();

const isInJoin: boolean = inject(isInJoinInjectionKey, false);

const buttonTag = computed(() => {
    if (props.to === undefined) {
        return 'button';
    }

    return RouterLink;
});

const buttonIcon = usePositionableIcon(
    config,
    componentName,
    () => props.icon,
);

const [
    colorClass,
    joinItemClass,
    presetClass,
    shapeClass,
    sizeClass,
    glassClass,
    responsiveClass,
] = [
    useColor(config, componentName, () => props.color),
    useJoinItem(isInJoin),
    usePreset(config, componentName, () => props.preset),
    useShape(config, componentName, () => props.shape),
    useSize(config, componentName, () => props.size),
    useGlass(() => props.withGlass),
    useResponsitivity(componentName, () => props.isResponsive),
];

const stateClass = computed(() => {
    return [
        useState(componentName, props.isActive ? 'active' : 'default').value,
        useState(componentName, () => props.isDisabled ? 'disabled' : 'default').value,
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
