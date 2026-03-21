<template>
    <FoInputFile label="Pick a file"
                 helper-text="Helper text"
                 is-valid
                 @upload:file="file = $event"
    />

    <FoInputFile :label="{ text: 'Upload', type: 'floating' }"
                 helper-text="Helper text"
                 is-valid
                 @upload:file="file = $event"
    />

    <FoInputFile label="Pick a file"
                 helper-text="Helper text"
                 :is-valid="false"
                 @upload:file="file = $event"
    />

    <FoInputFile :label="{ text: 'Upload', type: 'floating' }"
                 helper-text="Helper text"
                 :is-valid="false"
                 @upload:file="file = $event"
    />
</template>

<script setup lang="ts">
import { FoInputFile } from 'flyonui-vue';
import { ref }         from 'vue';

const file = ref<File | null>(null);
</script>
