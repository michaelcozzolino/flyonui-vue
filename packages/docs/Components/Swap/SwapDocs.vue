<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   api-docs-component-names="FoSwap"
    />
</template>

<script setup lang="ts">
import type { ComponentDocsPreview } from '@/.vitepress/theme/Components/ComponentDocs/Types/ComponentDocs';
import type { ApiType }              from '@/Api/Types/Api.ts';
import type { Default }              from 'flyonui-vue';
import ComponentDocs                 from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import DefaultSwap                   from '@/Components/Swap/DefaultSwap.vue';
import DefaultSwapRaw                from '@/Components/Swap/DefaultSwap.vue?raw';
import SwapFlip                      from '@/Components/Swap/SwapFlip.vue';
import SwapFlipRaw                   from '@/Components/Swap/SwapFlip.vue?raw';
import SwapRotation                  from '@/Components/Swap/SwapRotation.vue';
import SwapRotationRaw               from '@/Components/Swap/SwapRotation.vue?raw';
import { computed }                  from 'vue';

type Section = Default | 'rotation' | 'flip' | ApiType;

interface Props {
    section: Section;
}

defineProps<Props>();

const previews = computed(() => {
    return new Map<Section, ComponentDocsPreview>([
        [
            'default',
            {
                code:      DefaultSwapRaw,
                component: DefaultSwap,
            },
        ],
        [
            'rotation',
            {
                code:      SwapRotationRaw,
                component: SwapRotation,
            },
        ],
        [
            'flip',
            {
                code:      SwapFlipRaw,
                component: SwapFlip,
            },
        ],
    ]);
});
</script>
