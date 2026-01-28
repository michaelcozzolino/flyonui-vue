<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   api-docs-component-names="FoHeading"
    />
</template>

<script setup lang="ts">
import type { ComponentDocsPreview } from '@/.vitepress/theme/Components/ComponentDocs/Types/ComponentDocs';
import type { ApiType }              from '@/Api/Types/Api';
import ComponentDocs                 from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import HeadingColor                  from '@/Content/Heading/HeadingColor.vue';
import HeadingColorRaw               from '@/Content/Heading/HeadingColor.vue?raw';
import HeadingLevel                  from '@/Content/Heading/HeadingLevel.vue';
import HeadingLevelRaw               from '@/Content/Heading/HeadingLevel.vue?raw';
import { computed }                  from 'vue';

type Section = 'level' | 'color' | ApiType;

interface Props {
    section: Section;
}

defineProps<Props>();

const previews = computed(() => {
    return new Map<Section, ComponentDocsPreview>([
        [
            'level',
            {
                grid:      { columns: 1, rows: 6 },
                code:      HeadingLevelRaw,
                component: HeadingLevel,
            },
        ],
        [
            'color',
            {
                code:      HeadingColorRaw,
                component: HeadingColor,
            },
        ],
    ]);
});
</script>
