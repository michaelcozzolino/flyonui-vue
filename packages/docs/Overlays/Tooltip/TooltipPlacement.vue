<template>
    <FoTooltip placement="left">
        <FoButton icon="tabler:chevron-left"
                  shape="square"
        />

        <template #body>
            Left
        </template>
    </FoTooltip>

    <FoTooltip placement="left-start">
        <FoButton icon="tabler:chevron-left"
                  shape="square"
        />

        <template #body>
            Left start
        </template>
    </FoTooltip>

    <FoTooltip placement="left-end">
        <FoButton icon="tabler:chevron-left"
                  shape="square"
        />

        <template #body>
            Left end
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

    <FoTooltip placement="top-start">
        <FoButton icon="tabler:chevron-up"
                  shape="square"
        />

        <template #body>
            Top start
        </template>
    </FoTooltip>

    <FoTooltip placement="top-end">
        <FoButton icon="tabler:chevron-up"
                  shape="square"
        />

        <template #body>
            Top end
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

    <FoTooltip placement="bottom-start">
        <FoButton icon="tabler:chevron-down"
                  shape="square"
        />

        <template #body>
            Bottom start
        </template>
    </FoTooltip>

    <FoTooltip placement="bottom-end">
        <FoButton icon="tabler:chevron-down"
                  shape="square"
        />

        <template #body>
            Bottom end
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

    <FoTooltip placement="right-start">
        <FoButton icon="tabler:chevron-right"
                  shape="square"
        />

        <template #body>
            Right start
        </template>
    </FoTooltip>

    <FoTooltip placement="right-end">
        <FoButton icon="tabler:chevron-right"
                  shape="square"
        />

        <template #body>
            Right end
        </template>
    </FoTooltip>
</template>

<script setup lang="ts">
import { FoButton, FoTooltip } from 'flyonui-vue';
</script>
