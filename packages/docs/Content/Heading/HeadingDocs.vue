<template>
    <ComponentDocs :previews="previews"
                   :section="section"
    />
</template>

<script setup lang="ts">
import type { ComponentDocsPreview } from '@/.vitepress/theme/Components/ComponentDocs/Types/ComponentDocs';
import ComponentDocs                 from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import HeadingLevel                  from '@/Content/Heading/HeadingLevel.vue';
import HeadingLevelRaw               from '@/Content/Heading/HeadingLevel.vue?raw';
import { computed }                  from 'vue';

interface Props {
    section: 'level';
}

defineProps<Props>();

const previews = computed(() => {
    return new Map<Props['section'], ComponentDocsPreview>([
        [
            'level',
            {
                grid:      { columns: 1, rows: 6 },
                code:      HeadingLevelRaw,
                component: HeadingLevel,
            },
        ],
    ]);
});
</script>
