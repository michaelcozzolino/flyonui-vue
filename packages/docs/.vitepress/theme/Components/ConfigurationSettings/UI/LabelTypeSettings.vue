<template>
    <FoButton v-for="labelType in labelTypes"
              :key="labelType"
              :color="labelType === selectedLabelType ? 'warning' : 'primary'"
              size="extraSmall"
              @click="selectedLabelType = labelType"
    >
        {{ labelType }}
    </FoButton>
</template>

<script setup lang="ts">
import type { GlobalLabelType } from 'flyonui-vue';
import { FoButton }             from 'flyonui-vue';

const selectedLabelType = defineModel<GlobalLabelType>({ required: true });

const labelTypes: GlobalLabelType[] = ['text', 'floating'];
</script>
