<template>
    <span class="badge"
          :class="[
              colorClass,
              presetClass,
              shapeClass,
              sizeClass,
              isTextAllowedForShape(config, componentName, shape) === false && 'size-6 p-0',
          ]"
    >
        <FoIcon v-if="badgeIcon?.left"
                :icon="badgeIcon.left"
                :size="iconSize"
        />

        <slot v-if="isTextAllowedForShape(config, componentName, shape)" />

        <FoIcon v-if="badgeIcon?.right"
                :icon="badgeIcon.right"
                :size="iconSize"
        />

        <FoIcon v-if="isDismissible"
                icon="tabler:circle-x-filled"
        />
    </span>
</template>

<script setup lang="ts">
import type { ComponentName }              from '@/Lib';
import type { WithDefaultSlot }            from '@/Types';
import type { BadgeProps }                 from '@/UI/Components';
import { useFlyonUIVueAppConfig }          from '@/Lib';
import { useColor }                        from '@/Lib/UseColor/Internal';
import { usePreset }                       from '@/Lib/UsePreset/Internal';
import { isTextAllowedForShape, useShape } from '@/Lib/UseShape/Internal';
import { useSize }                         from '@/Lib/UseSize/Internal';
import { FoIcon }                          from '@/UI/Customization';
import { usePositionableIcon }             from '@/UI/Customization/Icon/Internal';

const props = withDefaults(defineProps<BadgeProps>(), {
    isDismissible: false,
});

defineSlots<WithDefaultSlot>();

const componentName: ComponentName = 'FoBadge';

const { config } = useFlyonUIVueAppConfig();

const badgeIcon = usePositionableIcon(
    config,
    componentName,
    () => props.icon,
);

const iconSize = { width: 14, height: 14 };

const [
    colorClass,
    presetClass,
    shapeClass,
    sizeClass,
] = [
    useColor(config, componentName, () => props.color),
    usePreset(config, componentName, () => props.preset),
    useShape(config, componentName, () => props.shape),
    useSize(config, componentName, () => props.size),
];
</script>
