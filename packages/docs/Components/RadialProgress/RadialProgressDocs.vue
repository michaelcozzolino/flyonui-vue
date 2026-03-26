<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   api-docs-component-names="FoRadialProgress"
    />
</template>

<script setup lang="ts">
import type { ComponentDocsPreview }        from '@/.vitepress/theme/Components/ComponentDocs/Types/ComponentDocs';
import type { ApiType }                     from '@/Api/Types/Api.ts';
import type { Default }                     from 'flyonui-vue';
import ComponentDocs                        from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import CustomRadialProgressSizeAndThickness
    from '@/Components/RadialProgress/CustomRadialProgressSizeAndThickness.vue';
import CustomRadialProgressSizeAndThicknessRaw
    from '@/Components/RadialProgress/CustomRadialProgressSizeAndThickness.vue?raw';
import DefaultRadialProgress            from '@/Components/RadialProgress/DefaultRadialProgress.vue';
import DefaultRadialProgressRaw         from '@/Components/RadialProgress/DefaultRadialProgress.vue?raw';
import RadialProgressBackgroundColor    from '@/Components/RadialProgress/RadialProgressBackgroundColor.vue';
import RadialProgressBackgroundColorRaw
    from '@/Components/RadialProgress/RadialProgressBackgroundColor.vue?raw';
import RadialProgressColor             from '@/Components/RadialProgress/RadialProgressColor.vue';
import RadialProgressColorRaw          from '@/Components/RadialProgress/RadialProgressColor.vue?raw';
import RadialProgressSoftBackground    from '@/Components/RadialProgress/RadialProgressSoftBackground.vue';
import RadialProgressSoftBackgroundRaw
    from '@/Components/RadialProgress/RadialProgressSoftBackground.vue?raw';
import RadialProgressWithText     from '@/Components/RadialProgress/RadialProgressWithText.vue';
import RadialProgressWithTextRaw  from '@/Components/RadialProgress/RadialProgressWithText.vue?raw';
import RadialProgressWithValue    from '@/Components/RadialProgress/RadialProgressWithValue.vue';
import RadialProgressWithValueRaw from '@/Components/RadialProgress/RadialProgressWithValue.vue?raw';
import { computed }               from 'vue';

type Section = Default
    | 'with-value'
    | 'with-text'
    | 'color'
    | 'background-color'
    | 'soft-background'
    | 'custom-size-and-thickness'
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
                code:      DefaultRadialProgressRaw,
                component: DefaultRadialProgress,
            },
        ],
        [
            'with-value',
            {
                code:      RadialProgressWithValueRaw,
                component: RadialProgressWithValue,
            },
        ],
        [
            'with-text',
            {
                code:      RadialProgressWithTextRaw,
                component: RadialProgressWithText,
            },
        ],
        [
            'color',
            {
                code:      RadialProgressColorRaw,
                component: RadialProgressColor,
            },
        ],
        [
            'background-color',
            {
                code:      RadialProgressBackgroundColorRaw,
                component: RadialProgressBackgroundColor,
            },
        ],
        [
            'soft-background',
            {
                code:      RadialProgressSoftBackgroundRaw,
                component: RadialProgressSoftBackground,
            },
        ],
        [
            'custom-size-and-thickness',
            {
                code:      CustomRadialProgressSizeAndThicknessRaw,
                component: CustomRadialProgressSizeAndThickness,
            },
        ],
    ]);
});
</script>
