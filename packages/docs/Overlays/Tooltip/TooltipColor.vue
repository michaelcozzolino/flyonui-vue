<template>
    <FoTooltip>
        <FoIconButton icon="tabler:chevron-up" />

        <template #body>
            Default
        </template>
    </FoTooltip>

    <FoTooltip color="primary">
        <FoIconButton icon="tabler:chevron-up"
                      color="primary"
        />

        <template #body>
            Primary
        </template>
    </FoTooltip>

    <FoTooltip color="secondary">
        <FoIconButton icon="tabler:chevron-up"
                      color="secondary"
        />

        <template #body>
            Secondary
        </template>
    </FoTooltip>

    <FoTooltip color="accent">
        <FoIconButton icon="tabler:chevron-up"
                      color="accent"
        />

        <template #body>
            Accent
        </template>
    </FoTooltip>

    <FoTooltip color="info">
        <FoIconButton icon="tabler:chevron-up"
                      color="info"
        />

        <template #body>
            Info
        </template>
    </FoTooltip>

    <FoTooltip color="success">
        <FoIconButton icon="tabler:chevron-up"
                      color="success"
        />

        <template #body>
            Success
        </template>
    </FoTooltip>

    <FoTooltip color="warning">
        <FoIconButton icon="tabler:chevron-up"
                      color="warning"
        />

        <template #body>
            Warning
        </template>
    </FoTooltip>

    <FoTooltip color="error">
        <FoIconButton icon="tabler:chevron-up"
                      color="error"
        />

        <template #body>
            Error
        </template>
    </FoTooltip>
</template>

<script setup lang="ts">
import { FoIconButton, FoTooltip } from 'flyonui-vue';
</script>
