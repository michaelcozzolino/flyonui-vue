<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   api-docs-component-names="FoPopover"
    />
</template>

<script setup lang="ts">
import type { Default }                 from 'flyonui-vue';
import type { FrameworkSectionPreview } from '@/.vitepress/theme/Components/Preview/Types/Preview';
import type { ApiType }                 from '@/Api/Types/Api';
import { computed }                     from 'vue';
import ComponentDocs                    from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import DefaultPopover                   from '@/Overlays/Popover/DefaultPopover.vue';
import DefaultPopoverRaw                from '@/Overlays/Popover/DefaultPopover.vue?raw';
import PopoverColor                     from '@/Overlays/Popover/PopoverColor.vue';
import PopoverColorRaw                  from '@/Overlays/Popover/PopoverColor.vue?raw';
import PopoverPlacement                 from '@/Overlays/Popover/PopoverPlacement.vue';
import PopoverPlacementRaw              from '@/Overlays/Popover/PopoverPlacement.vue?raw';

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
                    codePreview: DefaultPopoverRaw,
                    component:   DefaultPopover,
                },
            },
        ],
        [
            'color',
            {
                vue: {
                    codePreview: PopoverColorRaw,
                    component:   PopoverColor,
                },
            },
        ],
        [
            'placement',
            {
                vue: {
                    codePreview: PopoverPlacementRaw,
                    component:   PopoverPlacement,
                },
            },
        ],
    ]);
});
</script>
