<template>
    <th>
        <slot />
    </th>
</template>

<script setup lang="ts">
import type { VNode } from 'vue';

defineSlots<{
    default?: () => VNode[];
}>();
</script>
