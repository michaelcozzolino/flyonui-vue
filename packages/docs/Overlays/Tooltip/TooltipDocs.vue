<template>
    <ComponentPreview v-if="section === 'default'"
                      :data-test-screenshot="section"
                      :code="DefaultTooltipRaw"
                      :component="DefaultTooltip"
    />

    <ComponentPreview v-else-if="section === 'color'"
                      :data-test-screenshot="section"
                      :code="TooltipColorRaw"
                      :component="TooltipColor"
    />

    <ComponentPreview v-else-if="section === 'placement'"
                      :data-test-screenshot="section"
                      :code="TooltipPlacementRaw"
                      :component="TooltipPlacement"
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
import DefaultTooltip      from '@/Overlays/Tooltip/DefaultTooltip.vue';
import DefaultTooltipRaw   from '@/Overlays/Tooltip/DefaultTooltip.vue?raw';
import TooltipColor        from '@/Overlays/Tooltip/TooltipColor.vue';
import TooltipColorRaw     from '@/Overlays/Tooltip/TooltipColor.vue?raw';
import TooltipPlacement    from '@/Overlays/Tooltip/TooltipPlacement.vue';
import TooltipPlacementRaw from '@/Overlays/Tooltip/TooltipPlacement.vue?raw';

interface Props {
    section: Default | 'color' | 'placement' | ApiType;
}

defineProps<Props>();
</script>
