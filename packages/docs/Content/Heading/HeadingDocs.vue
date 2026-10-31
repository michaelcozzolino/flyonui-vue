<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   api-docs-component-names="FoHeading"
    />
</template>

<script setup lang="ts">
import type { FrameworkSectionPreview } from '@/.vitepress/theme/Components/Preview/Types/Preview';
import type { ApiType }                 from '@/Api/Types/Api';
import { computed }                     from 'vue';
import ComponentDocs                    from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import HeadingColor                     from '@/Content/Heading/HeadingColor.vue';
import HeadingColorRaw                  from '@/Content/Heading/HeadingColor.vue?raw';
import HeadingLevel                     from '@/Content/Heading/HeadingLevel.vue';
import HeadingLevelRaw                  from '@/Content/Heading/HeadingLevel.vue?raw';

type Section = 'level' | 'color' | ApiType;

interface Props {
    section: Section;
}

defineProps<Props>();

const previews = computed((): Map<Section, FrameworkSectionPreview> => {
    return new Map<Section, FrameworkSectionPreview>([
        [
            'level',
            {
                vue: {
                    codePreview: HeadingLevelRaw,
                    component:   HeadingLevel,
                },
                grid: { columns: 1, rows: 6 },
            },
        ],
        [
            'color',
            {
                vue: {
                    codePreview: HeadingColorRaw,
                    component:   HeadingColor,
                },
            },
        ],
    ]);
});
</script>
