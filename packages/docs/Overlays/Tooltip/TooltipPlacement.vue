<template>
    <FoTooltip placement="left">
        <FoButton icon="tabler:chevron-left"
                  shape="square"
        />

        <template #body>
            Left
        </template>
    </FoTooltip>

    <FoTooltip>
        <FoButton icon="tabler:chevron-up"
                  shape="square"
        />

        <template #body>
            Top
        </template>
    </FoTooltip>

    <FoTooltip placement="bottom">
        <FoButton icon="tabler:chevron-down"
                  shape="square"
        />

        <template #body>
            Bottom
        </template>
    </FoTooltip>

    <FoTooltip placement="right">
        <FoButton icon="tabler:chevron-right"
                  shape="square"
        />

        <template #body>
            Right
        </template>
    </FoTooltip>
</template>

<script setup lang="ts">
import { FoButton, FoTooltip } from 'flyonui-vue';
</script>
