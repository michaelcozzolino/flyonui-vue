<template>
    <ComponentPreview v-if="section === 'default'"
                      :data-test-screenshot="section"
                      :code="DefaultPopoverRaw"
                      :component="DefaultPopover"
    />

    <ComponentPreview v-else-if="section === 'color'"
                      :data-test-screenshot="section"
                      :code="PopoverColorRaw"
                      :component="PopoverColor"
    />

    <ComponentPreview v-else-if="section === 'placement'"
                      :data-test-screenshot="section"
                      :code="PopoverPlacementRaw"
                      :component="PopoverPlacement"
    />

    <ComponentsApiDocs v-else
                       :section="section"
                       component-names="FoTooltip"
    />
</template>

<script setup lang="ts">
import type { ApiType }    from '@/Api/Types/Api.ts';
import type { Default }    from 'flyonui-vue';
import ComponentPreview    from '@/.vitepress/theme/Components/Preview/UI/ComponentPreview.vue';
import ComponentsApiDocs   from '@/Api/UI/ComponentsApiDocs.vue';
import DefaultPopover      from '@/Overlays/Popover/DefaultPopover.vue';
import DefaultPopoverRaw   from '@/Overlays/Popover/DefaultPopover.vue?raw';
import PopoverColor        from '@/Overlays/Popover/PopoverColor.vue';
import PopoverColorRaw     from '@/Overlays/Popover/PopoverColor.vue?raw';
import PopoverPlacement    from '@/Overlays/Popover/PopoverPlacement.vue';
import PopoverPlacementRaw from '@/Overlays/Popover/PopoverPlacement.vue?raw';

interface Props {
    section: Default | 'color' | 'placement' | ApiType;
}

defineProps<Props>();
</script>
