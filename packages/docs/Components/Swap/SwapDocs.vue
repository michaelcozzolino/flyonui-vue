<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   api-docs-component-names="FoSwap"
    />
</template>

<script setup lang="ts">
import type { Default }                 from 'flyonui-vue';
import type { FrameworkSectionPreview } from '@/.vitepress/theme/Components/Preview/Types/Preview';
import type { ApiType }                 from '@/Api/Types/Api.ts';
import { computed }                     from 'vue';
import ComponentDocs                    from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import DefaultSwap                      from '@/Components/Swap/DefaultSwap.vue';
import DefaultSwapRaw                   from '@/Components/Swap/DefaultSwap.vue?raw';
import SwapFlip                         from '@/Components/Swap/SwapFlip.vue';
import SwapFlipRaw                      from '@/Components/Swap/SwapFlip.vue?raw';
import SwapRotation                     from '@/Components/Swap/SwapRotation.vue';
import SwapRotationRaw                  from '@/Components/Swap/SwapRotation.vue?raw';

type Section = Default | 'rotation' | 'flip' | ApiType;

interface Props {
    section: Section;
}

defineProps<Props>();

const previews = computed(() => {
    return new Map<Section, FrameworkSectionPreview>([
        [
            'default',
            {
                vue: {
                    codePreview: DefaultSwapRaw,
                    component:   DefaultSwap,
                },
            },
        ],
        [
            'rotation',
            {
                vue: {
                    codePreview: SwapRotationRaw,
                    component:   SwapRotation,
                },
            },
        ],
        [
            'flip',
            {
                vue: {
                    codePreview: SwapFlipRaw,
                    component:   SwapFlip,
                },
            },
        ],
    ]);
});
</script>
