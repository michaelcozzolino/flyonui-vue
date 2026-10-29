<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   api-docs-component-names="FoRadialProgress"
    />
</template>

<script setup lang="ts">
import type { Default }                        from 'flyonui-vue';
import type { FrameworkSectionPreview }        from '@/.vitepress/theme/Components/Preview/Types/Preview';
import type { ApiType }                        from '@/Api/Types/Api';
import { computed }                            from 'vue';
import ComponentDocs                           from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import CustomRadialProgressSizeAndThickness    from '@/Components/RadialProgress/CustomRadialProgressSizeAndThickness.vue';
import CustomRadialProgressSizeAndThicknessRaw from '@/Components/RadialProgress/CustomRadialProgressSizeAndThickness.vue?raw';
import DefaultRadialProgress                   from '@/Components/RadialProgress/DefaultRadialProgress.vue';
import DefaultRadialProgressRaw                from '@/Components/RadialProgress/DefaultRadialProgress.vue?raw';
import RadialProgressBackgroundColor           from '@/Components/RadialProgress/RadialProgressBackgroundColor.vue';
import RadialProgressBackgroundColorRaw        from '@/Components/RadialProgress/RadialProgressBackgroundColor.vue?raw';
import RadialProgressColor                     from '@/Components/RadialProgress/RadialProgressColor.vue';
import RadialProgressColorRaw                  from '@/Components/RadialProgress/RadialProgressColor.vue?raw';
import RadialProgressSoftBackground            from '@/Components/RadialProgress/RadialProgressSoftBackground.vue';
import RadialProgressSoftBackgroundRaw         from '@/Components/RadialProgress/RadialProgressSoftBackground.vue?raw';
import RadialProgressWithText                  from '@/Components/RadialProgress/RadialProgressWithText.vue';
import RadialProgressWithTextRaw               from '@/Components/RadialProgress/RadialProgressWithText.vue?raw';
import RadialProgressWithValue                 from '@/Components/RadialProgress/RadialProgressWithValue.vue';
import RadialProgressWithValueRaw              from '@/Components/RadialProgress/RadialProgressWithValue.vue?raw';

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
    return new Map<Section, FrameworkSectionPreview>([
        [
            'default',
            {
                vue: {
                    codePreview: DefaultRadialProgressRaw,
                    component:   DefaultRadialProgress,
                },
            },
        ],
        [
            'with-value',
            {
                vue: {
                    codePreview: RadialProgressWithValueRaw,
                    component:   RadialProgressWithValue,
                },
            },
        ],
        [
            'with-text',
            {
                vue: {
                    codePreview: RadialProgressWithTextRaw,
                    component:   RadialProgressWithText,
                },
            },
        ],
        [
            'color',
            {
                vue: {
                    codePreview: RadialProgressColorRaw,
                    component:   RadialProgressColor,
                },
            },
        ],
        [
            'background-color',
            {
                vue: {
                    codePreview: RadialProgressBackgroundColorRaw,
                    component:   RadialProgressBackgroundColor,
                },
            },
        ],
        [
            'soft-background',
            {
                vue: {
                    codePreview: RadialProgressSoftBackgroundRaw,
                    component:   RadialProgressSoftBackground,
                },
            },
        ],
        [
            'custom-size-and-thickness',
            {
                vue: {
                    codePreview: CustomRadialProgressSizeAndThicknessRaw,
                    component:   CustomRadialProgressSizeAndThickness,
                },
            },
        ],
    ]);
});
</script>
