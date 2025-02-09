<template>
    <iframe :src="withBase('/build-size-visualizer.html')"
            class="w-full"
            height="1000"
            title="Build Size Visualizer"
    />
</template>

<script setup lang="ts">
import { withBase } from 'vitepress';
</script>
