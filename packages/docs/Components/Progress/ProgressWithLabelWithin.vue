<template>
    <FoProgress class="h-4"
                :value="{ value: 25, label: { position: 'within' } }"
    />

    <FoProgress class="h-4"
                :value="{ value: 50, label: { position: 'within' } }"
    />

    <FoProgress class="h-4"
                :value="{ value: 75, label: { position: 'within' } }"
    />

    <FoProgress class="h-4"
                :value="{ value: 100, label: { position: 'within' } }"
    />
</template>

<script setup lang="ts">
import { FoProgress } from 'flyonui-vue';
</script>
