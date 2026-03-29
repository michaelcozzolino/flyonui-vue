<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   :api-docs-component-names="['FoDataTable', 'FoDataTableHeader']"
    />
</template>

<script setup lang="ts">
import type { ComponentDocsPreview }  from '@/.vitepress/theme/Components/ComponentDocs/Types/ComponentDocs';
import type { ApiType }               from '@/Api/Types/Api.ts';
import type { Default }               from 'flyonui-vue';
import ComponentDocs                  from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import ControlsPositionDataTable      from '@/Tables/DataTable/ControlsPositionDataTable.vue';
import ControlsPositionDataTableRaw   from '@/Tables/DataTable/ControlsPositionDataTable.vue?raw';
import DefaultDataTable               from '@/Tables/DataTable/DefaultDataTable.vue';
import DefaultDataTableRaw            from '@/Tables/DataTable/DefaultDataTable.vue?raw';
import FilterableByColumnDataTable    from '@/Tables/DataTable/FilterableByColumnDataTable.vue';
import FilterableByColumnDataTableRaw from '@/Tables/DataTable/FilterableByColumnDataTable.vue?raw';
import FilterableDataTable            from '@/Tables/DataTable/FilterableDataTable.vue';
import FilterableDataTableRaw         from '@/Tables/DataTable/FilterableDataTable.vue?raw';
import NoSearchResultsDataTable       from '@/Tables/DataTable/NoSearchResultsDataTable.vue';
import NoSearchResultsDataTableRaw    from '@/Tables/DataTable/NoSearchResultsDataTable.vue?raw';
import SearchableDataTable            from '@/Tables/DataTable/SearchableDataTable.vue';
import SearchableDataTableRaw         from '@/Tables/DataTable/SearchableDataTable.vue?raw';
import SelectableDataTable            from '@/Tables/DataTable/SelectableDataTable.vue';
import SelectableDataTableRaw         from '@/Tables/DataTable/SelectableDataTable.vue?raw';
import { computed }                   from 'vue';

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

const previews = computed(() => {
    return new Map<Section, ComponentDocsPreview>([
        [
            'default',
            {
                code:      DefaultDataTableRaw,
                component: DefaultDataTable,
            },
        ],
        [
            'selectable',
            {
                code:      SelectableDataTableRaw,
                component: SelectableDataTable,
            },
        ],
        [
            'searchable',
            {
                code:      SearchableDataTableRaw,
                component: SearchableDataTable,
            },
        ],
        [
            'no-search-results',
            {
                code:      NoSearchResultsDataTableRaw,
                component: NoSearchResultsDataTable,
            },
        ],
        [
            'controls-position',
            {
                code:      ControlsPositionDataTableRaw,
                component: ControlsPositionDataTable,
            },
        ],
        [
            'filterable',
            {
                code:      FilterableDataTableRaw,
                component: FilterableDataTable,
            },
        ],
        [
            'filterable-by-column',
            {
                code:      FilterableByColumnDataTableRaw,
                component: FilterableByColumnDataTable,
            },
        ],
    ]);
});
</script>
