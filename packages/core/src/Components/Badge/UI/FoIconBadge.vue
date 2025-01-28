<template>
    <FoBadge v-bind="props"
             :icon="{ left: icon }"
             :shape="shape"
    />
</template>

<script setup lang="ts">
import type { BadgeProps } from '@/Components/Badge/Types/Badge';
import type { IconType }   from '@/Components/Icon/Types/Icon';
import type { Shape }      from '@/Shared/Types/Variants';
import FoBadge             from '@/Components/Badge/UI/FoBadge.vue';

interface Props extends Omit<BadgeProps, 'icon' | 'shape'> {
    icon:  IconType;
    shape: Extract<Shape, 'circle' | 'square'>;
}

const props = defineProps<Props>();
</script>
