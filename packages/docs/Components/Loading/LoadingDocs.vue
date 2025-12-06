<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   api-docs-component-names="FoLoading"
    />
</template>

<script setup lang="ts">
import type { ComponentDocsPreview } from '@/.vitepress/theme/Components/ComponentDocs/Types/ComponentDocs';
import type { ApiType }              from '@/Api/Types/Api';
import ComponentDocs                 from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import LoadingAnimation              from '@/Components/Loading/LoadingAnimation.vue';
import LoadingAnimationRaw           from '@/Components/Loading/LoadingAnimation.vue?raw';
import LoadingColor                  from '@/Components/Loading/LoadingColor.vue';
import LoadingColorRaw               from '@/Components/Loading/LoadingColor.vue?raw';
import { computed }                  from 'vue';

type Section = 'animation' | 'color' | ApiType;

interface Props {
    section: Section;
}

defineProps<Props>();

const excludeFromTests = true;

const previews = computed(() => {
    return new Map<Section, ComponentDocsPreview>([
        [
            'animation',
            {
                grid:      { columns: 5, rows: 6 },
                code:      LoadingAnimationRaw,
                component: LoadingAnimation,
                excludeFromTests,
            },
        ],
        [
            'color',
            {
                code:      LoadingColorRaw,
                component: LoadingColor,
                excludeFromTests,
            },
        ],
    ]);
});
</script>
