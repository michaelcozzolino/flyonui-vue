<template>
    <div class="flex"
         :class="orientationClass"
    >
        <slot />
    </div>
</template>

<script setup lang="ts">
import type { Orientation }              from '@/Shared/Types/Variants';
import { isInCheckboxGroupInjectionKey } from '@/Components/Checkbox/Internal';
import { useOrientation }                from '@/Shared/Internal/Lib';
import { provide }                       from 'vue';

interface Props {
    orientation?: Orientation;
}

const props = withDefaults(defineProps<Props>(), {
    orientation: 'horizontal',
});

provide(isInCheckboxGroupInjectionKey, true);

const orientationClass = useOrientation('checkbox', () => props.orientation);
</script>
