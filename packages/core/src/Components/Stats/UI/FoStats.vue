<template>
    <div class="stats"
         :class="[orientationClass, borderClass]"
    >
        <slot />
    </div>
</template>

<script setup lang="ts">
import type { ElementName, Orientation } from '@/Shared/Types/Variants';
import { useBorder, useOrientation }     from '@/Shared/Internal/Lib';

interface Props {
    orientation?: Orientation;
    isBordered?:  boolean;
}

const props = withDefaults(defineProps<Props>(), {
    orientation: 'horizontal',
    isBordered:  false,
});

const elementName: ElementName = 'stats';

const [
    orientationClass,
    borderClass,
] = [
    useOrientation(elementName, () => props.orientation),
    useBorder(elementName, () => props.isBordered),
];
</script>
