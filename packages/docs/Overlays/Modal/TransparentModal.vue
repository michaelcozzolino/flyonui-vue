<template>
    <FoButton color="primary"
              @click.prevent="isOpen = true"
    >
        Transparent modal
    </FoButton>

    <FoModal v-model="isOpen"
             is-transparent
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
import { FoButton, FoModal, FoModalTitle } from 'flyonui-vue';
import { ref }                             from 'vue';

const isOpen = ref<boolean>(false);
</script>
