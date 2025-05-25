<template>
    <span class="badge"
          :class="[
              colorClass,
              presetClass,
              shapeClass,
              sizeClass,
          ]"
    >
        <FoIcon v-if="badgeIcon?.left"
                :icon="badgeIcon.left"
        />

        <slot v-if="isTextAllowedForShape(config, componentName, shape)" />

        <FoIcon v-if="badgeIcon?.right"
                :icon="badgeIcon.right"
        />

        <FoIcon v-if="isDismissible"
                icon="tabler:circle-x-filled"
        />
    </span>
</template>

<script setup lang="ts">
import type { BadgeProps }                 from '@/Components/Badge';
import type { ComponentName }              from '@/Shared/Utils/Internal';
import { FoIcon }                          from '@/Components/Icon';
import { usePositionableIcon }             from '@/Components/Icon/Internal';
import { useColor }                        from '@/Shared/UseColor/Internal';
import { useFlyonUIVueAppConfig }          from '@/Shared/UseFlyonUIVueAppConfig';
import { usePreset }                       from '@/Shared/UsePreset/Internal';
import { isTextAllowedForShape, useShape } from '@/Shared/UseShape/Internal';
import { useSize }                         from '@/Shared/UseSize/Internal';

const props = withDefaults(defineProps<BadgeProps>(), {
    isDismissible: false,
});

const componentName: ComponentName = 'FoBadge';

const config = useFlyonUIVueAppConfig();

const badgeIcon = usePositionableIcon(
    config,
    componentName,
    () => props.icon,
);

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
