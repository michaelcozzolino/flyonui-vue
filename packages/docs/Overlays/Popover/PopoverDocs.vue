<template>
    <CodeSnippet v-if="section === 'default'"
                 :code="DefaultPopoverRaw"
                 :component="DefaultPopover"
    />

    <CodeSnippet v-if="section === 'color'"
                 :code="PopoverColorRaw"
                 :component="PopoverColor"
    />

    <CodeSnippet v-if="section === 'placement'"
                 :code="PopoverPlacementRaw"
                 :component="PopoverPlacement"
    />
</template>

<script setup lang="ts">
import type { Default }    from 'flyonui-vue';
import CodeSnippet         from '@/.vitepress/theme/Components/CodeSnippet.vue';
import DefaultPopover      from '@/Overlays/Popover/DefaultPopover.vue';
import DefaultPopoverRaw   from '@/Overlays/Popover/DefaultPopover.vue?raw';
import PopoverColor        from '@/Overlays/Popover/PopoverColor.vue';
import PopoverColorRaw     from '@/Overlays/Popover/PopoverColor.vue?raw';
import PopoverPlacement    from '@/Overlays/Popover/PopoverPlacement.vue';
import PopoverPlacementRaw from '@/Overlays/Popover/PopoverPlacement.vue?raw';

interface Props {
    section: Default | 'color' | 'placement';
}

defineProps<Props>();
</script>
