<template>
    <FoInputFile size="extraSmall"
                 @upload:file="file = $event"
    />

    <FoInputFile size="small"
                 @upload:file="file = $event"
    />

    <FoInputFile @upload:file="file = $event" />

    <FoInputFile size="large"
                 @upload:file="file = $event"
    />

    <FoInputFile size="extraLarge"
                 @upload:file="file = $event"
    />
</template>

<script setup lang="ts">
import { FoInputFile } from 'flyonui-vue';
import { ref }         from 'vue';

const file = ref<File | null>(null);
</script>
