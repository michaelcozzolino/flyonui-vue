<template>
    <FoTooltip>
        <FoButton icon="tabler:chevron-up" />

        <template #body>
            <span class="text-lg font-medium">Tooltip title</span>
            <p class="text-base pt-4">
                This text serves as placeholder content for the tooltip, showcasing its overall look in the user
                interface.
            </p>
        </template>
    </FoTooltip>
</template>

<script setup lang="ts">
import { FoButton, FoTooltip } from 'flyonui-vue';
</script>
