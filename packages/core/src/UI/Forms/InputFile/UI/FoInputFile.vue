<template>
    <FoInputFiles v-bind="props"
                  :multiple="false"
                  @upload:files="uploadFile"
    />
</template>

<script setup lang="ts">
import type { InputFileProps } from '@/UI/Forms';
import { FoInputFiles  }       from '@/UI/Forms';

const props = withDefaults(defineProps<InputFileProps>(), {
    isValid: undefined,
});

const emit = defineEmits<{
    (e: 'upload:file', file: File): void;
}>();

function uploadFile(files: FileList): void {
    const file = files.item(0);

    if (file === null) {
        throw new Error('Received an upload file event but no file has been uploaded.');
    }

    if (files.length > 1) {
        throw new Error('Received an upload file event with multiple files.');
    }

    emit('upload:file', file);
}
</script>
