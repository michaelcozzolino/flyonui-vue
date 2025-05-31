<template>
    <CodeSnippet v-if="section === 'default'"
                 id="default"
                 :code="DefaultTooltipRaw"
                 :component="DefaultTooltip"
    />

    <CodeSnippet v-if="section === 'color'"
                 id="color"
                 :code="TooltipColorRaw"
                 :component="TooltipColor"
    />

    <CodeSnippet v-if="section === 'placement'"
                 id="placement"
                 :code="TooltipPlacementRaw"
                 :component="TooltipPlacement"
    />
</template>

<script setup lang="ts">
import type { Default }    from 'flyonui-vue';
import CodeSnippet         from '@/.vitepress/theme/Components/CodeSnippet/UI/CodeSnippet.vue';
import DefaultTooltip      from '@/Overlays/Tooltip/DefaultTooltip.vue';
import DefaultTooltipRaw   from '@/Overlays/Tooltip/DefaultTooltip.vue?raw';
import TooltipColor        from '@/Overlays/Tooltip/TooltipColor.vue';
import TooltipColorRaw     from '@/Overlays/Tooltip/TooltipColor.vue?raw';
import TooltipPlacement    from '@/Overlays/Tooltip/TooltipPlacement.vue';
import TooltipPlacementRaw from '@/Overlays/Tooltip/TooltipPlacement.vue?raw';

interface Props {
    section: Default | 'color' | 'placement';
}

defineProps<Props>();
</script>
