<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   api-docs-component-names="FoDiff"
    />
</template>

<script setup lang="ts">
import type { ComponentDocsPreview } from '@/.vitepress/theme/Components/ComponentDocs/Types/ComponentDocs';
import type { ApiType }              from '@/Api/Types/Api.ts';
import ComponentDocs                 from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import BlurredImageDiff              from '@/Next/Components/Diff/BlurredImageDiff.vue';
import BlurredImageDiffRaw           from '@/Next/Components/Diff/BlurredImageDiff.vue?raw';
import ImageDiff                     from '@/Next/Components/Diff/ImageDiff.vue';
import ImageDiffRaw                  from '@/Next/Components/Diff/ImageDiff.vue?raw';
import TextDiff                      from '@/Next/Components/Diff/TextDiff.vue';
import TextDiffRaw                   from '@/Next/Components/Diff/TextDiff.vue?raw';
import { computed }                  from 'vue';

type Section = 'image'
    | 'blurred-image'
    | 'text'
    | ApiType;

interface Props {
    section: Section;
}

defineProps<Props>();

const previews = computed(() => {
    return new Map<Section, ComponentDocsPreview>([
        [
            'image',
            {
                code:      ImageDiffRaw,
                component: ImageDiff,
            },
        ],
        [
            'blurred-image',
            {
                code:      BlurredImageDiffRaw,
                component: BlurredImageDiff,
            },
        ],
        [
            'text',
            {
                code:      TextDiffRaw,
                component: TextDiff,
            },
        ],
    ]);
});
</script>
