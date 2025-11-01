<template>
    <FoButton color="primary"
              @click.prevent="isOpen = true; placement = 'top-start'"
    >
        Top start
    </FoButton>

    <FoButton color="primary"
              @click.prevent="isOpen = true; placement = 'top-center'"
    >
        Top center (default)
    </FoButton>

    <FoButton color="primary"
              @click.prevent="isOpen = true; placement = 'top-end'"
    >
        Top end
    </FoButton>

    <FoButton color="primary"
              @click.prevent="isOpen = true; placement = 'middle-start'"
    >
        Middle start
    </FoButton>

    <FoButton color="primary"
              @click.prevent="isOpen = true; placement = 'middle-center'"
    >
        Middle center
    </FoButton>

    <FoButton color="primary"
              @click.prevent="isOpen = true; placement = 'middle-end'"
    >
        Middle end
    </FoButton>

    <FoButton color="primary"
              @click.prevent="isOpen = true; placement = 'bottom-start'"
    >
        Bottom start
    </FoButton>

    <FoButton color="primary"
              @click.prevent="isOpen = true; placement = 'bottom-center'"
    >
        Bottom center
    </FoButton>

    <FoButton color="primary"
              @click.prevent="isOpen = true; placement = 'bottom-end'"
    >
        Bottom end
    </FoButton>

    <FoModal v-model="isOpen"
             :placement="placement"
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
import type { ModalPlacement }             from 'flyonui-vue';
import { FoButton, FoModal, FoModalTitle } from 'flyonui-vue';
import { ref }                             from 'vue';

const isOpen    = ref<boolean>(false);
const placement = ref<ModalPlacement>('top-center');
</script>
