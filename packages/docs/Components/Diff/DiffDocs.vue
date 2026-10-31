<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   api-docs-component-names="FoDiff"
    />
</template>

<script setup lang="ts">
import type { FrameworkSectionPreview } from '@/.vitepress/theme/Components/Preview/Types/Preview';
import type { ApiType }                 from '@/Api/Types/Api';
import { computed }                     from 'vue';
import ComponentDocs                    from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import BlurredImageDiff                 from '@/Components/Diff/BlurredImageDiff.vue';
import BlurredImageDiffRaw              from '@/Components/Diff/BlurredImageDiff.vue?raw';
import ImageDiff                        from '@/Components/Diff/ImageDiff.vue';
import ImageDiffRaw                     from '@/Components/Diff/ImageDiff.vue?raw';
import TextDiff                         from '@/Components/Diff/TextDiff.vue';
import TextDiffRaw                      from '@/Components/Diff/TextDiff.vue?raw';

type Section = 'image'
    | 'blurred-image'
    | 'text'
    | ApiType;

interface Props {
    section: Section;
}

defineProps<Props>();

const previews = computed((): Map<Section, FrameworkSectionPreview> => {
    return new Map<Section, FrameworkSectionPreview>([
        [
            'image',
            {
                vue: {
                    codePreview: ImageDiffRaw,
                    component:   ImageDiff,
                },
            },
        ],
        [
            'blurred-image',
            {
                vue: {
                    codePreview: BlurredImageDiffRaw,
                    component:   BlurredImageDiff,
                },
            },
        ],
        [
            'text',
            {
                vue: {
                    codePreview: TextDiffRaw,
                    component:   TextDiff,
                },
            },
        ],
    ]);
});
</script>
