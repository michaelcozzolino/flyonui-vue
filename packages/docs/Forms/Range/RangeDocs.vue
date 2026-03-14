<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   api-docs-component-names="FoRange"
    />
</template>

<script setup lang="ts">
import type { ComponentDocsPreview } from '@/.vitepress/theme/Components/ComponentDocs/Types/ComponentDocs';
import type { ApiType }              from '@/Api/Types/Api.ts';
import type { Default }              from 'flyonui-vue';
import ComponentDocs                 from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import CustomColor                   from '@/Forms/Range/CustomColor.vue';
import CustomColorRaw                from '@/Forms/Range/CustomColor.vue?raw';
import DefaultRange                  from '@/Forms/Range/DefaultRange.vue';
import DefaultRangeRaw               from '@/Forms/Range/DefaultRange.vue?raw';
import DisabledRange                 from '@/Forms/Range/DisabledRange.vue';
import DisabledRangeRaw              from '@/Forms/Range/DisabledRange.vue?raw';
import MinMaxAndStepRange            from '@/Forms/Range/MinMaxAndStepRange.vue';
import MinMaxAndStepRangeRaw         from '@/Forms/Range/MinMaxAndStepRange.vue?raw';
import RangeColor                    from '@/Forms/Range/RangeColor.vue';
import RangeColorRaw                 from '@/Forms/Range/RangeColor.vue?raw';
import RangeSize                     from '@/Forms/Range/RangeSize.vue';
import RangeSizeRaw                  from '@/Forms/Range/RangeSize.vue?raw';
import StepsRange                    from '@/Forms/Range/StepsRange.vue';
import StepsRangeRaw                 from '@/Forms/Range/StepsRange.vue?raw';
import { computed }                  from 'vue';

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

const previews = computed(() => {
    return new Map<Section, ComponentDocsPreview>([
        [
            'default',
            {
                code:      DefaultRangeRaw,
                component: DefaultRange,
            },
        ],
        [
            'size',
            {
                code:      RangeSizeRaw,
                component: RangeSize,
                grid:      { rows: 5, columns: 1 },
            },
        ],
        [
            'color',
            {
                code:      RangeColorRaw,
                component: RangeColor,
            },
        ],
        [
            'custom-color',
            {
                code:      CustomColorRaw,
                component: CustomColor,
            },
        ],
        [
            'disabled',
            {
                code:      DisabledRangeRaw,
                component: DisabledRange,
            },
        ],
        [
            'min-max-and-step',
            {
                code:      MinMaxAndStepRangeRaw,
                component: MinMaxAndStepRange,
            },
        ],
        [
            'steps',
            {
                code:      StepsRangeRaw,
                component: StepsRange,
            },
        ],
    ]);
});
</script>
