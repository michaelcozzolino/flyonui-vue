<template>
    <FoButton :icon="copied ? 'tabler:copy-check' : 'tabler:copy'"
              color="info"
              preset="gradient"
              size="medium"
              :disabled="disabled"
              @click.prevent="copy(text)"
    />
</template>

<script setup lang="ts">
import type { Disableable } from 'flyonui-vue';
import { useClipboard }     from '@vueuse/core';
import { FoButton }         from 'flyonui-vue';

interface Props extends Disableable {
    text: string;
}

defineProps<Props>();

const { copy, copied } = useClipboard({ copiedDuring: 1000 });
</script>
