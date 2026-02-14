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

        <FoButton v-if="isDismissible"
                  class="px-0 text-current"
                  preset="text"
                  shape="circle"
                  icon="tabler:circle-x-filled"
                  @click.prevent="emit('dismiss')"
        />
    </span>
</template>

<script setup lang="ts">
import type { ComponentName }               from '@/Lib';
import type { DismissibleEmits }            from '@/Lib/UseDismissibleTransition';
import type { WithDefaultSlot }             from '@/Types';
import type { BadgeProps }                  from '@/UI/Components';
import { useFlyonUIVueAppConfig }           from '@/Lib';
import { useColor }                         from '@/Lib/UseColor/Internal';
import { usePreset }                        from '@/Lib/UsePreset/Internal';
import { isTextAllowedForShape, useShape }  from '@/Lib/UseShape/Internal';
import { useSize }                          from '@/Lib/UseSize/Internal';
import { FoButton }                         from '@/UI/Components';
import { isInDismissibleBadgeInjectionKey } from '@/UI/Components/Badge/Internal';
import { FoIcon }                           from '@/UI/Customization';
import { usePositionableIcon }              from '@/UI/Customization/Icon/Internal';
import { computed, provide }                from 'vue';

const props = withDefaults(defineProps<BadgeProps>(), {
    isDismissible: false,
});

const emit = defineEmits<DismissibleEmits>();

defineSlots<WithDefaultSlot>();

provide(isInDismissibleBadgeInjectionKey, computed(() => props.isDismissible));

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
