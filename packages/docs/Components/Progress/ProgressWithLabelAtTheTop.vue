<template>
    <FoProgress class="h-56"
                orientation="vertical"
                :value="{ value: 25, label: { position: 'top' } }"
    />

    <FoProgress class="h-56"
                orientation="vertical"
                :value="{ value: 50, label: { position: 'top' } }"
    />

    <FoProgress class="h-56"
                orientation="vertical"
                :value="{ value: 75, label: { position: 'top' } }"
    />

    <FoProgress class="h-56"
                orientation="vertical"
                :value="{ value: 100, label: { position: 'top' } }"
    />
</template>

<script setup lang="ts">
import { FoProgress } from 'flyonui-vue';
</script>
