<template>
    <FoTooltip>
        <FoButton icon="tabler:chevron-up"
                  shape="square"
        />

        <template #body>
            Default
        </template>
    </FoTooltip>

    <FoTooltip color="primary">
        <FoButton icon="tabler:chevron-up"
                  color="primary"
                  shape="square"
        />

        <template #body>
            Primary
        </template>
    </FoTooltip>

    <FoTooltip color="secondary">
        <FoButton icon="tabler:chevron-up"
                  color="secondary"
                  shape="square"
        />

        <template #body>
            Secondary
        </template>
    </FoTooltip>

    <FoTooltip color="accent">
        <FoButton icon="tabler:chevron-up"
                  color="accent"
                  shape="square"
        />

        <template #body>
            Accent
        </template>
    </FoTooltip>

    <FoTooltip color="info">
        <FoButton icon="tabler:chevron-up"
                  color="info"
                  shape="square"
        />

        <template #body>
            Info
        </template>
    </FoTooltip>

    <FoTooltip color="success">
        <FoButton icon="tabler:chevron-up"
                  color="success"
                  shape="square"
        />

        <template #body>
            Success
        </template>
    </FoTooltip>

    <FoTooltip color="warning">
        <FoButton icon="tabler:chevron-up"
                  color="warning"
                  shape="square"
        />

        <template #body>
            Warning
        </template>
    </FoTooltip>

    <FoTooltip color="error">
        <FoButton icon="tabler:chevron-up"
                  color="error"
                  shape="square"
        />

        <template #body>
            Error
        </template>
    </FoTooltip>
</template>

<script setup lang="ts">
import { FoButton, FoTooltip } from 'flyonui-vue';
</script>
