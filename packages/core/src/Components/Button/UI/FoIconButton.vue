<template>
    <FoButton v-bind="props"
              :icon="{ left: icon }"
    />
</template>

<script setup lang="ts">
import type { ButtonProps } from '@/Components/Button';
import type { IconType }    from '@/Components/Icon';
import type { Shape }       from '@/Shared/UseShape';
import { FoButton }         from '@/Components/Button';

interface Props extends Omit<ButtonProps, 'icon'> {
    icon:   IconType;
    shape?: Extract<Shape, 'circle' | 'square'>;
}

const props = withDefaults(defineProps<Props>(), {
    shape: 'square',
});
</script>
