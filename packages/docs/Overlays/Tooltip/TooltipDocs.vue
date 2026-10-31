<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   api-docs-component-names="FoTooltip"
    />
</template>

<script setup lang="ts">
import type { Default }                 from 'flyonui-vue';
import type { FrameworkSectionPreview } from '@/.vitepress/theme/Components/Preview/Types/Preview';
import type { ApiType }                 from '@/Api/Types/Api';
import { computed }                     from 'vue';
import ComponentDocs                    from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import DefaultTooltip                   from '@/Overlays/Tooltip/DefaultTooltip.vue';
import DefaultTooltipRaw                from '@/Overlays/Tooltip/DefaultTooltip.vue?raw';
import TooltipColor                     from '@/Overlays/Tooltip/TooltipColor.vue';
import TooltipColorRaw                  from '@/Overlays/Tooltip/TooltipColor.vue?raw';
import TooltipPlacement                 from '@/Overlays/Tooltip/TooltipPlacement.vue';
import TooltipPlacementRaw              from '@/Overlays/Tooltip/TooltipPlacement.vue?raw';

type Section = Default | 'color' | 'placement' | ApiType;

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
                    codePreview: DefaultTooltipRaw,
                    component:   DefaultTooltip,
                },
            },
        ],
        [
            'color',
            {
                vue: {
                    codePreview: TooltipColorRaw,
                    component:   TooltipColor,
                },
            },
        ],
        [
            'placement',
            {
                vue: {
                    codePreview: TooltipPlacementRaw,
                    component:   TooltipPlacement,
                },
            },
        ],
    ]);
});
</script>
