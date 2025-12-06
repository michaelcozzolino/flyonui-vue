<template>
    <ComponentPreview v-if="section === 'shape'"
                      :data-test-screenshot="section"
                      :code="MaskShapeRaw"
                      :component="MaskShape"
                      :grid="{ columns: 4, rows: 6 }"
    />

    <ComponentPreview v-else-if="section === 'v-mask'"
                      :data-test-screenshot="section"
                      :code="VMaskRaw"
                      :component="VMask"
                      :grid="{ columns: 4, rows: 6 }"
    />
</template>

<script setup lang="ts">
import ComponentPreview from '@/.vitepress/theme/Components/Preview/UI/ComponentPreview.vue';

import MaskShape    from '@/Content/Mask/MaskShape.vue';
import MaskShapeRaw from '@/Content/Mask/MaskShape.vue?raw';
import VMask        from '@/Content/Mask/VMask.vue';
import VMaskRaw     from '@/Content/Mask/VMask.vue?raw';

interface Props {
    section: 'shape' | 'v-mask';
}

defineProps<Props>();
</script>
