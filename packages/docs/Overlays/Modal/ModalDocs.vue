<template>
    <!--    todo: screenshot tests in some ways -->
    <ComponentPreview v-if="section === 'default'"
                      :code="DefaultModalRaw"
                      :component="DefaultModal"
    />

    <ComponentPreview v-else-if="section === 'fullscreen'"
                      :code="FullscreenModalRaw"
                      :component="FullscreenModal"
    />

    <ComponentPreview v-else-if="section === 'transparent'"
                      :code="TransparentModalRaw"
                      :component="TransparentModal"
    />

    <ComponentPreview v-else-if="section === 'size'"
                      :code="ModalSizeRaw"
                      :component="ModalSize"
    />

    <ComponentPreview v-else-if="section === 'transition'"
                      :code="ModalTransitionRaw"
                      :component="ModalTransition"
    />

    <ComponentPreview v-else-if="section === 'scrolling'"
                      :code="ModalScrollingRaw"
                      :component="ModalScrolling"
    />

    <ComponentPreview v-else-if="section === 'placement'"
                      :code="ModalPlacementRaw"
                      :component="ModalPlacement"
    />

    <ComponentPreview v-else-if="section === 'video'"
                      :code="VideoModalRaw"
                      :component="VideoModal"
    />

    <ComponentPreview v-else-if="section === 'backdrop-color'"
                      :code="ModalBackdropColorRaw"
                      :component="ModalBackdropColor"
    />

    <ComponentPreview v-else-if="section === 'custom-backdrop-color'"
                      :code="CustomModalBackdropColorRaw"
                      :component="CustomModalBackdropColor"
    />

    <ComponentPreview v-else-if="section === 'backdrop'"
                      :code="ModalBackdropRaw"
                      :component="ModalBackdrop"
    />

    <ComponentPreview v-else-if="section === 'close-on-escape'"
                      :code="CloseOnEscapeModalRaw"
                      :component="CloseOnEscapeModal"
    />

    <ComponentsApiDocs v-else
                       :section="section"
                       :component-names="['FoModal', 'FoModalTitle']"
    />
</template>

<script setup lang="ts">
import type { ApiType }            from '@/Api/Types/Api.ts';
import type { Default }            from 'flyonui-vue';
import ComponentPreview            from '@/.vitepress/theme/Components/Preview/UI/ComponentPreview.vue';
import ComponentsApiDocs           from '@/Api/UI/ComponentsApiDocs.vue';
import CloseOnEscapeModal          from '@/Overlays/Modal/CloseOnEscapeModal.vue';
import CloseOnEscapeModalRaw       from '@/Overlays/Modal/CloseOnEscapeModal.vue?raw';
import CustomModalBackdropColor    from '@/Overlays/Modal/CustomModalBackdropColor.vue';
import CustomModalBackdropColorRaw from '@/Overlays/Modal/CustomModalBackdropColor.vue?raw';
import DefaultModal                from '@/Overlays/Modal/DefaultModal.vue';
import DefaultModalRaw             from '@/Overlays/Modal/DefaultModal.vue?raw';
import FullscreenModal             from '@/Overlays/Modal/FullscreenModal.vue';
import FullscreenModalRaw          from '@/Overlays/Modal/FullscreenModal.vue?raw';
import ModalBackdrop               from '@/Overlays/Modal/ModalBackdrop.vue';
import ModalBackdropRaw            from '@/Overlays/Modal/ModalBackdrop.vue?raw';
import ModalBackdropColor          from '@/Overlays/Modal/ModalBackdropColor.vue';
import ModalBackdropColorRaw       from '@/Overlays/Modal/ModalBackdropColor.vue?raw';
import ModalPlacement              from '@/Overlays/Modal/ModalPlacement.vue';
import ModalPlacementRaw           from '@/Overlays/Modal/ModalPlacement.vue?raw';
import ModalScrolling              from '@/Overlays/Modal/ModalScrolling.vue';
import ModalScrollingRaw           from '@/Overlays/Modal/ModalScrolling.vue?raw';
import ModalSize                   from '@/Overlays/Modal/ModalSize.vue';
import ModalSizeRaw                from '@/Overlays/Modal/ModalSize.vue?raw';
import ModalTransition             from '@/Overlays/Modal/ModalTransition.vue';
import ModalTransitionRaw          from '@/Overlays/Modal/ModalTransition.vue?raw';
import TransparentModal            from '@/Overlays/Modal/TransparentModal.vue';
import TransparentModalRaw         from '@/Overlays/Modal/TransparentModal.vue?raw';
import VideoModal                  from '@/Overlays/Modal/VideoModal.vue';
import VideoModalRaw               from '@/Overlays/Modal/VideoModal.vue?raw';

interface Props {
    section: Default
        | 'fullscreen'
        | 'transparent'
        | 'size'
        | 'transition'
        | 'scrolling'
        | 'placement'
        | 'video'
        | 'backdrop-color'
        | 'custom-backdrop-color'
        | 'backdrop'
        | 'close-on-escape'
        | ApiType;
}

defineProps<Props>();
</script>
