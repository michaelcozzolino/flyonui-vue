<template>
    <FoButton :icon="copied ? 'tabler:copy-check' : 'tabler:copy'"
              color="info"
              size="medium"
              :is-disabled="isDisabled"
              @click.prevent="copy(text)"
    />
</template>

<script setup lang="ts">
import type { ButtonProps } from 'flyonui-vue';
import { useClipboard }     from '@vueuse/core';
import { FoButton }         from 'flyonui-vue';

interface Props extends Pick<ButtonProps, 'isDisabled'> {
    text: string;
}

defineProps<Props>();

const { copy, copied } = useClipboard({ copiedDuring: 1000 });
</script>
