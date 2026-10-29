<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   api-docs-component-names="FoPagination"
    />
</template>

<script setup lang="ts">
import type { Default }                 from 'flyonui-vue';
import type { FrameworkSectionPreview } from '@/.vitepress/theme/Components/Preview/Types/Preview';
import type { ApiType }                 from '@/Api/Types/Api';
import { computed }                     from 'vue';
import ComponentDocs                    from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import DefaultPagination                from '@/Navigations/Pagination/DefaultPagination.vue';
import DefaultPaginationRaw             from '@/Navigations/Pagination/DefaultPagination.vue?raw';
import DisabledButtonPagination         from '@/Navigations/Pagination/DisabledButtonPagination.vue';
import DisabledButtonPaginationRaw      from '@/Navigations/Pagination/DisabledButtonPagination.vue?raw';
import OutlinePagination                from '@/Navigations/Pagination/OutlinePagination.vue';
import OutlinePaginationRaw             from '@/Navigations/Pagination/OutlinePagination.vue?raw';
import PaginationAlignment              from '@/Navigations/Pagination/PaginationAlignment.vue';
import PaginationAlignmentRaw           from '@/Navigations/Pagination/PaginationAlignment.vue?raw';
import PaginationEllipsis               from '@/Navigations/Pagination/PaginationEllipsis.vue';
import PaginationEllipsisRaw            from '@/Navigations/Pagination/PaginationEllipsis.vue?raw';
import PaginationShape                  from '@/Navigations/Pagination/PaginationShape.vue';
import PaginationShapeRaw               from '@/Navigations/Pagination/PaginationShape.vue?raw';
import PaginationSize                   from '@/Navigations/Pagination/PaginationSize.vue';
import PaginationSizeRaw                from '@/Navigations/Pagination/PaginationSize.vue?raw';
import PaginationWithHiddenText         from '@/Navigations/Pagination/PaginationWithHiddenText.vue';
import PaginationWithHiddenTextRaw      from '@/Navigations/Pagination/PaginationWithHiddenText.vue?raw';
import PaginationWithIcon               from '@/Navigations/Pagination/PaginationWithIcon.vue';
import PaginationWithIconRaw            from '@/Navigations/Pagination/PaginationWithIcon.vue?raw';
import SoftPagination                   from '@/Navigations/Pagination/SoftPagination.vue';
import SoftPaginationRaw                from '@/Navigations/Pagination/SoftPagination.vue?raw';

type Section = Default
    | 'soft'
    | 'outline'
    | 'shape'
    | 'size'
    | 'alignment'
    | 'disabled-button'
    | 'with-icon'
    | 'with-hidden-text'
    | 'ellipsis'
    | ApiType;

interface Props {
    section: Section;
}

defineProps<Props>();

const previews = computed(() => {
    return new Map<Section, FrameworkSectionPreview>([
        [
            'default',
            {
                vue: {
                    codePreview: DefaultPaginationRaw,
                    component:   DefaultPagination,
                },
            },
        ],
        [
            'soft',
            {
                vue: {
                    codePreview: SoftPaginationRaw,
                    component:   SoftPagination,
                },
            },
        ],
        [
            'outline',
            {
                vue: {
                    codePreview: OutlinePaginationRaw,
                    component:   OutlinePagination,
                },
            },
        ],
        [
            'shape',
            {
                vue: {
                    codePreview: PaginationShapeRaw,
                    component:   PaginationShape,
                },
            },
        ],
        [
            'size',
            {
                vue: {
                    codePreview: PaginationSizeRaw,
                    component:   PaginationSize,
                },
            },
        ],
        [
            'alignment',
            {
                vue: {
                    codePreview: PaginationAlignmentRaw,
                    component:   PaginationAlignment,
                },
                grid: { columns: 1, rows: 3 },
            },
        ],
        [
            'disabled-button',
            {
                vue: {
                    codePreview: DisabledButtonPaginationRaw,
                    component:   DisabledButtonPagination,
                },
            },
        ],
        [
            'with-icon',
            {
                vue: {
                    codePreview: PaginationWithIconRaw,
                    component:   PaginationWithIcon,
                },
            },
        ],
        [
            'with-hidden-text',
            {
                vue: {
                    codePreview: PaginationWithHiddenTextRaw,
                    component:   PaginationWithHiddenText,
                },
                grid: { columns: 1, rows: 6 },
            },
        ],
        [
            'ellipsis',
            {
                vue: {
                    codePreview: PaginationEllipsisRaw,
                    component:   PaginationEllipsis,
                },
            },
        ],
    ]);
});
</script>
