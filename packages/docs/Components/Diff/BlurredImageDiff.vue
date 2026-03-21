<template>
    <FoDiff>
        <template #first>
            <img alt="mountains"
                 src="https://cdn.flyonui.com/fy-assets/components/diff/image-1.png"
            >
        </template>

        <template #second>
            <img class="blur-xs"
                 alt="blurred mountains"
                 src="https://cdn.flyonui.com/fy-assets/components/diff/image-1.png"
            >
        </template>
    </FoDiff>
</template>

<script setup lang="ts">
import { FoDiff } from 'flyonui-vue';
</script>
