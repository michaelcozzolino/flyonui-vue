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
import type { Animation, LoadingProps } from '@/Components/Loading/';
import type { ComponentName }           from '@/Shared/Utils/Internal';
import { useTextColor }                 from '@/Shared/UseColor/Internal';
import { useFlyonUIVueAppConfig }       from '@/Shared/UseFlyonUIVueAppConfig';
import { useSize }                      from '@/Shared/UseSize/Internal';
import { computed }                     from 'vue';

const props = withDefaults(defineProps<LoadingProps>(), {
    animation: 'spinner',
});

const componentName: ComponentName = 'FoLoading';

const { config } = useFlyonUIVueAppConfig();

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
    useTextColor(config, componentName, () => props.color),
    useSize(config, componentName, () => props.size),
];
</script>
