<template>
    <FoProgress class="w-52"
                :value="{ value: 25, label: { title: 'Title', position: 'left' } }"
    />

    <FoProgress class="w-52"
                :value="{ value: 50, label: { title: 'Title', position: 'left' } }"
    />

    <FoProgress class="w-52"
                :value="{ value: 75, label: { title: 'Title', position: 'left' } }"
    />

    <FoProgress class="w-52"
                :value="{ value: 100, label: { title: 'Title', position: 'left' } }"
    />

    <FoProgress class="w-52"
                :value="{ value: 25, label: { title: 'Title', position: 'right' } }"
    />

    <FoProgress class="w-52"
                :value="{ value: 50, label: { title: 'Title', position: 'right' } }"
    />

    <FoProgress class="w-52"
                :value="{ value: 75, label: { title: 'Title', position: 'right' } }"
    />

    <FoProgress class="w-52"
                :value="{ value: 100, label: { title: 'Title', position: 'right' } }"
    />
</template>

<script setup lang="ts">
import { FoProgress } from 'flyonui-vue';
</script>
