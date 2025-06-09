<template>
    <VueCodeHighlighter title="TS"
                        lang="ts"
                        :code="ConfigurationExampleRaw.replace('// @ts-expect-error E.G', '')"
    />
</template>

<script setup lang="ts">
import { VueCodeHighlighter }  from 'vue-code-highlighter';
import ConfigurationExampleRaw from './ConfigurationExample.ts?raw';
</script>
