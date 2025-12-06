<template>
    <!--    todo: screenshot tests in some ways -->
    <ComponentDocs :previews="previews"
                   :section="section"
                   :api-docs-component-names="['FoModal', 'FoModalTitle']"
    />
</template>

<script setup lang="ts">
import type { ComponentDocsPreview } from '@/.vitepress/theme/Components/ComponentDocs/Types/ComponentDocs';
import type { ApiType }              from '@/Api/Types/Api.ts';
import type { Default }              from 'flyonui-vue';
import ComponentDocs                 from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import CloseOnEscapeModal            from '@/Overlays/Modal/CloseOnEscapeModal.vue';
import CloseOnEscapeModalRaw         from '@/Overlays/Modal/CloseOnEscapeModal.vue?raw';
import CustomModalBackdropColor      from '@/Overlays/Modal/CustomModalBackdropColor.vue';
import CustomModalBackdropColorRaw   from '@/Overlays/Modal/CustomModalBackdropColor.vue?raw';
import DefaultModal                  from '@/Overlays/Modal/DefaultModal.vue';
import DefaultModalRaw               from '@/Overlays/Modal/DefaultModal.vue?raw';
import FullscreenModal               from '@/Overlays/Modal/FullscreenModal.vue';
import FullscreenModalRaw            from '@/Overlays/Modal/FullscreenModal.vue?raw';
import ModalBackdrop                 from '@/Overlays/Modal/ModalBackdrop.vue';
import ModalBackdropRaw              from '@/Overlays/Modal/ModalBackdrop.vue?raw';
import ModalBackdropColor            from '@/Overlays/Modal/ModalBackdropColor.vue';
import ModalBackdropColorRaw         from '@/Overlays/Modal/ModalBackdropColor.vue?raw';
import ModalPlacement                from '@/Overlays/Modal/ModalPlacement.vue';
import ModalPlacementRaw             from '@/Overlays/Modal/ModalPlacement.vue?raw';
import ModalScrolling                from '@/Overlays/Modal/ModalScrolling.vue';
import ModalScrollingRaw             from '@/Overlays/Modal/ModalScrolling.vue?raw';
import ModalSize                     from '@/Overlays/Modal/ModalSize.vue';
import ModalSizeRaw                  from '@/Overlays/Modal/ModalSize.vue?raw';
import ModalTransition               from '@/Overlays/Modal/ModalTransition.vue';
import ModalTransitionRaw            from '@/Overlays/Modal/ModalTransition.vue?raw';
import TransparentModal              from '@/Overlays/Modal/TransparentModal.vue';
import TransparentModalRaw           from '@/Overlays/Modal/TransparentModal.vue?raw';
import VideoModal                    from '@/Overlays/Modal/VideoModal.vue';
import VideoModalRaw                 from '@/Overlays/Modal/VideoModal.vue?raw';
import { computed }                  from 'vue';

type Section = Default
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

interface Props {
    section: Section;
}

defineProps<Props>();

const excludeFromTests = true;

const previews = computed(() => {
    return new Map<Section, ComponentDocsPreview>([
        [
            'default',
            {
                code:      DefaultModalRaw,
                component: DefaultModal,
                excludeFromTests,
            },
        ],
        [
            'fullscreen',
            {
                code:      FullscreenModalRaw,
                component: FullscreenModal,
                excludeFromTests,
            },
        ],
        [
            'transparent',
            {
                code:      TransparentModalRaw,
                component: TransparentModal,
                excludeFromTests,
            },
        ],
        [
            'size',
            {
                code:      ModalSizeRaw,
                component: ModalSize,
                excludeFromTests,
            },
        ],
        [
            'transition',
            {
                code:      ModalTransitionRaw,
                component: ModalTransition,
                excludeFromTests,
            },
        ],
        [
            'scrolling',
            {
                code:      ModalScrollingRaw,
                component: ModalScrolling,
                excludeFromTests,
            },
        ],
        [
            'placement',
            {
                code:      ModalPlacementRaw,
                component: ModalPlacement,
                excludeFromTests,
            },
        ],
        [
            'video',
            {
                code:      VideoModalRaw,
                component: VideoModal,
                excludeFromTests,
            },
        ],
        [
            'backdrop-color',
            {
                code:      ModalBackdropColorRaw,
                component: ModalBackdropColor,
                excludeFromTests,
            },
        ],
        [
            'custom-backdrop-color',
            {
                code:      CustomModalBackdropColorRaw,
                component: CustomModalBackdropColor,
                excludeFromTests,
            },
        ],
        [
            'backdrop',
            {
                code:      ModalBackdropRaw,
                component: ModalBackdrop,
                excludeFromTests,
            },
        ],
        [
            'close-on-escape',
            {
                code:      CloseOnEscapeModalRaw,
                component: CloseOnEscapeModal,
                excludeFromTests,
            },
        ],
    ]);
});
</script>
