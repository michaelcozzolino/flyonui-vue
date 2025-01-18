<template>
    <span class="loading"
          :class="animationClass"
    />
</template>

<script setup lang="ts">
import type { Animation, LoadingIconProps } from '@/Shared/Types/Loading';
import { computed }                         from 'vue';

const props = withDefaults(defineProps<LoadingIconProps>(), {
    animation: 'spinner',
});

// todo: to be completed with colors
const animationClass = computed(() => {
    const icons: Record<Animation, string> = {
        spinner:  'loading-spinner',
        dots:     'loading-dots',
        ring:     'loading-ring',
        ball:     'loading-ball',
        bars:     'loading-bars',
        infinity: 'loading-infinity',
    };

    return icons[props.animation];
});
</script>
