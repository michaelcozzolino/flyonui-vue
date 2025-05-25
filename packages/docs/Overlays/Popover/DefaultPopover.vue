<template>
    <FoPopover>
        <FoButton icon="tabler:chevron-up" />

        <template #body>
            <span class="text-lg font-medium">Popover title</span>
            <p class="text-base pt-4">
                This text serves as placeholder content for the popover, showcasing its overall look in the user
                interface.
            </p>
        </template>
    </FoPopover>
</template>

<script setup lang="ts">
import { FoButton, FoPopover } from 'flyonui-vue';
</script>
