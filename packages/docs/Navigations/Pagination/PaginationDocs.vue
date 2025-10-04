<template>
    <CodeSnippet v-if="section === 'default'"
                 :data-test-screenshot="section"
                 :code="DefaultPaginationRaw"
                 :component="DefaultPagination"
    />

    <CodeSnippet v-else-if="section === 'soft'"
                 :data-test-screenshot="section"
                 :code="SoftPaginationRaw"
                 :component="SoftPagination"
    />

    <CodeSnippet v-else-if="section === 'outline'"
                 :data-test-screenshot="section"
                 :code="OutlinePaginationRaw"
                 :component="OutlinePagination"
    />

    <CodeSnippet v-else-if="section === 'shape'"
                 :data-test-screenshot="section"
                 :code="PaginationShapeRaw"
                 :component="PaginationShape"
    />

    <CodeSnippet v-else-if="section === 'size'"
                 :data-test-screenshot="section"
                 :code="PaginationSizeRaw"
                 :component="PaginationSize"
    />

    <CodeSnippet v-else-if="section === 'alignment'"
                 :data-test-screenshot="section"
                 :code="PaginationAlignmentRaw"
                 :component="PaginationAlignment"
                 :preview="{ columns: 1, rows: 3 }"
    />

    <CodeSnippet v-else-if="section === 'disabled-button'"
                 :data-test-screenshot="section"
                 :code="DisabledButtonPaginationRaw"
                 :component="DisabledButtonPagination"
    />

    <CodeSnippet v-else-if="section === 'with-icon'"
                 :data-test-screenshot="section"
                 :code="PaginationWithIconRaw"
                 :component="PaginationWithIcon"
    />

    <CodeSnippet v-else-if="section === 'with-hidden-text'"
                 :data-test-screenshot="section"
                 :code="PaginationWithHiddenTextRaw"
                 :component="PaginationWithHiddenText"
                 :preview="{ columns: 1, rows: 6 }"
    />

    <CodeSnippet v-else-if="section === 'ellipsis'"
                 :data-test-screenshot="section"
                 :code="PaginationEllipsisRaw"
                 :component="PaginationEllipsis"
    />

    <ComponentsApiDocs v-else
                       :section="section"
                       component-names="FoPagination"
    />
</template>

<script setup lang="ts">
import type { ApiType }            from '@/Api/Types/Api.ts';
import type { Default }            from 'flyonui-vue';
import CodeSnippet                 from '@/.vitepress/theme/Components/CodeSnippet/UI/CodeSnippet.vue';
import ComponentsApiDocs           from '@/Api/UI/ComponentsApiDocs.vue';
import DefaultPagination           from '@/Navigations/Pagination/DefaultPagination.vue';
import DefaultPaginationRaw        from '@/Navigations/Pagination/DefaultPagination.vue?raw';
import DisabledButtonPagination    from '@/Navigations/Pagination/DisabledButtonPagination.vue';
import DisabledButtonPaginationRaw from '@/Navigations/Pagination/DisabledButtonPagination.vue?raw';
import OutlinePagination           from '@/Navigations/Pagination/OutlinePagination.vue';
import OutlinePaginationRaw        from '@/Navigations/Pagination/OutlinePagination.vue?raw';
import PaginationAlignment         from '@/Navigations/Pagination/PaginationAlignment.vue';
import PaginationAlignmentRaw      from '@/Navigations/Pagination/PaginationAlignment.vue?raw';
import PaginationEllipsis          from '@/Navigations/Pagination/PaginationEllipsis.vue';
import PaginationEllipsisRaw       from '@/Navigations/Pagination/PaginationEllipsis.vue?raw';
import PaginationShape             from '@/Navigations/Pagination/PaginationShape.vue';
import PaginationShapeRaw          from '@/Navigations/Pagination/PaginationShape.vue?raw';
import PaginationSize              from '@/Navigations/Pagination/PaginationSize.vue';
import PaginationSizeRaw           from '@/Navigations/Pagination/PaginationSize.vue?raw';
import PaginationWithHiddenText    from '@/Navigations/Pagination/PaginationWithHiddenText.vue';
import PaginationWithHiddenTextRaw from '@/Navigations/Pagination/PaginationWithHiddenText.vue?raw';
import PaginationWithIcon          from '@/Navigations/Pagination/PaginationWithIcon.vue';
import PaginationWithIconRaw       from '@/Navigations/Pagination/PaginationWithIcon.vue?raw';
import SoftPagination              from '@/Navigations/Pagination/SoftPagination.vue';
import SoftPaginationRaw           from '@/Navigations/Pagination/SoftPagination.vue?raw';

interface Props {
    section: Default
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
}

defineProps<Props>();
</script>
