<template>
    <CodePreview title="TS"
                 lang="ts"
                 :code="ConfigurationExampleRaw.replace('// @ts-expect-error E.G', '')"
    />
</template>

<script setup lang="ts">
import CodePreview             from '@/.vitepress/theme/Components/ComponentPreview/UI/CodePreview.vue';
import ConfigurationExampleRaw from './ConfigurationExample.ts?raw';
</script>
