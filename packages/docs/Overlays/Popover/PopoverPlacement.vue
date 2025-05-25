<template>
    <FoPopover placement="left">
        <FoButton icon="tabler:chevron-left"
                  shape="square"
        />

        <template #body>
            <span class="text-lg font-medium">Popover title</span>
            <p class="text-base pt-4">
                This text serves as placeholder content for the popover, showcasing its overall look in the user interface.
            </p>
        </template>
    </FoPopover>

    <FoPopover>
        <FoButton icon="tabler:chevron-up"
                  shape="square"
        />

        <template #body>
            <span class="text-lg font-medium">Popover title</span>
            <p class="text-base pt-4">
                This text serves as placeholder content for the popover, showcasing its overall look in the user interface.
            </p>
        </template>
    </FoPopover>

    <FoPopover placement="bottom">
        <FoButton icon="tabler:chevron-down"
                  shape="square"
        />

        <template #body>
            <span class="text-lg font-medium">Popover title</span>
            <p class="text-base pt-4">
                This text serves as placeholder content for the popover, showcasing its overall look in the user interface.
            </p>
        </template>
    </FoPopover>

    <FoPopover placement="right">
        <FoButton icon="tabler:chevron-right"
                  shape="square"
        />

        <template #body>
            <span class="text-lg font-medium">Popover title</span>
            <p class="text-base pt-4">
                This text serves as placeholder content for the popover, showcasing its overall look in the user interface.
            </p>
        </template>
    </FoPopover>
</template>

<script setup lang="ts">
import { FoButton, FoPopover } from 'flyonui-vue';
</script>
