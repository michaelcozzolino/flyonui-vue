<template>
    <FoProgress class="h-56"
                orientation="vertical"
                :value="{ value: 25, label: { title: 'Title', position: 'top' } }"
    />

    <FoProgress class="h-56"
                orientation="vertical"
                :value="{ value: 50, label: { title: 'Title', position: 'top' } }"
    />

    <FoProgress class="h-56"
                orientation="vertical"
                :value="{ value: 75, label: { title: 'Title', position: 'top' } }"
    />

    <FoProgress class="h-56"
                orientation="vertical"
                :value="{ value: 100, label: { title: 'Title', position: 'top' } }"
    />

    <FoProgress class="h-56"
                orientation="vertical"
                :value="{ value: 25, label: { title: 'Title', position: 'bottom' } }"
    />

    <FoProgress class="h-56"
                orientation="vertical"
                :value="{ value: 50, label: { title: 'Title', position: 'bottom' } }"
    />

    <FoProgress class="h-56"
                orientation="vertical"
                :value="{ value: 75, label: { title: 'Title', position: 'bottom' } }"
    />

    <FoProgress class="h-56"
                orientation="vertical"
                :value="{ value: 100, label: { title: 'Title', position: 'bottom' } }"
    />
</template>

<script setup lang="ts">
import { FoProgress } from 'flyonui-vue';
</script>
