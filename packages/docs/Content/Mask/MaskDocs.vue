<template>
    <ComponentDocs :previews="previews"
                   :section="section"
    />
</template>

<script setup lang="ts">
import type { FrameworkSectionPreview } from '@/.vitepress/theme/Components/Preview/Types/Preview';
import { computed }                     from 'vue';
import ComponentDocs                    from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import MaskShape                        from '@/Content/Mask/MaskShape.vue';
import MaskShapeRaw                     from '@/Content/Mask/MaskShape.vue?raw';
import VMask                            from '@/Content/Mask/VMask.vue';
import VMaskRaw                         from '@/Content/Mask/VMask.vue?raw';

type Section = 'shape' | 'v-mask';

interface Props {
    section: Section;
}

defineProps<Props>();

const previews = computed(() => {
    return new Map<Section, FrameworkSectionPreview>([
        [
            'shape',
            {
                vue: {
                    codePreview: MaskShapeRaw,
                    component:   MaskShape,
                },
                grid: { columns: 4, rows: 6 },
            },
        ],
        [
            'v-mask',
            {
                vue: {
                    codePreview: VMaskRaw,
                    component:   VMask,
                },
                grid: { columns: 4, rows: 6 },
            },
        ],
    ]);
});
</script>
