<template>
    <CodePreview v-if="section === 'all-components'"
                 title="TS"
                 :code="AllComponentsTextDirectionConfigurationRaw.replace('// @ts-expect-error E.G.', '')"
                 lang="ts"
    />

    <ComponentDocs v-else
                   :previews="previews"
                   :section="section"
    />
</template>

<script setup lang="ts">
import type { ComponentDocsPreview }              from '@/.vitepress/theme/Components/ComponentDocs/Types/ComponentDocs';
import ComponentDocs                              from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import CodePreview                                from '@/.vitepress/theme/Components/Preview/UI/CodePreview.vue';
import AllComponentsTextDirectionConfigurationRaw from '@/Customisation/TextDirection/AllComponentsTextDirectionConfiguration?raw';
import SingleComponentTextDirection               from '@/Customisation/TextDirection/SingleComponentTextDirection.vue';
import SingleComponentTextDirectionRaw            from '@/Customisation/TextDirection/SingleComponentTextDirection.vue?raw';
import { computed }                               from 'vue';

type ComponentDocsPreviewSection = 'single-component';

interface Props {
    section: 'all-components' | ComponentDocsPreviewSection;
}

defineProps<Props>();

const previews = computed(() => {
    return new Map<ComponentDocsPreviewSection, ComponentDocsPreview>([
        [
            'single-component',
            {
                code:      SingleComponentTextDirectionRaw,
                component: SingleComponentTextDirection,
            },
        ],
    ]);
});
</script>
