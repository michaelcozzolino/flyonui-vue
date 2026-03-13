<template>
    <FoInputFile is-disabled
                 @upload:file="file = $event"
    />
</template>

<script setup lang="ts">
import { FoInputFile } from 'flyonui-vue';
import { ref }         from 'vue';

const file = ref<File | null>(null);
</script>
