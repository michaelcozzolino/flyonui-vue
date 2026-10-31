<template>
    <section v-if="sectionPreviews !== null"
             class="vp-raw gap-4 border-neutral/10 rounded-box flex flex-col border p-3 sm:p-6 md:my-8"
             :data-test-screenshot="sectionPreviews.excludeFromTests ? undefined : section"
             data-test="code-snippet"
    >
        <SectionPreviews :previews="sectionPreviews"
                         :grid="sectionPreviews.grid"
        />
    </section>

    <ComponentsApiDocs v-else-if="showApi(section)"
                       :section="section"
                       :component-names="apiDocsComponentNames"
    />
</template>

<script setup lang="ts" generic="S extends string">
import type { ComponentName } from 'flyonui-vue';
import type {
    ComponentDocsProps,
}                                       from '@/.vitepress/theme/Components/ComponentDocs/Types/ComponentDocs';
import type { FrameworkSectionPreview } from '@/.vitepress/theme/Components/Preview/Types/Preview';
import type { ApiType }                 from '@/Api/Types/Api';
import { computed }                     from 'vue';
import SectionPreviews                  from '@/.vitepress/theme/Components/Preview/UI/FrameworkSectionPreviewTabs.vue';
import ComponentsApiDocs                from '@/Api/UI/ComponentsApiDocs.vue';

const props = withDefaults(defineProps<ComponentDocsProps<S>>(), {
    apiDocsComponentNames: (): ComponentName[] => [],
});

const sectionPreviews = computed((): FrameworkSectionPreview | null => {
    return props.previews.get(props.section) ?? null;
});

function showApi(section: S): section is S & ApiType {
    return ['props', 'slots'].includes(section);
}
</script>
