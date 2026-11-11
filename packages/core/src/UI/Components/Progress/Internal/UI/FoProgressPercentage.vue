<template>
    <span :class="isFloating ? 'progress-label ms-[calc(var(--progress)-1.25rem)]' : 'text-base-content text-xs font-light'"
          :style="isFloating ? { '--progress': value } : undefined"
    >
        {{ value }}
    </span>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ value: string; isFloating?: boolean }>(), {
    isFloating: false,
});
</script>
