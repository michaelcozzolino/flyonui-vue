<template>
    <component :is="buttonTag"
               :id="id"
               :class="[
                   isTabButton ? (shape !== undefined && 'btn') : 'btn',
                   colorClass,
                   joinItemClass,
                   presetClass,
                   shapeClass,
                   sizeClass,
                   ...stateClass,
                   responsiveClass,
                   layoutClass,
                   glassClass,
               ]"
               :type="isPureButton ? type : undefined"
               :to="to"
               :navigation="isPureButton ? undefined : navigation"
               :disabled="isPureButton ? isDisabled : undefined"
    >
        <slot name="prepend">
            <FoIcon v-if="buttonIcon?.left"
                    :class="isTabButton && 'me-3'"
                    :icon="buttonIcon.left"
                    :size="iconSize"
            />
        </slot>

        <slot />

        <slot name="append">
            <FoIcon v-if="buttonIcon?.right"
                    :class="isTabButton && 'ms-3'"
                    :icon="buttonIcon.right"
                    :size="iconSize"
            />
        </slot>
    </component>
</template>

<script lang="ts" setup>
import type { ComponentName }                   from '@/Lib';
import type { WithAddonSlots, WithDefaultSlot } from '@/Types';

import type { ButtonProps }                  from '@/UI/Components';
import type { CustomIconSize }               from '@/UI/Customization';
import { useFlyonUIVueAppConfig }            from '@/Lib';
import { useColor }                          from '@/Lib/UseColor/Internal';
import { useGlass }                          from '@/Lib/UseGlass/Internal';
import { usePreset }                         from '@/Lib/UsePreset/Internal';
import { useResponsitivity }                 from '@/Lib/UseResponsitivity/Internal';
import { useShape }                          from '@/Lib/UseShape/Internal';
import { useSize }                           from '@/Lib/UseSize/Internal';
import { useState }                          from '@/Lib/UseState/Internal';
import { FoLink }                            from '@/UI/Content';
import { FoIcon }                            from '@/UI/Customization';
import { usePositionableIcon }               from '@/UI/Customization/Icon/Internal';
import { isInJoinInjectionKey, useJoinItem } from '@/UI/Forms/Join/Internal';
import { computed, inject, useAttrs }        from 'vue';

const props = withDefaults(defineProps<ButtonProps>(), {
    type:         'button',
    isActive:     false,
    layout:       'default',
    isResponsive: false,
});

defineSlots<WithDefaultSlot & WithAddonSlots>();

const attrs = useAttrs();

const componentName: ComponentName = 'FoButton';
const { config }                   = useFlyonUIVueAppConfig();

const isInJoin: boolean = inject(isInJoinInjectionKey, false);
const isTabButton       = computed((): boolean => attrs.role === 'tab');

const buttonTag = computed((): 'button' | typeof FoLink => {
    if (props.to === undefined) {
        return 'button';
    }

    return FoLink;
});

const isPureButton = computed((): boolean => buttonTag.value === 'button');

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

const iconSize = computed(
    (): CustomIconSize => isTabButton.value ? 'small' : { width: 18, height: 18 },
);

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
