<template>
    <FoTooltip placement="left">
        <FoIconButton icon="tabler:chevron-left" />

        <template #body>
            <span class="text-lg font-medium">Tooltip title</span>
            <p class="text-base pt-4">
                This text serves as placeholder content for the tooltip, showcasing its overall look in the user interface.
            </p>
        </template>
    </FoTooltip>

    <FoTooltip>
        <FoIconButton icon="tabler:chevron-up" />

        <template #body>
            <span class="text-lg font-medium">Tooltip title</span>
            <p class="text-base pt-4">
                This text serves as placeholder content for the tooltip, showcasing its overall look in the user interface.
            </p>
        </template>
    </FoTooltip>

    <FoTooltip placement="bottom">
        <FoIconButton icon="tabler:chevron-down" />

        <template #body>
            <span class="text-lg font-medium">Tooltip title</span>
            <p class="text-base pt-4">
                This text serves as placeholder content for the tooltip, showcasing its overall look in the user interface.
            </p>
        </template>
    </FoTooltip>

    <FoTooltip placement="right">
        <FoIconButton icon="tabler:chevron-right" />

        <template #body>
            <span class="text-lg font-medium">Tooltip title</span>
            <p class="text-base pt-4">
                This text serves as placeholder content for the tooltip, showcasing its overall look in the user interface.
            </p>
        </template>
    </FoTooltip>
</template>

<script setup lang="ts">
import { FoIconButton, FoTooltip } from 'flyonui-vue';
</script>
