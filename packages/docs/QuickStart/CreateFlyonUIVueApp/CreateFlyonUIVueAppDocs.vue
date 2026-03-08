<template>
    <CodePreview title="TS"
                 language="ts"
                 :code="ConfigurationExampleRaw.replace('// @ts-expect-error E.G', '')"
    />
</template>

<script setup lang="ts">
import CodePreview             from '@/.vitepress/theme/Components/Preview/UI/CodePreview.vue';
import ConfigurationExampleRaw from './ConfigurationExample.ts?raw';
</script>
