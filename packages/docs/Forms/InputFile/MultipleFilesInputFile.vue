<template>
    <FoInputFiles @upload:files="files = $event" />
</template>

<script setup lang="ts">
import { FoInputFiles } from 'flyonui-vue';
import { ref }          from 'vue';

const files = ref<FileList | null>(null);
</script>
