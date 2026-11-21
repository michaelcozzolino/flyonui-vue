<template>
    <FoProgress class="h-56"
                orientation="vertical"
                :value="0"
    />

    <FoProgress class="h-56"
                orientation="vertical"
                :value="25"
    />

    <FoProgress class="h-56"
                orientation="vertical"
                :value="50"
    />

    <FoProgress class="h-56"
                orientation="vertical"
                :value="75"
    />

    <FoProgress class="h-56"
                orientation="vertical"
                :value="100"
    />
</template>

<script setup lang="ts">
import { FoProgress } from 'flyonui-vue';
</script>
