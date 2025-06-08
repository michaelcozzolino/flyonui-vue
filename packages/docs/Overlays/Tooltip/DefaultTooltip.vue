<template>
    <FoTooltip>
        <FoButton icon="tabler:chevron-up" />

        <template #body>
            Tooltip on top
        </template>
    </FoTooltip>
</template>

<script setup lang="ts">
import { FoButton, FoTooltip } from 'flyonui-vue';
</script>
