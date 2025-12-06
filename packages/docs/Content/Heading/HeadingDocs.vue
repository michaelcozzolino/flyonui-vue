<template>
    <ComponentPreview v-if="section === 'level'"
                      :data-test-screenshot="section"
                      :code="HeadingLevelRaw"
                      :component="HeadingLevel"
                      :grid="{ columns: 1, rows: 6 }"
    />
</template>

<script setup lang="ts">
import ComponentPreview from '@/.vitepress/theme/Components/Preview/UI/ComponentPreview.vue';
import HeadingLevel     from '@/Content/Heading/HeadingLevel.vue';
import HeadingLevelRaw  from '@/Content/Heading/HeadingLevel.vue?raw';

interface Props {
    section: 'level';
}

defineProps<Props>();
</script>
