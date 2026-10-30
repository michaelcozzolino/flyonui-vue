<template>
    <span class="loading"
          :class="[
              animationClass,
              colorClass,
              sizeClass,
          ]"
    />
</template>

<script setup lang="ts">
import type { ComponentName, Size, TextColor } from '@/Lib';
import type { LoadingAnimation, LoadingProps } from '@/UI/Components';
import { computed }                            from 'vue';
import { useFlyonUIVueAppConfig }              from '@/Lib';
import { useTextColor }                        from '@/Lib/UseColor/Internal';
import { useSize }                             from '@/Lib/UseSize/Internal';

const props = withDefaults(defineProps<LoadingProps>(), {
    animation: 'spinner',
});

const componentName: ComponentName = 'FoLoading';

const { config } = useFlyonUIVueAppConfig();

const animationClass = computed((): string => {
    const icons: Record<LoadingAnimation, string> = {
        spinner:  'loading-spinner',
        dots:     'loading-dots',
        ring:     'loading-ring',
        ball:     'loading-ball',
        bars:     'loading-bars',
        infinity: 'loading-infinity',
    };

    return icons[props.animation];
});

const [
    colorClass,
    sizeClass,
] = [
    useTextColor(config, componentName, (): TextColor | undefined => props.color),
    useSize(config, componentName, (): Size | undefined => props.size),
];
</script>
