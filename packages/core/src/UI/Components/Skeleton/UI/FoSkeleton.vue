<template>
    <div :class="[skeletonClass, animationClass, stripesClass]" />
</template>

<script setup lang="ts">
import type { ComponentName }   from '@/Lib';
import type { SkeletonProps }   from '@/UI/Components/Skeleton/Types/Skeleton';
import { useClass }             from '@/Lib/UseClass/Internal';
import { useStripes }           from '@/Lib/UseStripes/Internal';
import { useTailwindAnimation } from '@/Lib/UseTailwindAnimation/Internal';
import { computed }             from 'vue';

const props = withDefaults(defineProps<SkeletonProps>(), {
    animation: 'none',
    isStriped: false,
});

const componentName: ComponentName = 'FoSkeleton';

const animationClass = computed((): string => {
    return props.animation === 'loading' ? 'skeleton-animated' : useTailwindAnimation(props.animation).value;
});

const [
    skeletonClass,
    stripesClass,
] = [
    useClass(() => props.isStriped === false, 'skeleton'),
    useStripes(componentName, () => props.isStriped),
];
</script>
