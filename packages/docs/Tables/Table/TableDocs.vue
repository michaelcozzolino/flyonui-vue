<template>
    <CodeSnippet v-if="section === 'default'"
                 :id="section"
                 :code="DefaultTableRaw"
                 :component="DefaultTable"
    />

    <CodeSnippet v-else-if="section === 'bordered'"
                 :id="section"
                 :code="BorderedTableRaw"
                 :component="BorderedTable"
    />

    <CodeSnippet v-else-if="section === 'borderless'"
                 :id="section"
                 :code="BorderlessTableRaw"
                 :component="BorderlessTable"
    />

    <CodeSnippet v-else-if="section === 'hoverable'"
                 :id="section"
                 :code="HoverableTableRaw"
                 :component="HoverableTable"
    />

    <CodeSnippet v-else-if="section === 'with-highlight'"
                 :id="section"
                 :code="TableWithHighlightRaw"
                 :component="TableWithHighlight"
    />

    <CodeSnippet v-else-if="section === 'striped-rows'"
                 :id="section"
                 :code="StripedTableRowsRaw"
                 :component="StripedTableRows"
    />

    <CodeSnippet v-else-if="section === 'striped-columns'"
                 :id="section"
                 :code="StripedTableColumnsRaw"
                 :component="StripedTableColumns"
    />

    <CodeSnippet v-else-if="section === 'rounded'"
                 :id="section"
                 :code="RoundedTableRaw"
                 :component="RoundedTable"
    />

    <CodeSnippet v-else-if="section === 'size'"
                 :id="section"
                 :code="TableSizeRaw"
                 :component="TableSize"
    />

    <CodeSnippet v-else-if="section === 'pinned-rows'"
                 :id="section"
                 :code="PinnedRowsTableRaw"
                 :component="PinnedRowsTable"
    />

    <CodeSnippet v-else-if="section === 'pinned-columns'"
                 :id="section"
                 :code="PinnedColumnsTableRaw"
                 :component="PinnedColumnsTable"
    />

    <CodeSnippet v-else-if="section === 'headless'"
                 :id="section"
                 :code="HeadlessTableRaw"
                 :component="HeadlessTable"
    />

    <CodeSnippet v-else-if="section === 'with-caption'"
                 :id="section"
                 :code="TableWithCaptionRaw"
                 :component="TableWithCaption"
    />

    <CodeSnippet v-else-if="section === 'with-footer'"
                 :id="section"
                 :code="TableWithFooterRaw"
                 :component="TableWithFooter"
    />

    <CodeSnippet v-else-if="section === 'responsive'"
                 :id="section"
                 :code="ResponsiveTableRaw"
                 :component="ResponsiveTable"
    />

    <CodeSnippet v-else-if="section === 'with-shadow'"
                 :id="section"
                 :code="TableWithShadowRaw"
                 :component="TableWithShadow"
    />

    <CodeSnippet v-else-if="section === 'with-styled-header'"
                 :id="section"
                 :code="TableWithStyledHeaderRaw"
                 :component="TableWithStyledHeader"
    />

    <ComponentsApiDocs v-else
                       :section="section"
                       :component-names="['FoTable', 'FoTableHead', 'FoTableHeader', 'FoTableBody', 'FoTableRow', 'FoTableColumn']"
    />
</template>

<script setup lang="ts">
import type { ApiType }         from '@/Api/Types/Api.ts';
import type { Default }         from 'flyonui-vue';
import CodeSnippet              from '@/.vitepress/theme/Components/CodeSnippet/UI/CodeSnippet.vue';
import ComponentsApiDocs        from '@/Api/UI/ComponentsApiDocs.vue';
import BorderedTable            from '@/Tables/Table/BorderedTable.vue';
import BorderedTableRaw         from '@/Tables/Table/BorderedTable.vue?raw';
import BorderlessTable          from '@/Tables/Table/BorderlessTable.vue';
import BorderlessTableRaw       from '@/Tables/Table/BorderlessTable.vue?raw';
import DefaultTable             from '@/Tables/Table/DefaultTable.vue';
import DefaultTableRaw          from '@/Tables/Table/DefaultTable.vue?raw';
import HeadlessTable            from '@/Tables/Table/HeadlessTable.vue';
import HeadlessTableRaw         from '@/Tables/Table/HeadlessTable.vue?raw';
import HoverableTable           from '@/Tables/Table/HoverableTable.vue';
import HoverableTableRaw        from '@/Tables/Table/HoverableTable.vue?raw';
import PinnedColumnsTable       from '@/Tables/Table/PinnedColumnsTable.vue';
import PinnedColumnsTableRaw    from '@/Tables/Table/PinnedColumnsTable.vue?raw';
import PinnedRowsTable          from '@/Tables/Table/PinnedRowsTable.vue';
import PinnedRowsTableRaw       from '@/Tables/Table/PinnedRowsTable.vue?raw';
import ResponsiveTable          from '@/Tables/Table/ResponsiveTable.vue';
import ResponsiveTableRaw       from '@/Tables/Table/ResponsiveTable.vue?raw';
import RoundedTable             from '@/Tables/Table/RoundedTable.vue';
import RoundedTableRaw          from '@/Tables/Table/RoundedTable.vue?raw';
import StripedTableColumns      from '@/Tables/Table/StripedTableColumns.vue';
import StripedTableColumnsRaw   from '@/Tables/Table/StripedTableColumns.vue?raw';
import StripedTableRows         from '@/Tables/Table/StripedTableRows.vue';
import StripedTableRowsRaw      from '@/Tables/Table/StripedTableRows.vue?raw';
import TableSize                from '@/Tables/Table/TableSize.vue';
import TableSizeRaw             from '@/Tables/Table/TableSize.vue?raw';
import TableWithCaption         from '@/Tables/Table/TableWithCaption.vue';
import TableWithCaptionRaw      from '@/Tables/Table/TableWithCaption.vue?raw';
import TableWithFooter          from '@/Tables/Table/TableWithFooter.vue';
import TableWithFooterRaw       from '@/Tables/Table/TableWithFooter.vue?raw';
import TableWithHighlight       from '@/Tables/Table/TableWithHighlight.vue';
import TableWithHighlightRaw    from '@/Tables/Table/TableWithHighlight.vue?raw';
import TableWithShadow          from '@/Tables/Table/TableWithShadow.vue';
import TableWithShadowRaw       from '@/Tables/Table/TableWithShadow.vue?raw';
import TableWithStyledHeader    from '@/Tables/Table/TableWithStyledHeader.vue';
import TableWithStyledHeaderRaw from '@/Tables/Table/TableWithStyledHeader.vue?raw';

interface Props {
    section: Default
        | 'bordered'
        | 'borderless'
        | 'hoverable'
        | 'with-highlight'
        | 'striped-rows'
        | 'striped-columns'
        | 'rounded'
        | 'size'
        | 'pinned-rows'
        | 'pinned-columns'
        | 'headless'
        | 'with-caption'
        | 'with-footer'
        | 'responsive'
        | 'with-shadow'
        | 'with-styled-header'
        | ApiType;
}

defineProps<Props>();
</script>
