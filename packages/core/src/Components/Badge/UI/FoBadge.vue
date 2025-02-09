<template>
    <span class="badge"
          :class="[
              colorClass,
              presetClass,
              shapeClass,
              sizeClass,
          ]"
    >
        <FoIcon v-if="icon?.left"
                :icon="icon.left"
        />

        <slot v-if="isTextAllowedForShape(shape)" />

        <FoIcon v-if="icon?.right"
                :icon="icon.right"
        />

        <FoIcon v-if="isDismissible"
                icon="tabler:circle-x-filled"
        />
    </span>
</template>

<script setup lang="ts">
import type { BadgeProps }                        from '@/Components/Badge/Types/Badge';
import { FoIcon }                                 from '@/Components/Icon';
import { isTextAllowedForShape }                  from '@/Shared/Lib/IsTextAllowedForShape';
import { useColor, usePreset, useShape, useSize } from '@/Shared/Lib/UseElementClass';

const props = withDefaults(defineProps<BadgeProps>(), {
    color:         'default',
    preset:        'default',
    shape:         'default',
    size:          'default',
    isDismissible: false,
});

const [
    colorClass,
    presetClass,
    shapeClass,
    sizeClass,
] = [
    useColor('badge', () => props.color),
    usePreset('badge', () => props.preset),
    useShape('badge', () => props.shape),
    useSize('badge', () => props.size),
];
</script>
