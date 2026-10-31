<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   api-docs-component-names="FoRange"
    />
</template>

<script setup lang="ts">
import type { Default }                 from 'flyonui-vue';
import type { FrameworkSectionPreview } from '@/.vitepress/theme/Components/Preview/Types/Preview';
import type { ApiType }                 from '@/Api/Types/Api';
import { computed }                     from 'vue';
import ComponentDocs                    from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import CustomColor                      from '@/Forms/Range/CustomColor.vue';
import CustomColorRaw                   from '@/Forms/Range/CustomColor.vue?raw';
import DefaultRange                     from '@/Forms/Range/DefaultRange.vue';
import DefaultRangeRaw                  from '@/Forms/Range/DefaultRange.vue?raw';
import DisabledRange                    from '@/Forms/Range/DisabledRange.vue';
import DisabledRangeRaw                 from '@/Forms/Range/DisabledRange.vue?raw';
import MinMaxAndStepRange               from '@/Forms/Range/MinMaxAndStepRange.vue';
import MinMaxAndStepRangeRaw            from '@/Forms/Range/MinMaxAndStepRange.vue?raw';
import RangeColor                       from '@/Forms/Range/RangeColor.vue';
import RangeColorRaw                    from '@/Forms/Range/RangeColor.vue?raw';
import RangeSize                        from '@/Forms/Range/RangeSize.vue';
import RangeSizeRaw                     from '@/Forms/Range/RangeSize.vue?raw';
import StepsRange                       from '@/Forms/Range/StepsRange.vue';
import StepsRangeRaw                    from '@/Forms/Range/StepsRange.vue?raw';

type Section = Default
    | 'size'
    | 'color'
    | 'custom-color'
    | 'disabled'
    | 'min-max-and-step'
    | 'steps'
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
                    codePreview: DefaultRangeRaw,
                    component:   DefaultRange,
                },
            },
        ],
        [
            'size',
            {
                vue: {
                    codePreview: RangeSizeRaw,
                    component:   RangeSize,
                },
                grid: { rows: 5, columns: 1 },
            },
        ],
        [
            'color',
            {
                vue: {
                    codePreview: RangeColorRaw,
                    component:   RangeColor,
                },
            },
        ],
        [
            'custom-color',
            {
                vue: {
                    codePreview: CustomColorRaw,
                    component:   CustomColor,
                },
            },
        ],
        [
            'disabled',
            {
                vue: {
                    codePreview: DisabledRangeRaw,
                    component:   DisabledRange,
                },
            },
        ],
        [
            'min-max-and-step',
            {
                vue: {
                    codePreview: MinMaxAndStepRangeRaw,
                    component:   MinMaxAndStepRange,
                },
            },
        ],
        [
            'steps',
            {
                vue: {
                    codePreview: StepsRangeRaw,
                    component:   StepsRange,
                },
            },
        ],
    ]);
});
</script>
