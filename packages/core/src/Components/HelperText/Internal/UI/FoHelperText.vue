<template>
    <span class="helper-text"
          :class="position === 'right' && 'text-end'"
    >
        <slot />
    </span>
</template>

<script setup lang="ts">
import type { HorizontalPosition } from '@/Shared/Types';

interface Props {
    position?: HorizontalPosition;
}

withDefaults(defineProps<Props>(), {
    position: 'left',
});
</script>
