<template>
    <component :is="tag"
               class="text-base-content"
               :class="textClass"
    >
        <slot />
    </component>
</template>

<script setup lang="ts">
import type { HeadingLevel } from '@/Components/Heading';
import { computed }          from 'vue';

interface Props {
    level: HeadingLevel;
}

const props = defineProps<Props>();

const tag = computed(() => {
    return `h${props.level}`;
});

const textClass = computed(() => {
    const classes: Record<HeadingLevel, string> = {
        1: 'text-4xl',
        2: 'text-3xl',
        3: 'text-2xl',
        4: 'text-xl',
        5: 'text-lg',
        6: 'text-base',
    };

    return classes[props.level];
});
</script>
