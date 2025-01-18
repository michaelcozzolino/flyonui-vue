<template>
    <span :class="elementClass" />
</template>

<script setup lang="ts">
import type { FillableElementName } from '@/Shared/Types/Variants';
import { computed }                 from 'vue';

interface Props {
    element: FillableElementName;
}

const props = defineProps<Props>();

const elementClass = computed(() => {
    const classes: Record<FillableElementName, string> = {
        input:  'input-filled-focused',
        select: 'select-filled-focused',
    };

    return classes[props.element];
});
</script>
