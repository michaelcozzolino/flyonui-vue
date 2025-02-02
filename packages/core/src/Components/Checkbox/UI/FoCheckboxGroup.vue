<template>
    <div class="flex"
         :class="orientationClass"
    >
        <slot />
    </div>
</template>

<script setup lang="ts">
import type { Orientation }              from '@/Shared/Types/Variants';
import { isInCheckboxGroupInjectionKey } from '@/Components/Checkbox/Lib/InjectionKeys';
import { useOrientation }                from '@/Shared/Lib/UseElementClass';
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
