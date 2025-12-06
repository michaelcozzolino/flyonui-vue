<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   api-docs-component-names="FoTooltip"
    />
</template>

<script setup lang="ts">
import type { ComponentDocsPreview } from '@/.vitepress/theme/Components/ComponentDocs/Types/ComponentDocs';
import type { ApiType }              from '@/Api/Types/Api.ts';
import type { Default }              from 'flyonui-vue';
import ComponentDocs                 from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import DefaultTooltip                from '@/Overlays/Tooltip/DefaultTooltip.vue';
import DefaultTooltipRaw             from '@/Overlays/Tooltip/DefaultTooltip.vue?raw';
import TooltipColor                  from '@/Overlays/Tooltip/TooltipColor.vue';
import TooltipColorRaw               from '@/Overlays/Tooltip/TooltipColor.vue?raw';
import TooltipPlacement              from '@/Overlays/Tooltip/TooltipPlacement.vue';
import TooltipPlacementRaw           from '@/Overlays/Tooltip/TooltipPlacement.vue?raw';
import { computed }                  from 'vue';

type Section = Default | 'color' | 'placement' | ApiType;

interface Props {
    section: Section;
}

defineProps<Props>();

const previews = computed(() => {
    return new Map<Section, ComponentDocsPreview>([
        [
            'default',
            {
                code:      DefaultTooltipRaw,
                component: DefaultTooltip,
            },
        ],
        [
            'color',
            {
                code:      TooltipColorRaw,
                component: TooltipColor,
            },
        ],
        [
            'placement',
            {
                code:      TooltipPlacementRaw,
                component: TooltipPlacement,
            },
        ],
    ]);
});
</script>
