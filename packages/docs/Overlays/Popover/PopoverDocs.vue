<template>
    <CodeSnippet v-if="section === 'default'"
                 id="default"
                 :code="DefaultPopoverRaw"
                 :component="DefaultPopover"
    />

    <CodeSnippet v-else-if="section === 'color'"
                 id="color"
                 :code="PopoverColorRaw"
                 :component="PopoverColor"
    />

    <CodeSnippet v-else-if="section === 'placement'"
                 id="placement"
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
import CodeSnippet         from '@/.vitepress/theme/Components/CodeSnippet/UI/CodeSnippet.vue';
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
