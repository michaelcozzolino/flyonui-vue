<template>
    <div class="flex"
         :class="orientationClass"
    >
        <slot />
    </div>
</template>

<script setup lang="ts">
import type { CheckboxGroupProps }       from '@/Components/Checkbox';
import { isInCheckboxGroupInjectionKey } from '@/Components/Checkbox/Internal';
import { useOrientation }                from '@/Shared/UseOrientation/Internal';
import { provide }                       from 'vue';

const props = withDefaults(defineProps<CheckboxGroupProps>(), {
    orientation: 'horizontal',
});

provide(isInCheckboxGroupInjectionKey, true);

const orientationClass = useOrientation('FoCheckboxGroup', () => props.orientation);
</script>
