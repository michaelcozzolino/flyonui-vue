<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   :api-docs-component-names="['FoTable', 'FoTableHead', 'FoTableHeader', 'FoTableBody', 'FoTableRow', 'FoTableColumn']"
    />
</template>

<script setup lang="ts">
import type { ComponentDocsPreview } from '@/.vitepress/theme/Components/ComponentDocs/Types/ComponentDocs';
import type { ApiType }              from '@/Api/Types/Api.ts';
import type { Default }              from 'flyonui-vue';
import ComponentDocs                 from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import BorderedTable                 from '@/Tables/Table/BorderedTable.vue';
import BorderedTableRaw              from '@/Tables/Table/BorderedTable.vue?raw';
import BorderlessTable               from '@/Tables/Table/BorderlessTable.vue';
import BorderlessTableRaw            from '@/Tables/Table/BorderlessTable.vue?raw';
import DefaultTable                  from '@/Tables/Table/DefaultTable.vue';
import DefaultTableRaw               from '@/Tables/Table/DefaultTable.vue?raw';
import HeadlessTable                 from '@/Tables/Table/HeadlessTable.vue';
import HeadlessTableRaw              from '@/Tables/Table/HeadlessTable.vue?raw';
import HoverableTable                from '@/Tables/Table/HoverableTable.vue';
import HoverableTableRaw             from '@/Tables/Table/HoverableTable.vue?raw';
import PinnedColumnsTable            from '@/Tables/Table/PinnedColumnsTable.vue';
import PinnedColumnsTableRaw         from '@/Tables/Table/PinnedColumnsTable.vue?raw';
import PinnedRowsTable               from '@/Tables/Table/PinnedRowsTable.vue';
import PinnedRowsTableRaw            from '@/Tables/Table/PinnedRowsTable.vue?raw';
import ResponsiveTable               from '@/Tables/Table/ResponsiveTable.vue';
import ResponsiveTableRaw            from '@/Tables/Table/ResponsiveTable.vue?raw';
import RoundedTable                  from '@/Tables/Table/RoundedTable.vue';
import RoundedTableRaw               from '@/Tables/Table/RoundedTable.vue?raw';
import StripedTableColumns           from '@/Tables/Table/StripedTableColumns.vue';
import StripedTableColumnsRaw        from '@/Tables/Table/StripedTableColumns.vue?raw';
import StripedTableRows              from '@/Tables/Table/StripedTableRows.vue';
import StripedTableRowsRaw           from '@/Tables/Table/StripedTableRows.vue?raw';
import TableSize                     from '@/Tables/Table/TableSize.vue';
import TableSizeRaw                  from '@/Tables/Table/TableSize.vue?raw';
import TableWithCaption              from '@/Tables/Table/TableWithCaption.vue';
import TableWithCaptionRaw           from '@/Tables/Table/TableWithCaption.vue?raw';
import TableWithFooter               from '@/Tables/Table/TableWithFooter.vue';
import TableWithFooterRaw            from '@/Tables/Table/TableWithFooter.vue?raw';
import TableWithHighlight            from '@/Tables/Table/TableWithHighlight.vue';
import TableWithHighlightRaw         from '@/Tables/Table/TableWithHighlight.vue?raw';
import TableWithShadow               from '@/Tables/Table/TableWithShadow.vue';
import TableWithShadowRaw            from '@/Tables/Table/TableWithShadow.vue?raw';
import TableWithStyledHeader         from '@/Tables/Table/TableWithStyledHeader.vue';
import TableWithStyledHeaderRaw      from '@/Tables/Table/TableWithStyledHeader.vue?raw';
import { computed }                  from 'vue';

type Section = Default
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

interface Props {
    section: Section;
}

defineProps<Props>();

const previews = computed(() => {
    return new Map<Section, ComponentDocsPreview>([
        [
            'default',
            {
                code:      DefaultTableRaw,
                component: DefaultTable,
            },
        ],
        [
            'bordered',
            {
                code:      BorderedTableRaw,
                component: BorderedTable,
            },
        ],
        [
            'borderless',
            {
                code:      BorderlessTableRaw,
                component: BorderlessTable,
            },
        ],
        [
            'hoverable',
            {
                code:      HoverableTableRaw,
                component: HoverableTable,
            },
        ],
        [
            'with-highlight',
            {
                code:      TableWithHighlightRaw,
                component: TableWithHighlight,
            },
        ],
        [
            'striped-rows',
            {
                code:      StripedTableRowsRaw,
                component: StripedTableRows,
            },
        ],
        [
            'striped-columns',
            {
                code:      StripedTableColumnsRaw,
                component: StripedTableColumns,
            },
        ],
        [
            'rounded',
            {
                code:      RoundedTableRaw,
                component: RoundedTable,
            },
        ],
        [
            'size',
            {
                code:      TableSizeRaw,
                component: TableSize,
            },
        ],
        [
            'pinned-rows',
            {
                code:      PinnedRowsTableRaw,
                component: PinnedRowsTable,
            },
        ],
        [
            'pinned-columns',
            {
                code:      PinnedColumnsTableRaw,
                component: PinnedColumnsTable,
            },
        ],
        [
            'headless',
            {
                code:      HeadlessTableRaw,
                component: HeadlessTable,
            },
        ],
        [
            'with-caption',
            {
                code:      TableWithCaptionRaw,
                component: TableWithCaption,
            },
        ],
        [
            'with-footer',
            {
                code:      TableWithFooterRaw,
                component: TableWithFooter,
            },
        ],
        [
            'responsive',
            {
                code:      ResponsiveTableRaw,
                component: ResponsiveTable,
            },
        ],
        [
            'with-shadow',
            {
                code:      TableWithShadowRaw,
                component: TableWithShadow,
            },
        ],
        [
            'with-styled-header',
            {
                code:      TableWithStyledHeaderRaw,
                component: TableWithStyledHeader,
            },
        ],
    ]);
});
</script>
