<template>
    <ComponentDocs :previews="previews"
                   :section="section"
    />
</template>

<script setup lang="ts">
import type { ComponentDocsPreview } from '@/.vitepress/theme/Components/ComponentDocs/Types/ComponentDocs';
import ComponentDocs                 from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import MaskShape                     from '@/Content/Mask/MaskShape.vue';
import MaskShapeRaw                  from '@/Content/Mask/MaskShape.vue?raw';
import VMask                         from '@/Content/Mask/VMask.vue';
import VMaskRaw                      from '@/Content/Mask/VMask.vue?raw';
import { computed }                  from 'vue';

type Section = 'shape' | 'v-mask';

interface Props {
    section: Section;
}

defineProps<Props>();

const previews = computed(() => {
    return new Map<Section, ComponentDocsPreview>([
        [
            'shape',
            {
                grid:      { columns: 4, rows: 6 },
                code:      MaskShapeRaw,
                component: MaskShape,
            },
        ],
        [
            'v-mask',
            {
                grid:      { columns: 4, rows: 6 },
                code:      VMaskRaw,
                component: VMask,
            },
        ],
    ]);
});
</script>
