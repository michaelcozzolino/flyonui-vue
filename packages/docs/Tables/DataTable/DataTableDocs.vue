<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   :api-docs-component-names="['FoDataTable', 'FoDataTableHeader']"
    />
</template>

<script setup lang="ts">
import type { Default }                 from 'flyonui-vue';
import type { FrameworkSectionPreview } from '@/.vitepress/theme/Components/Preview/Types/Preview';
import type { ApiType }                 from '@/Api/Types/Api';
import { computed }                     from 'vue';
import ComponentDocs                    from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import ControlsPositionDataTable        from '@/Tables/DataTable/ControlsPositionDataTable.vue';
import ControlsPositionDataTableRaw     from '@/Tables/DataTable/ControlsPositionDataTable.vue?raw';
import DefaultDataTable                 from '@/Tables/DataTable/DefaultDataTable.vue';
import DefaultDataTableRaw              from '@/Tables/DataTable/DefaultDataTable.vue?raw';
import FilterableByColumnDataTable      from '@/Tables/DataTable/FilterableByColumnDataTable.vue';
import FilterableByColumnDataTableRaw   from '@/Tables/DataTable/FilterableByColumnDataTable.vue?raw';
import FilterableDataTable              from '@/Tables/DataTable/FilterableDataTable.vue';
import FilterableDataTableRaw           from '@/Tables/DataTable/FilterableDataTable.vue?raw';
import NoSearchResultsDataTable         from '@/Tables/DataTable/NoSearchResultsDataTable.vue';
import NoSearchResultsDataTableRaw      from '@/Tables/DataTable/NoSearchResultsDataTable.vue?raw';
import SearchableDataTable              from '@/Tables/DataTable/SearchableDataTable.vue';
import SearchableDataTableRaw           from '@/Tables/DataTable/SearchableDataTable.vue?raw';
import SelectableDataTable              from '@/Tables/DataTable/SelectableDataTable.vue';
import SelectableDataTableRaw           from '@/Tables/DataTable/SelectableDataTable.vue?raw';

type Section = Default
    | 'selectable'
    | 'searchable'
    | 'no-search-results'
    | 'controls-position'
    | 'filterable'
    | 'filterable-by-column'
    | ApiType;

interface Props {
    section: Section;
}

defineProps<Props>();

const previews = computed((): Map<Section, FrameworkSectionPreview> => {
    return new Map<Section, FrameworkSectionPreview>([
        [
            'default',
            {
                vue: {
                    codePreview: DefaultDataTableRaw,
                    component:   DefaultDataTable,
                },
            },
        ],
        [
            'selectable',
            {
                vue: {
                    codePreview: SelectableDataTableRaw,
                    component:   SelectableDataTable,
                },
            },
        ],
        [
            'searchable',
            {
                vue: {
                    codePreview: SearchableDataTableRaw,
                    component:   SearchableDataTable,
                },
            },
        ],
        [
            'no-search-results',
            {
                vue: {
                    codePreview: NoSearchResultsDataTableRaw,
                    component:   NoSearchResultsDataTable,
                },
            },
        ],
        [
            'controls-position',
            {
                vue: {
                    codePreview: ControlsPositionDataTableRaw,
                    component:   ControlsPositionDataTable,
                },
            },
        ],
        [
            'filterable',
            {
                vue: {
                    codePreview: FilterableDataTableRaw,
                    component:   FilterableDataTable,
                },
            },
        ],
        [
            'filterable-by-column',
            {
                vue: {
                    codePreview: FilterableByColumnDataTableRaw,
                    component:   FilterableByColumnDataTable,
                },
            },
        ],
    ]);
});
</script>
