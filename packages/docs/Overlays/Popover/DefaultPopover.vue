<template>
    <FoPopover>
        <FoIconButton icon="tabler:chevron-up" />

        <template #body>
            <span class="text-base-content text-lg font-medium">Popover title</span>
            <p class="text-base-content/80 text-base pt-4">
                This text serves as placeholder content for the popover, showcasing its overall look in the user interface.
            </p>
        </template>
    </FoPopover>
</template>

<script setup lang="ts">
import { FoIconButton, FoPopover } from 'flyonui-vue';
</script>
