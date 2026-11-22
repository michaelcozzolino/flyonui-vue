<template>
    <p class="text-base-content text-xs font-medium">
        {{ title }}
    </p>
</template>

<script setup lang="ts">
interface Props {
    title: string;
}

defineProps<Props>();
</script>
