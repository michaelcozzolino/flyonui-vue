<template>
    <FoButton :icon="copied ? 'tabler:copy-check' : 'tabler:copy'"
              color="info"
              size="medium"
              @click.prevent="copy(text)"
    />
</template>

<script setup lang="ts">
import { useClipboard } from '@vueuse/core';
import { FoButton }     from 'flyonui-vue';

interface Props {
    text: string;
}

defineProps<Props>();

const { copy, copied } = useClipboard({ copiedDuring: 1000 });
</script>
