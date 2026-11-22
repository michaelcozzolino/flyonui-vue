<template>
    <FoProgress class="w-52"
                :value="{ value: 25, label: { position: 'floating' } }"
    />

    <FoProgress class="w-52"
                :value="{ value: 50, label: { position: 'floating' } }"
    />

    <FoProgress class="w-52"
                :value="{ value: 75, label: { position: 'floating' } }"
    />

    <FoProgress class="w-52"
                :value="{ value: 100, label: { position: 'floating' } }"
    />
</template>

<script setup lang="ts">
import { FoProgress } from 'flyonui-vue';
</script>
