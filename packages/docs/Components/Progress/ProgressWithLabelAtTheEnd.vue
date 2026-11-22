<template>
    <FoProgress class="w-52"
                :value="{ value: 25, label: { position: 'right' } }"
    />

    <FoProgress class="w-52"
                :value="{ value: 50, label: { position: 'right' } }"
    />

    <FoProgress class="w-52"
                :value="{ value: 75, label: { position: 'right' } }"
    />

    <FoProgress class="w-52"
                :value="{ value: 100, label: { position: 'right' } }"
    />
</template>

<script setup lang="ts">
import { FoProgress } from 'flyonui-vue';
</script>
