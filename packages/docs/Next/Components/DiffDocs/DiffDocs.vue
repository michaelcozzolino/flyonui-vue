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
import BlurredImageDiff              from '@/Next/Components/DiffDocs/BlurredImageDiff.vue';
import BlurredImageDiffRaw           from '@/Next/Components/DiffDocs/BlurredImageDiff.vue?raw';
import ImageDiff                     from '@/Next/Components/DiffDocs/ImageDiff.vue';
import ImageDiffRaw                  from '@/Next/Components/DiffDocs/ImageDiff.vue?raw';
import TextDiff                      from '@/Next/Components/DiffDocs/TextDiff.vue';
import TextDiffRaw                   from '@/Next/Components/DiffDocs/TextDiff.vue?raw';
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
