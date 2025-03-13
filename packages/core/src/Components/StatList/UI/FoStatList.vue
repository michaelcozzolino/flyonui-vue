<template>
    <div class="stats"
         :class="[orientationClass, borderClass]"
    >
        <slot />
    </div>
</template>

<script setup lang="ts">
import type { Orientation } from '@/Shared/Types/Variants';
import { useBorder }        from '@/Shared/Lib/UseClass';
import { useOrientation }   from '@/Shared/Lib/UseElementClass';

interface Props {
    orientation?: Orientation;
    isBordered?:  boolean;
}

const props = withDefaults(defineProps<Props>(), {
    orientation: 'horizontal',
    isBordered:  false,
});

const [
    orientationClass,
    borderClass,
] = [
    useOrientation('stat-list', () => props.orientation),
    useBorder('stat-list', () => props.isBordered),
];
</script>
