<template>
    <FoButton color="primary"
              @click.prevent="isOpen = true; scrollingType = 'modal-body'"
    >
        Modal body (Default)
    </FoButton>

    <FoButton color="primary"
              @click.prevent="isOpen = true; scrollingType = 'body'"
    >
        Document body and modal body
    </FoButton>

    <FoButton color="primary"
              @click.prevent="isOpen = true; scrollingType = 'document-body'"
    >
        Document body
    </FoButton>

    <FoButton color="primary"
              @click.prevent="isOpen = true; scrollingType = 'viewport'"
    >
        Viewport
    </FoButton>

    <FoModal v-model="isOpen"
             :scrolling-type="scrollingType"
    >
        <template #header>
            <FoModalTitle>
                Dialog Title
            </FoModalTitle>
        </template>

        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.Praesent commodo cursus magna, vel scelerisque
        nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctorAenean lacinia
        bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed
        odio dui. Donec ullamcorper nulla non metus auctor fringilla.Cras mattis consectetur purus sit amet fermentum.
        Cras justo odio, dapibus ac facilisis in, egestas eget quam.<br>Morbi leo risus, porta ac consectetur ac,
        vestibulum at eros.Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
        vel augue laoreet rutrum faucibus dolor auctor.Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
        cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
        auctor fringilla.Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
        egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.raesent commodo cursus magna,
        vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
        auctor.Aenean lacinia bibendum nulla sed consectetur.<br>Praesent commodo cursus magna, vel scelerisque nisl
        consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.Cras mattis consectetur
        purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
        ac consectetur ac, vestibulum at eros.Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.lacinia bibendum nulla sed consectetur.
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper
        nulla non metus auctor fringilla.Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
        facilisis in, egestas eget quam.<br>Morbi leo risus, porta ac consectetur ac, vestibulum at eros.Praesent
        commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum
        faucibus dolor auctor.Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
        scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.Cras
        mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.Praesent commodo cursus magna, vel scelerisque
        nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.Aenean lacinia
        bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed
        odio dui. Donec ullamcorper nulla non metus auctor fringilla.

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
import type { ModalScrollingType }         from 'flyonui-vue';
import { FoButton, FoModal, FoModalTitle } from 'flyonui-vue';
import { ref }                             from 'vue';

const isOpen        = ref<boolean>(false);
const scrollingType = ref<ModalScrollingType>('modal-body');
</script>
