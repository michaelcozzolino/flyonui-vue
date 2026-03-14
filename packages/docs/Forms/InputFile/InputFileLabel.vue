<template>
    <FoInputFile label="Pick a file"
                 @upload:file="file = $event"
    />

    <FoInputFile :label="{ text: 'Upload', type: 'floating' }"
                 @upload:file="file = $event"
    />
</template>

<script setup lang="ts">
import { FoInputFile } from 'flyonui-vue';
import { ref }         from 'vue';

const file = ref<File | null>(null);
</script>
