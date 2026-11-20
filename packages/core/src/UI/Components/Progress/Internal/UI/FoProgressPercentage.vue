<template>
    <span :class="[
              isFloating ? 'progress-label' : 'text-base-content text-xs font-light',
              isFloating && orientation === 'vertical' ? 'absolute start-0' : 'ms-[calc(var(--progress)-1.25rem)]',
          ]"
          :style="isFloating
              ? orientation === 'vertical' ? { bottom: `calc(${value} - 0.75rem)` } : { '--progress': value }
              : undefined"
    >
        {{ value }}
    </span>
</template>

<script setup lang="ts">
import type { Orientation } from '@/Lib';

interface Props {
    value:        string;
    isFloating?:  boolean;
    orientation?: Orientation;
}

withDefaults(defineProps<Props>(), {
    isFloating:  false,
    orientation: 'horizontal',
});
</script>
