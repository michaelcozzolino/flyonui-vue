<template>
    <FoTooltip>
        <FoIconButton icon="tabler:chevron-up" />

        <template #body>
            <span class="text-lg font-medium">Tooltip title</span>
            <p class="text-base pt-4">
                This text serves as placeholder content for the tooltip, showcasing its overall look in the user
                interface.
            </p>
        </template>
    </FoTooltip>

    <FoTooltip color="primary">
        <FoIconButton icon="tabler:chevron-up"
                      color="primary"
        />

        <template #body>
            <span class="text-lg font-medium">Tooltip title</span>
            <p class="text-base pt-4">
                This text serves as placeholder content for the tooltip, showcasing its overall look in the user
                interface.
            </p>
        </template>
    </FoTooltip>

    <FoTooltip color="secondary">
        <FoIconButton icon="tabler:chevron-up"
                      color="secondary"
        />

        <template #body>
            <span class="text-lg font-medium">Tooltip title</span>
            <p class="text-base pt-4">
                This text serves as placeholder content for the tooltip, showcasing its overall look in the user
                interface.
            </p>
        </template>
    </FoTooltip>

    <FoTooltip color="accent">
        <FoIconButton icon="tabler:chevron-up"
                      color="accent"
        />

        <template #body>
            <span class="text-lg font-medium">Tooltip title</span>
            <p class="text-base pt-4">
                This text serves as placeholder content for the tooltip, showcasing its overall look in the user
                interface.
            </p>
        </template>
    </FoTooltip>

    <FoTooltip color="info">
        <FoIconButton icon="tabler:chevron-up"
                      color="info"
        />

        <template #body>
            <span class="text-lg font-medium">Tooltip title</span>
            <p class="text-base pt-4">
                This text serves as placeholder content for the tooltip, showcasing its overall look in the user
                interface.
            </p>
        </template>
    </FoTooltip>

    <FoTooltip color="success">
        <FoIconButton icon="tabler:chevron-up"
                      color="success"
        />

        <template #body>
            <span class="text-lg font-medium">Tooltip title</span>
            <p class="text-base pt-4">
                This text serves as placeholder content for the tooltip, showcasing its overall look in the user
                interface.
            </p>
        </template>
    </FoTooltip>

    <FoTooltip color="warning">
        <FoIconButton icon="tabler:chevron-up"
                      color="warning"
        />

        <template #body>
            <span class="text-lg font-medium">Tooltip title</span>
            <p class="text-base pt-4">
                This text serves as placeholder content for the tooltip, showcasing its overall look in the user
                interface.
            </p>
        </template>
    </FoTooltip>

    <FoTooltip color="error">
        <FoIconButton icon="tabler:chevron-up"
                      color="error"
        />

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
import { FoIconButton, FoTooltip } from 'flyonui-vue';
</script>
