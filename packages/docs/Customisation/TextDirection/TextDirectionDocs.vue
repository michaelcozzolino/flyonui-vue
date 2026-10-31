<template>
    <CodePreview v-if="section === 'all-components'"
                 title="TS"
                 :code="AllComponentsTextDirectionConfigurationRaw.replace('// @ts-expect-error E.G.', '')"
                 language="ts"
    />

    <ComponentDocs v-else
                   :previews="previews"
                   :section="section"
    />
</template>

<script setup lang="ts">
import type { FrameworkSectionPreview }           from '@/.vitepress/theme/Components/Preview/Types/Preview';
import { computed }                               from 'vue';
import ComponentDocs                              from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import CodePreview                                from '@/.vitepress/theme/Components/Preview/UI/CodePreview.vue';
import AllComponentsTextDirectionConfigurationRaw from '@/Customisation/TextDirection/AllComponentsTextDirectionConfiguration?raw';
import SingleComponentTextDirection               from '@/Customisation/TextDirection/SingleComponentTextDirection.vue';
import SingleComponentTextDirectionRaw            from '@/Customisation/TextDirection/SingleComponentTextDirection.vue?raw';

type ComponentDocsPreviewSection = 'single-component';

interface Props {
    section: 'all-components' | ComponentDocsPreviewSection;
}

defineProps<Props>();

const previews = computed((): Map<Section, FrameworkSectionPreview> => {
    return new Map<ComponentDocsPreviewSection, FrameworkSectionPreview>([
        [
            'single-component',
            {
                vue: {
                    codePreview: SingleComponentTextDirectionRaw,
                    component:   SingleComponentTextDirection,
                },
            },
        ],
    ]);
});
</script>
