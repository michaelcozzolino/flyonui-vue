<template>
    <CodeSnippet v-if="section === 'shape'"
                 id="shape"
                 :code="MaskShapeRaw"
                 :component="MaskShape"
                 :preview="{ columns: 4, rows: 6 }"
    />

    <CodeSnippet v-else-if="section === 'v-mask'"
                 id="v-mask"
                 :code="VMaskRaw"
                 :component="VMask"
                 :preview="{ columns: 4, rows: 6 }"
    />
</template>

<script setup lang="ts">
import CodeSnippet from '@/.vitepress/theme/Components/CodeSnippet/UI/CodeSnippet.vue';

import MaskShape    from '@/Content/Mask/MaskShape.vue';
import MaskShapeRaw from '@/Content/Mask/MaskShape.vue?raw';
import VMask        from '@/Content/Mask/VMask.vue';
import VMaskRaw     from '@/Content/Mask/VMask.vue?raw';

interface Props {
    section: 'shape' | 'v-mask';
}

defineProps<Props>();
</script>
