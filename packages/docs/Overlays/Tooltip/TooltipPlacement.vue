<template>
    <FoTooltip placement="left">
        <FoIconButton icon="tabler:chevron-left" />

        <template #body>
            Left
        </template>
    </FoTooltip>

    <FoTooltip>
        <FoIconButton icon="tabler:chevron-up" />

        <template #body>
            Top
        </template>
    </FoTooltip>

    <FoTooltip placement="bottom">
        <FoIconButton icon="tabler:chevron-down" />

        <template #body>
            Bottom
        </template>
    </FoTooltip>

    <FoTooltip placement="right">
        <FoIconButton icon="tabler:chevron-right" />

        <template #body>
            Right
        </template>
    </FoTooltip>
</template>

<script setup lang="ts">
import { FoIconButton, FoTooltip } from 'flyonui-vue';
</script>
