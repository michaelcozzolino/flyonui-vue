<template>
    <ComponentPreview v-if="preview !== null"
                      :code="preview.code"
                      :component="preview.component"
                      :data-test-screenshot="preview.excludeFromTests ? undefined : section"
    />

    <ComponentsApiDocs v-else-if="showApi(section)"
                       :section="section"
                       :component-names="apiDocsComponentNames"
    />
</template>

<script setup lang="ts" generic="S extends string, C extends ComponentDocsPreview">
import type { ComponentDocsPreview } from '@/.vitepress/theme/Components/ComponentDocs/Types/ComponentDocs';
import type { ApiType }              from '@/Api/Types/Api';
import type { ComponentName }        from 'flyonui-vue';
import ComponentPreview              from '@/.vitepress/theme/Components/Preview/UI/ComponentPreview.vue';
import ComponentsApiDocs             from '@/Api/UI/ComponentsApiDocs.vue';
import { computed }                  from 'vue';

const props = defineProps<{
    previews:              Map<S, C>;
    section:               S;
    apiDocsComponentNames: ComponentName | ComponentName[];
}>();

const preview = computed((): C | null => props.previews.get(props.section) ?? null);

function showApi(section: S): section is S & ApiType {
    return ['props', 'slots'].includes(section);
}
</script>
