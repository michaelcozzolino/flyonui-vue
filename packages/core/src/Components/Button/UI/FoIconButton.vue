<template>
    <FoButton v-bind="props"
              :icon="{ left: icon }"
    />
</template>

<script setup lang="ts">
import type { ButtonProps } from '@/Components/Button/Types/Button';
import type { IconType }    from '@/Components/Icon/Types/Icon';
import type { Shape }       from '@/Shared/Types/Variants';
import FoButton             from '@/Components/Button/UI/FoButton.vue';

interface Props extends Omit<ButtonProps, 'icon'> {
    icon:  IconType;
    shape: Extract<Shape, 'circle' | 'square'>;
}

const props = withDefaults(defineProps<Props>(), {
    isActive: undefined,
});
</script>
