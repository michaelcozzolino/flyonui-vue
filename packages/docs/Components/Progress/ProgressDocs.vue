<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   :api-docs-component-names="['FoProgress', 'FoProgressStep']"
    />
</template>

<script setup lang="ts">
import type { FrameworkSectionPreview }     from '@/.vitepress/theme/Components/Preview/Types/Preview';
import type { ApiType }                     from '@/Api/Types/Api.ts';
import { computed }                         from 'vue';
import ComponentDocs                        from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import AnimatedProgress                     from '@/Components/Progress/AnimatedProgress.vue';
import AnimatedProgressRaw                  from '@/Components/Progress/AnimatedProgress.vue?raw';
import HorizontalProgress                   from '@/Components/Progress/HorizontalProgress.vue';
import HorizontalProgressRaw                from '@/Components/Progress/HorizontalProgress.vue?raw';
import ProgressColor                        from '@/Components/Progress/ProgressColor.vue';
import ProgressColorRaw                     from '@/Components/Progress/ProgressColor.vue?raw';
import ProgressShape                        from '@/Components/Progress/ProgressShape.vue';
import ProgressShapeRaw                     from '@/Components/Progress/ProgressShape.vue?raw';
import ProgressWithCustomThickness          from '@/Components/Progress/ProgressWithCustomThickness.vue';
import ProgressWithCustomThicknessRaw       from '@/Components/Progress/ProgressWithCustomThickness.vue?raw';
import ProgressWithFloatingLabel            from '@/Components/Progress/ProgressWithFloatingLabel.vue';
import ProgressWithFloatingLabelRaw         from '@/Components/Progress/ProgressWithFloatingLabel.vue?raw';
import ProgressWithLabelAtTheBegin          from '@/Components/Progress/ProgressWithLabelAtTheBegin.vue';
import ProgressWithLabelAtTheBeginRaw       from '@/Components/Progress/ProgressWithLabelAtTheBegin.vue?raw';
import ProgressWithLabelAtTheBottom         from '@/Components/Progress/ProgressWithLabelAtTheBottom.vue';
import ProgressWithLabelAtTheBottomRaw      from '@/Components/Progress/ProgressWithLabelAtTheBottom.vue?raw';
import ProgressWithLabelAtTheEnd            from '@/Components/Progress/ProgressWithLabelAtTheEnd.vue';
import ProgressWithLabelAtTheEndRaw         from '@/Components/Progress/ProgressWithLabelAtTheEnd.vue?raw';
import ProgressWithLabelAtTheTop            from '@/Components/Progress/ProgressWithLabelAtTheTop.vue';
import ProgressWithLabelAtTheTopRaw         from '@/Components/Progress/ProgressWithLabelAtTheTop.vue?raw';
import ProgressWithLabelWithin              from '@/Components/Progress/ProgressWithLabelWithin.vue';
import ProgressWithLabelWithinRaw           from '@/Components/Progress/ProgressWithLabelWithin.vue?raw';
import ProgressWithSteppedBars              from '@/Components/Progress/ProgressWithSteppedBars.vue';
import ProgressWithSteppedBarsRaw           from '@/Components/Progress/ProgressWithSteppedBars.vue?raw';
import ProgressWithTitleLabel               from '@/Components/Progress/ProgressWithTitleLabel.vue';
import ProgressWithTitleLabelRaw            from '@/Components/Progress/ProgressWithTitleLabel.vue?raw';
import StripedProgress                      from '@/Components/Progress/StripedProgress.vue';
import StripedProgressRaw                   from '@/Components/Progress/StripedProgress.vue?raw';
import VerticalProgress                     from '@/Components/Progress/VerticalProgress.vue';
import VerticalProgressRaw                  from '@/Components/Progress/VerticalProgress.vue?raw';
import VerticalProgressWithFloatingLabel    from '@/Components/Progress/VerticalProgressWithFloatingLabel.vue';
import VerticalProgressWithFloatingLabelRaw from '@/Components/Progress/VerticalProgressWithFloatingLabel.vue?raw';
import VerticalProgressWithLabelWithin      from '@/Components/Progress/VerticalProgressWithLabelWithin.vue';
import VerticalProgressWithLabelWithinRaw   from '@/Components/Progress/VerticalProgressWithLabelWithin.vue?raw';
import VerticalProgressWithTitleLabel       from '@/Components/Progress/VerticalProgressWithTitleLabel.vue';
import VerticalProgressWithTitleLabelRaw    from '@/Components/Progress/VerticalProgressWithTitleLabel.vue?raw';

