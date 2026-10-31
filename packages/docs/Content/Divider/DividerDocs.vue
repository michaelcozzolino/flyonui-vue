<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   api-docs-component-names="FoDivider"
    />
</template>

<script setup lang="ts">
import type { FrameworkSectionPreview } from '@/.vitepress/theme/Components/Preview/Types/Preview';
import type { ApiType }                 from '@/Api/Types/Api';
import { computed }                     from 'vue';
import ComponentDocs                    from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import DashedDivider                    from '@/Content/Divider/DashedDivider.vue';
import DashedDividerRaw                 from '@/Content/Divider/DashedDivider.vue?raw';
import DividerContentAlignment          from '@/Content/Divider/DividerContentAlignment.vue';
import DividerContentAlignmentRaw       from '@/Content/Divider/DividerContentAlignment.vue?raw';
import DividerWithCustomThickness       from '@/Content/Divider/DividerWithCustomThickness.vue';
import DividerWithCustomThicknessRaw    from '@/Content/Divider/DividerWithCustomThickness.vue?raw';
import DottedDivider                    from '@/Content/Divider/DottedDivider.vue';
import DottedDividerRaw                 from '@/Content/Divider/DottedDivider.vue?raw';
import HorizontalDivider                from '@/Content/Divider/HorizontalDivider.vue';
import HorizontalDividerRaw             from '@/Content/Divider/HorizontalDivider.vue?raw';
import HorizontallyResponsiveDivider    from '@/Content/Divider/HorizontallyResponsiveDivider.vue';
import HorizontallyResponsiveDividerRaw from '@/Content/Divider/HorizontallyResponsiveDivider.vue?raw';
import SolidDivider                     from '@/Content/Divider/SolidDivider.vue';
import SolidDividerRaw                  from '@/Content/Divider/SolidDivider.vue?raw';
import VerticalDivider                  from '@/Content/Divider/VerticalDivider.vue';
import VerticalDividerRaw               from '@/Content/Divider/VerticalDivider.vue?raw';
import VerticallyResponsiveDivider      from '@/Content/Divider/VerticallyResponsiveDivider.vue';
import VerticallyResponsiveDividerRaw   from '@/Content/Divider/VerticallyResponsiveDivider.vue?raw';

type Section = 'vertical'
    | 'horizontal'
    | 'solid'
    | 'dotted'
    | 'dashed'
    | 'with-custom-thickness'
    | 'content-alignment'
    | 'horizontally-responsive'
    | 'vertically-responsive'
    | ApiType;

interface Props {
    section: Section;
}

defineProps<Props>();

const previews = computed((): Map<Section, FrameworkSectionPreview> => {
    return new Map<Section, FrameworkSectionPreview>([
        [
            'vertical',
            {
                vue: {
                    codePreview: VerticalDividerRaw,
                    component:   VerticalDivider,
                },
            },
        ],
        [
            'horizontal',
            {
                vue: {
                    codePreview: HorizontalDividerRaw,
                    component:   HorizontalDivider,
                },
            },
        ],
        [
            'solid',
            {
                vue: {
                    codePreview: SolidDividerRaw,
                    component:   SolidDivider,
                },
            },
        ],
        [
            'dotted',
            {
                vue: {
                    codePreview: DottedDividerRaw,
                    component:   DottedDivider,
                },
            },
        ],
        [
            'dashed',
            {
                vue: {
                    codePreview: DashedDividerRaw,
                    component:   DashedDivider,
                },
            },
        ],
        [
            'with-custom-thickness',
            {
                vue: {
                    codePreview: DividerWithCustomThicknessRaw,
                    component:   DividerWithCustomThickness,
                },
            },
        ],
        [
            'content-alignment',
            {
                vue: {
                    codePreview: DividerContentAlignmentRaw,
                    component:   DividerContentAlignment,
                },
            },
        ],
        [
            'horizontally-responsive',
            {
                vue: {
                    codePreview: HorizontallyResponsiveDividerRaw,
                    component:   HorizontallyResponsiveDivider,
                },
            },
        ],
        [
            'vertically-responsive',
            {
                vue: {
                    codePreview: VerticallyResponsiveDividerRaw,
                    component:   VerticallyResponsiveDivider,
                },
            },
        ],
    ]);
});
</script>
