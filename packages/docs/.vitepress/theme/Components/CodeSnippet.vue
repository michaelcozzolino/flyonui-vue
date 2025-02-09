<template>
    <div class="vp-raw">
        <section class="border-neutral/10 rounded-box my-4 flex flex-col gap-4 border p-3 sm:p-6 md:my-8">
            <div class="gap-3 bg-base-200/20 border-neutral/10 rounded-box not-prose flex w-full flex-[1_0_0] flex-wrap border p-3 sm:p-6"
                 :class="previewGridClass"
            >
                <component :is="component" />
            </div>

            <VueCodeHighlighter title="Vue"
                                lang="js"
                                :code="code"
            />
        </section>
    </div>
</template>

<script setup lang="ts">
import type { Component }   from 'vue';
import { computed }         from 'vue';
import * as CodeHighlighter from 'vue-code-highlighter';

interface Props {
    preview?: {
        columns: number;
        rows:    number;
    };
    code:      string;
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

const VueCodeHighlighter = CodeHighlighter.VueCodeHighlighter;

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
