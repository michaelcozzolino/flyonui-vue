<template>
    <td>
        <slot />
    </td>
</template>

<script setup lang="ts">
import type { VNode } from 'vue';

defineSlots<{
    default?: () => VNode[];
}>();
</script>