type Section = 'horizontal'
    | 'vertical'
    | 'custom-thickness'
    | 'label-within'
    | 'label-at-the-begin'
    | 'label-at-the-end'
    | 'with-title-label'
    | 'floating-label'
    | 'label-within-vertical'
    | 'label-at-the-bottom'
    | 'label-at-the-top'
    | 'with-title-label-vertical'
    | 'floating-label-vertical'
    | 'color'
    | 'striped'
    | 'animated'
    | 'shape'
    | 'with-stepped-bars'
    | ApiType;

interface Props {
    section: Section;
}

defineProps<Props>();

const previews = computed((): Map<Section, FrameworkSectionPreview> => {
    return new Map<Section, FrameworkSectionPreview>([
        [
            'horizontal',
            {
                grid: { columns: 1, rows: 1 },
                vue:  {
                    component:   HorizontalProgress,
                    codePreview: HorizontalProgressRaw,
                },
            },
        ],
        [
            'vertical',
            {
                vue: {
                    component:   VerticalProgress,
                    codePreview: VerticalProgressRaw,
                },
            },
        ],
        [
            'custom-thickness',
            {
                grid: { columns: 1, rows: 1 },
                vue:  {
                    component:   ProgressWithCustomThickness,
                    codePreview: ProgressWithCustomThicknessRaw,
                },
            },
        ],
        [
            'label-within',
            {
                grid: { columns: 1, rows: 1 },
                vue:  {
                    component:   ProgressWithLabelWithin,
                    codePreview: ProgressWithLabelWithinRaw,
                },
            },
        ],
        [
            'label-at-the-begin',
            {
                grid: { columns: 1, rows: 1 },
                vue:  {
                    component:   ProgressWithLabelAtTheBegin,
                    codePreview: ProgressWithLabelAtTheBeginRaw,
                },
            },
        ],
        [
            'label-at-the-end',
            {
                grid: { columns: 1, rows: 1 },
                vue:  {
                    component:   ProgressWithLabelAtTheEnd,
                    codePreview: ProgressWithLabelAtTheEndRaw,
                },
            },
        ],
        [
            'with-title-label',
            {
                grid: { columns: 1, rows: 1 },
                vue:  {
                    component:   ProgressWithTitleLabel,
                    codePreview: ProgressWithTitleLabelRaw,
                },
            },
        ],
        [
            'floating-label',
            {
                grid: { columns: 1, rows: 1 },
                vue:  {
                    component:   ProgressWithFloatingLabel,
                    codePreview: ProgressWithFloatingLabelRaw,
                },
            },
        ],
        [
            'label-within-vertical',
            {
                vue: {
                    component:   VerticalProgressWithLabelWithin,
                    codePreview: VerticalProgressWithLabelWithinRaw,
                },
            },
        ],
        [
            'label-at-the-bottom',
            {
                vue: {
                    component:   ProgressWithLabelAtTheBottom,
                    codePreview: ProgressWithLabelAtTheBottomRaw,
                },
            },
        ],
        [
            'label-at-the-top',
            {
                vue: {
                    component:   ProgressWithLabelAtTheTop,
                    codePreview: ProgressWithLabelAtTheTopRaw,
                },
            },
        ],
        [
            'with-title-label-vertical',
            {
                vue: {
                    component:   VerticalProgressWithTitleLabel,
                    codePreview: VerticalProgressWithTitleLabelRaw,
                },
            },
        ],
        [
            'floating-label-vertical',
            {
                vue: {
                    component:   VerticalProgressWithFloatingLabel,
                    codePreview: VerticalProgressWithFloatingLabelRaw,
                },
            },
        ],
        [
            'color',
            {
                grid: { columns: 1, rows: 1 },
                vue:  {
                    component:   ProgressColor,
                    codePreview: ProgressColorRaw,
                },
            },
        ],
        [
            'striped',
            {
                grid: { columns: 1, rows: 1 },
                vue:  {
                    component:   StripedProgress,
                    codePreview: StripedProgressRaw,
                },
            },
        ],
        [
            'animated',
            {
                grid: { columns: 1, rows: 1 },
                vue:  {
                    component:   AnimatedProgress,
                    codePreview: AnimatedProgressRaw,
                },
            },
        ],
        [
            'shape',
            {
                grid: { columns: 1, rows: 1 },
                vue:  {
                    component:   ProgressShape,
                    codePreview: ProgressShapeRaw,
                },
            },
        ],
        [
            'with-stepped-bars',
            {
                grid: { columns: 1, rows: 1 },
                vue:  {
                    component:   ProgressWithSteppedBars,
                    codePreview: ProgressWithSteppedBarsRaw,
                },
            },
        ],
    ]);
});
</script>
