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
import type { Animation, LoadingProps } from '@/Components/Loading/Types/Loading';
import type { ElementName }             from '@/Shared/Types/Variants';
import { useSize }                      from '@/Shared/Internal/Lib';
import { useTextColor }                 from '@/Shared/UseColor/Internal';
import { computed }                     from 'vue';

const props = withDefaults(defineProps<LoadingProps>(), {
    animation: 'spinner',
    size:      'default',
});

const elementName: ElementName = 'loading';

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

const [
    colorClass,
    sizeClass,
] = [
    useTextColor(elementName, () => props.color),
    useSize(elementName, () => props.size),
];
</script>
