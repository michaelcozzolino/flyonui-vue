<template>
    <div class="stats"
         :class="[orientationClass, borderClass]"
    >
        <slot />
    </div>
</template>

<script setup lang="ts">
import type { StatsProps }    from '@/Components/Stats';
import type { ComponentName } from '@/Shared/Utils/Internal';
import { useBorder }          from '@/Shared/UseBorder/Internal';
import { useOrientation }     from '@/Shared/UseOrientation/Internal';

const props = withDefaults(defineProps<StatsProps>(), {
    orientation: 'horizontal',
    isBordered:  false,
});

const componentName: ComponentName = 'FoStats';

const [
    orientationClass,
    borderClass,
] = [
    useOrientation(componentName, () => props.orientation),
    useBorder(componentName, () => props.isBordered),
];
</script>
