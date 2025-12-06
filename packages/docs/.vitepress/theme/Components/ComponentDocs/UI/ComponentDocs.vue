<template>
    <ComponentPreview v-if="preview !== null"
                      :code="preview.code"
                      :component="preview.component"
                      :grid="preview.grid"
                      :data-test-screenshot="preview.excludeFromTests ? undefined : section"
    />

    <ComponentsApiDocs v-else-if="showApi(section)"
                       :section="section"
                       :component-names="apiDocsComponentNames"
    />
</template>

<script setup lang="ts" generic="S extends string, C extends ComponentDocsPreview">
import type {
    ComponentDocsPreview,
    ComponentDocsProps,
} from '@/.vitepress/theme/Components/ComponentDocs/Types/ComponentDocs';
import type { ApiType }  from '@/Api/Types/Api';
import ComponentPreview  from '@/.vitepress/theme/Components/Preview/UI/ComponentPreview.vue';
import ComponentsApiDocs from '@/Api/UI/ComponentsApiDocs.vue';
import { computed }      from 'vue';

const props = withDefaults(defineProps<ComponentDocsProps<S, C>>(), {
    apiDocsComponentNames: () => [],
});

const preview = computed((): C | null => props.previews.get(props.section) ?? null);

function showApi(section: S): section is S & ApiType {
    return ['props', 'slots'].includes(section);
}
</script>
