<template>
    <FoButton @click.prevent="isOpen = true; backdropColor = undefined">
        Default
    </FoButton>

    <FoButton color="neutral"
              @click.prevent="isOpen = true; backdropColor = 'neutral'"
    >
        Neutral
    </FoButton>

    <FoButton color="primary"
              @click.prevent="isOpen = true; backdropColor = 'primary'"
    >
        Primary
    </FoButton>

    <FoButton color="secondary"
              @click.prevent="isOpen = true; backdropColor = 'secondary'"
    >
        Secondary
    </FoButton>

    <FoButton color="accent"
              @click.prevent="isOpen = true; backdropColor = 'accent'"
    >
        Accent
    </FoButton>

    <FoButton color="info"
              @click.prevent="isOpen = true; backdropColor = 'info'"
    >
        Info
    </FoButton>

    <FoButton color="success"
              @click.prevent="isOpen = true; backdropColor = 'success'"
    >
        Success
    </FoButton>

    <FoButton color="warning"
              @click.prevent="isOpen = true; backdropColor = 'warning'"
    >
        Warning
    </FoButton>

    <FoButton color="error"
              @click.prevent="isOpen = true; backdropColor = 'error'"
    >
        Error
    </FoButton>

    <FoModal v-model="isOpen"
             :backdrop="{ color: backdropColor }"
    >
        <template #header>
            <FoModalTitle>
                Dialog Title
            </FoModalTitle>
        </template>

        This is some placeholder content to show the scrolling behavior for modals. Instead of repeating the text in the
        modal, we use an inline style to set a minimum height, thereby extending the length of the overall modal and
        demonstrating the overflow scrolling. When content becomes longer than the height of the viewport, scrolling will
        move the modal as needed.

        <template #footer>
            <FoButton color="secondary"
                      preset="soft"
                      @click.prevent="isOpen = false"
            >
                Close
            </FoButton>

            <FoButton color="primary">
                Save changes
            </FoButton>
        </template>
    </FoModal>
</template>

<script setup lang="ts">
import type { Color }                      from 'flyonui-vue';
import { FoButton, FoModal, FoModalTitle } from 'flyonui-vue';
import { ref }                             from 'vue';

const isOpen        = ref<boolean>(false);
const backdropColor = ref<Color | undefined>(undefined);
</script>
