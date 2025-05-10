<template>
    <FoPopover placement="left">
        <FoIconButton icon="tabler:chevron-left" />

        <template #body>
            <span class="text-lg font-medium">Popover title</span>
            <p class="text-base pt-4">
                This text serves as placeholder content for the popover, showcasing its overall look in the user interface.
            </p>
        </template>
    </FoPopover>

    <FoPopover>
        <FoIconButton icon="tabler:chevron-up" />

        <template #body>
            <span class="text-lg font-medium">Popover title</span>
            <p class="text-base pt-4">
                This text serves as placeholder content for the popover, showcasing its overall look in the user interface.
            </p>
        </template>
    </FoPopover>

    <FoPopover placement="bottom">
        <FoIconButton icon="tabler:chevron-down" />

        <template #body>
            <span class="text-lg font-medium">Popover title</span>
            <p class="text-base pt-4">
                This text serves as placeholder content for the popover, showcasing its overall look in the user interface.
            </p>
        </template>
    </FoPopover>

    <FoPopover placement="right">
        <FoIconButton icon="tabler:chevron-right" />

        <template #body>
            <span class="text-lg font-medium">Popover title</span>
            <p class="text-base pt-4">
                This text serves as placeholder content for the popover, showcasing its overall look in the user interface.
            </p>
        </template>
    </FoPopover>
</template>

<script setup lang="ts">
import { FoIconButton, FoPopover } from 'flyonui-vue';
</script>
