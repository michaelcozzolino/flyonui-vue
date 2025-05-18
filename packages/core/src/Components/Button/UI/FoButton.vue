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

        <slot v-if="isTextAllowedForShape(config, componentName, shape)" />

        <slot name="append">
            <FoIcon v-if="icon?.right"
                    :icon="icon.right"
            />
        </slot>
    </component>
</template>

<script lang="ts" setup>
import type { ButtonProps }   from '@/Components/Button/Types/Button';
import type { ComponentName } from '@/Shared/Types/ComponentTypes';

import { FoIcon }                            from '@/Components/Icon';
import { isInJoinInjectionKey, useJoinItem } from '@/Components/Join/Internal';
import { injectFlyonUIVueAppConfig }         from '@/Configuration/CreateFlyonUIVueApp';
import { isTextAllowedForShape }             from '@/Shared/Internal/Lib';
import { useColor }                          from '@/Shared/UseColor/Internal';
import { useGlass }                          from '@/Shared/UseGlass/Internal/Lib';
import { usePreset }                         from '@/Shared/UsePreset/Internal/Lib';
import { useResponsitivity }                 from '@/Shared/UseResponsitivity/Internal/Lib';
import { useShape }                          from '@/Shared/UseShape/Internal/Lib';
import { useSize }                           from '@/Shared/UseSize/Internal/Lib';
import { useState }                          from '@/Shared/UseState/Internal/Lib';
import { computed, inject }                  from 'vue';
import { RouterLink }                        from 'vue-router';

const props = withDefaults(defineProps<ButtonProps>(), {
    isActive:     false,
    layout:       'default',
    isResponsive: false,
});

const componentName: ComponentName = 'FoButton';
const config                       = injectFlyonUIVueAppConfig();

const isInJoin: boolean = inject(isInJoinInjectionKey, false);

const buttonTag = computed(() => {
    if (props.to === undefined) {
        return 'button';
    }

    return RouterLink;
});

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
        useState(componentName, props.isDisabled ? 'disabled' : 'default').value,
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
