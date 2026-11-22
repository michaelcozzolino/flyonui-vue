<template>
    <FoProgress :value="{ value: 25, label: { position: 'within' } }" />

    <FoProgress :value="{ value: 50, label: { position: 'within' } }" />

    <FoProgress :value="{ value: 75, label: { position: 'within' } }" />

    <FoProgress :value="{ value: 100, label: { position: 'within' } }" />
</template>

<script setup lang="ts">
import { FoProgress } from 'flyonui-vue';
</script>
