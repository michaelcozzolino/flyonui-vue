<template>
    <section class="vp-raw gap-4 border-neutral/10 rounded-box flex flex-col border p-3 sm:p-6 md:my-8"
             :data-test-screenshot="dataTestScreenshot"
             data-test="code-snippet"
    >
        <FoTabs v-model="activeTab"
                size="medium"
                :tabs="tabs"
        >
            <template #tabs>
                <FoTab :id="previewTab.id"
                       size="medium"
                >
                    Preview
                </FoTab>

                <FoTab :id="codeTab.id"
                       size="medium"
                >
                    Code
                </FoTab>

                <FoButtonGroup v-if="0 in codePreviews"
                               class="ms-auto"
                >
                    <CopyButton :text="codePreviews[0].code"
                                :is-disabled="codePreviews.length > 1"
                    />

                    <FoButton :icon="isLtr ? 'fluent:text-direction-horizontal-ltr-20-regular' : 'fluent:text-direction-horizontal-rtl-20-regular'"
                              color="neutral"
                              size="medium"
                              @click.prevent="isLtr ? direction = 'rtl' : direction = 'ltr'; activeTab = previewTab;"
                    />
                </FoButtonGroup>
            </template>

            <template #[`content-${previewTab.id}`]>
                <div class="gap-4 bg-base-200/20 border-neutral/10 rounded-box not-prose w-full border p-3 sm:p-6 overflow-x-auto"
                     data-test="flyonui-vue-preview"
                     :class="gridClass"
                     :dir="direction"
                >
                    <ClientOnly>
                        <component :is="component" />
                    </ClientOnly>
                </div>
            </template>

            <template #[`content-${codeTab.id}`]>
                <div class="flex flex-col gap-4">
                    <CodePreview v-for="codePreview in codePreviews"
                                 :key="codePreview.code"
                                 :title="codePreview.title"
                                 :code="codePreview.code"
                                 :lang="codePreview.lang"
                    />
                </div>
            </template>
        </FoTabs>
    </section>
</template>

<script setup lang="ts">
import type {
    CodePreviewProps,
    ComponentPreviewProps,
}                                   from '@/.vitepress/theme/Components/ComponentPreview/Type/ComponentPreview';
import type { Direction, TabProps } from 'flyonui-vue';
import CodePreview
    from '@/.vitepress/theme/Components/ComponentPreview/UI/CodePreview.vue';
import CopyButton
    from '@/.vitepress/theme/Components/ComponentPreview/UI/CopyButton.vue';
import { FoButton, FoButtonGroup, FoTab, FoTabs, useFlyonUIVueAppConfig } from 'flyonui-vue';
import { computed, reactive, ref, useId, watch }                          from 'vue';

const props = withDefaults(defineProps<ComponentPreviewProps>(), {
    grid: () => ({ columns: 0, rows: 0 }),
});

const id         = useId();
const { config } = useFlyonUIVueAppConfig();

const previewTab = reactive<TabProps>({ id: `preview${id}` });
const codeTab    = reactive<TabProps>({ id: `code${id}` });

const activeTab = ref<Readonly<TabProps>>(previewTab);

const tabs = ref<TabProps[]>([
    previewTab,
    codeTab,
]);

const direction = ref<Direction>('ltr');

const isLtr = computed(() => direction.value === 'ltr');

const codePreviews = computed((): CodePreviewProps[] => {
    if (typeof props.code === 'string') {
        return [{ title: 'Vue', code: props.code, lang: 'js' }];
    }

    return props.code.map(c => ({ ...c, lang: 'js' }));
});

const gridClass = computed(() => {
    const columns = props.grid.columns;
    const rows    = props.grid.columns;

    if (columns === 0 || rows === 0) {
        return 'flex flex-wrap';
    }

    const classes: Record<'columns' | 'rows', Record<number, string>> = {
        columns: {
            1: 'grid-cols-1',
            2: 'grid-cols-2',
            3: 'grid-cols-3',
            4: 'grid-cols-4',
            5: 'grid-cols-5',
            7: 'grid-cols-7',
            8: 'grid-cols-8',
        },
        rows: {
            1: 'grid-rows-1',
            2: 'grid-rows-2',
            3: 'grid-rows-3',
            4: 'grid-rows-4',
            5: 'grid-rows-5',
            6: 'grid-rows-6',
            7: 'grid-rows-7',
            8: 'grid-rows-8',
        },
    };

    const columnsClass = classes.columns[props.grid.columns];
    const rowsClass    = classes.rows[props.grid.rows];

    if (columnsClass === undefined || rowsClass === undefined) {
        throw new Error('The given amount of columns or rows does not have any matching class.');
    }

    return `grid ${columnsClass} ${rowsClass}`.trim();
});

watch(
    () => config.value.global.direction,
    (newDirection: Direction) => direction.value = newDirection,
    { immediate: true },
);
</script>
