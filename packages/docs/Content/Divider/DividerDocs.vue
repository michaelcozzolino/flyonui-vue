<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   api-docs-component-names="FoDivider"
    />
</template>

<script setup lang="ts">
import type { ComponentDocsPreview }    from '@/.vitepress/theme/Components/ComponentDocs/Types/ComponentDocs';
import type { ApiType }                 from '@/Api/Types/Api.ts';
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
import { computed }                     from 'vue';

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

const previews = computed(() => {
    return new Map<Section, ComponentDocsPreview>([
        [
            'vertical',
            {
                code:      VerticalDividerRaw,
                component: VerticalDivider,
            },
        ],
        [
            'horizontal',
            {
                code:      HorizontalDividerRaw,
                component: HorizontalDivider,
            },
        ],
        [
            'solid',
            {
                code:      SolidDividerRaw,
                component: SolidDivider,
            },
        ],
        [
            'dotted',
            {
                code:      DottedDividerRaw,
                component: DottedDivider,
            },
        ],
        [
            'dashed',
            {
                code:      DashedDividerRaw,
                component: DashedDivider,
            },
        ],
        [
            'with-custom-thickness',
            {
                code:      DividerWithCustomThicknessRaw,
                component: DividerWithCustomThickness,
            },
        ],
        [
            'content-alignment',
            {
                code:      DividerContentAlignmentRaw,
                component: DividerContentAlignment,
            },
        ],
        [
            'horizontally-responsive',
            {
                code:      HorizontallyResponsiveDividerRaw,
                component: HorizontallyResponsiveDivider,
            },
        ],
        [
            'vertically-responsive',
            {
                code:      VerticallyResponsiveDividerRaw,
                component: VerticallyResponsiveDivider,
            },
        ],
    ]);
});
</script>
