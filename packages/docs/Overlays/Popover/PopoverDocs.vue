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
import DefaultPopover                from '@/Overlays/Popover/DefaultPopover.vue';
import DefaultPopoverRaw             from '@/Overlays/Popover/DefaultPopover.vue?raw';
import PopoverColor                  from '@/Overlays/Popover/PopoverColor.vue';
import PopoverColorRaw               from '@/Overlays/Popover/PopoverColor.vue?raw';
import PopoverPlacement              from '@/Overlays/Popover/PopoverPlacement.vue';
import PopoverPlacementRaw           from '@/Overlays/Popover/PopoverPlacement.vue?raw';
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
                code:      DefaultPopoverRaw,
                component: DefaultPopover,
            },
        ],
        [
            'color',
            {
                code:      PopoverColorRaw,
                component: PopoverColor,
            },
        ],
        [
            'placement',
            {
                code:      PopoverPlacementRaw,
                component: PopoverPlacement,
            },
        ],
    ]);
});
</script>
