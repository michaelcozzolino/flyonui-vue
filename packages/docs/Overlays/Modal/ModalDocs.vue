<template>
    <!--    todo: screenshot tests in some ways -->
    <ComponentDocs :previews="previews"
                   :section="section"
                   :api-docs-component-names="['FoModal', 'FoModalTitle']"
    />
</template>

<script setup lang="ts">
import type { Default }                 from 'flyonui-vue';
import type { FrameworkSectionPreview } from '@/.vitepress/theme/Components/Preview/Types/Preview';
import type { ApiType }                 from '@/Api/Types/Api';
import { computed }                     from 'vue';
import ComponentDocs                    from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import CloseOnEscapeModal               from '@/Overlays/Modal/CloseOnEscapeModal.vue';
import CloseOnEscapeModalRaw            from '@/Overlays/Modal/CloseOnEscapeModal.vue?raw';
import CustomModalBackdropColor         from '@/Overlays/Modal/CustomModalBackdropColor.vue';
import CustomModalBackdropColorRaw      from '@/Overlays/Modal/CustomModalBackdropColor.vue?raw';
import DefaultModal                     from '@/Overlays/Modal/DefaultModal.vue';
import DefaultModalRaw                  from '@/Overlays/Modal/DefaultModal.vue?raw';
import FullscreenModal                  from '@/Overlays/Modal/FullscreenModal.vue';
import FullscreenModalRaw               from '@/Overlays/Modal/FullscreenModal.vue?raw';
import ModalBackdrop                    from '@/Overlays/Modal/ModalBackdrop.vue';
import ModalBackdropRaw                 from '@/Overlays/Modal/ModalBackdrop.vue?raw';
import ModalBackdropColor               from '@/Overlays/Modal/ModalBackdropColor.vue';
import ModalBackdropColorRaw            from '@/Overlays/Modal/ModalBackdropColor.vue?raw';
import ModalPlacement                   from '@/Overlays/Modal/ModalPlacement.vue';
import ModalPlacementRaw                from '@/Overlays/Modal/ModalPlacement.vue?raw';
import ModalScrolling                   from '@/Overlays/Modal/ModalScrolling.vue';
import ModalScrollingRaw                from '@/Overlays/Modal/ModalScrolling.vue?raw';
import ModalSize                        from '@/Overlays/Modal/ModalSize.vue';
import ModalSizeRaw                     from '@/Overlays/Modal/ModalSize.vue?raw';
import ModalTransition                  from '@/Overlays/Modal/ModalTransition.vue';
import ModalTransitionRaw               from '@/Overlays/Modal/ModalTransition.vue?raw';
import TransparentModal                 from '@/Overlays/Modal/TransparentModal.vue';
import TransparentModalRaw              from '@/Overlays/Modal/TransparentModal.vue?raw';
import VideoModal                       from '@/Overlays/Modal/VideoModal.vue';
import VideoModalRaw                    from '@/Overlays/Modal/VideoModal.vue?raw';

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
    return new Map<Section, FrameworkSectionPreview>([
        [
            'default',
            {
                excludeFromTests,
                vue: {
                    codePreview: DefaultModalRaw,
                    component:   DefaultModal,
                },
            },
        ],
        [
            'fullscreen',
            {
                excludeFromTests,
                vue: {
                    codePreview: FullscreenModalRaw,
                    component:   FullscreenModal,
                },
            },
        ],
        [
            'transparent',
            {
                excludeFromTests,
                vue: {
                    codePreview: TransparentModalRaw,
                    component:   TransparentModal,
                },
            },
        ],
        [
            'size',
            {
                excludeFromTests,
                vue: {
                    codePreview: ModalSizeRaw,
                    component:   ModalSize,
                },
            },
        ],
        [
            'transition',
            {
                excludeFromTests,
                vue: {
                    codePreview: ModalTransitionRaw,
                    component:   ModalTransition,
                },
            },
        ],
        [
            'scrolling',
            {
                excludeFromTests,
                vue: {
                    codePreview: ModalScrollingRaw,
                    component:   ModalScrolling,
                },
            },
        ],
        [
            'placement',
            {
                excludeFromTests,
                vue: {
                    codePreview: ModalPlacementRaw,
                    component:   ModalPlacement,
                },
            },
        ],
        [
            'video',
            {
                excludeFromTests,
                vue: {
                    codePreview: VideoModalRaw,
                    component:   VideoModal,
                },
            },
        ],
        [
            'backdrop-color',
            {
                excludeFromTests,
                vue: {
                    codePreview: ModalBackdropColorRaw,
                    component:   ModalBackdropColor,
                },
            },
        ],
        [
            'custom-backdrop-color',
            {
                excludeFromTests,
                vue: {
                    codePreview: CustomModalBackdropColorRaw,
                    component:   CustomModalBackdropColor,
                },
            },
        ],
        [
            'backdrop',
            {
                excludeFromTests,
                vue: {
                    codePreview: ModalBackdropRaw,
                    component:   ModalBackdrop,
                },
            },
        ],
        [
            'close-on-escape',
            {
                excludeFromTests,
                vue: {
                    codePreview: CloseOnEscapeModalRaw,
                    component:   CloseOnEscapeModal,
                },
            },
        ],
    ]);
});
</script>
