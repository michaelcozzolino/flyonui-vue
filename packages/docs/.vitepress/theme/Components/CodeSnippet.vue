<template>
    <div class="vp-raw">
        <section class="border-neutral/10 rounded-box flex flex-col gap-4 border p-3 sm:p-6 md:my-8">
            <div class="gap-3 bg-base-200/20 border-neutral/10 rounded-box not-prose w-full border p-3 sm:p-6"
                 :class="previewGridClass"
            >
                <component :is="component" />
            </div>
            <!-- todo: make another code snippet to fulfill all my needs -->
            <VueCodeHighlighter v-for="codeSnippet in codeSnippets"
                                :key="codeSnippet.title"
                                :title="codeSnippet.title"
                                :lang="codeSnippet.lang"
                                :code="codeSnippet.code"
            />
        </section>
    </div>
</template>

<script setup lang="ts">
import type { Component }     from 'vue';
import { VueCodeHighlighter } from '@/.vitepress/theme/Components/Lib/VueCodeHighlighter';
import { computed }           from 'vue';

interface Props {
    preview?: {
        columns: number;
        rows:    number;
    };
    code:      string | { title: string; code: string }[];
    component: Component;
}

const props = withDefaults(defineProps<Props>(), {
    preview: () => {
        return {
            columns: 0,
            rows:    0,
        };
    },
});

const codeSnippets = computed(() => {
    if (typeof props.code === 'string') {
        return [{ title: 'Vue', code: props.code, lang: 'js' }];
    }

    return props.code.map(c => ({ ...c, lang: 'js' }));
});

const previewGridClass = computed(() => {
    const columns = props.preview.columns;
    const rows    = props.preview.rows;

    if (columns === 0 || rows === 0) {
        return 'flex flex-wrap';
    }

    const classes: Record<'columns' | 'rows', Record<number, string>> = {
        columns: {
            1: 'grid-cols-1',
            2: 'grid-cols-2',
            3: 'grid-cols-3',
            4: 'grid-cols-4',
            7: 'grid-cols-7',
            8: 'grid-cols-8',
        },
        rows: {
            1: 'grid-rows-1',
            2: 'grid-rows-2',
            3: 'grid-rows-3',
            4: 'grid-rows-4',
            6: 'grid-rows-6',
        },
    };

    const columnsClass = classes.columns[props.preview.columns];
    const rowsClass    = classes.rows[props.preview.rows];

    if (columnsClass === undefined || rowsClass === undefined) {
        throw new Error('The given amount of columns or rows does not have any matching class.');
    }

    return `grid ${columnsClass} ${rowsClass}`.trim();
});
</script>
