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
               ]"
               :to="to"
    >
        <slot name="prepend">
            <FoIcon v-if="buttonIcon?.left"
                    :icon="buttonIcon.left"
                    :size="iconSize"
            />
        </slot>

        <slot />

        <slot name="append">
            <FoIcon v-if="buttonIcon?.right"
                    :icon="buttonIcon.right"
                    :size="iconSize"
            />
        </slot>
    </component>
</template>

<script lang="ts" setup>
import type { ComponentName } from '@/Lib';

import type { WithAddonSlots, WithDefaultSlot } from '@/Types';
import type { ButtonProps }                     from '@/UI/Components';
import { useFlyonUIVueAppConfig }               from '@/Lib';
import { useColor }                             from '@/Lib/UseColor/Internal';
import { useGlass }                             from '@/Lib/UseGlass/Internal';
import { usePreset }                            from '@/Lib/UsePreset/Internal';
import { useResponsitivity }                    from '@/Lib/UseResponsitivity/Internal';
import { useShape }                             from '@/Lib/UseShape/Internal';
import { useSize }                              from '@/Lib/UseSize/Internal';
import { useState }                             from '@/Lib/UseState/Internal';
import { FoRouterLink }                         from '@/UI/Content/Link/Internal';
import { FoIcon }                               from '@/UI/Customization';
import { usePositionableIcon }                  from '@/UI/Customization/Icon/Internal';
import { isInJoinInjectionKey, useJoinItem }    from '@/UI/Forms/Join/Internal';
import { computed, inject }                     from 'vue';

const props = withDefaults(defineProps<ButtonProps>(), {
    isActive:     false,
    layout:       'default',
    isResponsive: false,
});

defineSlots<WithDefaultSlot & WithAddonSlots>();

const componentName: ComponentName = 'FoButton';
const { config }                   = useFlyonUIVueAppConfig();

const isInJoin: boolean = inject(isInJoinInjectionKey, false);

const buttonTag = computed(() => {
    if (props.to === undefined) {
        return 'button';
    }

    return FoRouterLink;
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

const iconSize = { width: 18, height: 18 };

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
