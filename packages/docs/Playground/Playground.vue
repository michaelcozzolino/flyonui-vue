<template>
    <div id="playground" />
</template>

<script setup lang="ts">
import sdk           from '@stackblitz/sdk';
import { onMounted } from 'vue';

onMounted(() => {
    sdk.embedProjectId(
        'playground',
        'vitejs-vite-fwfuujjb',
        {
            openFile: 'src/components/TestComponent.vue',
            height:   600,
        },
    );
});
</script>
