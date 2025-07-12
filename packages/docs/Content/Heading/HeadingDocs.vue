<template>
    <CodeSnippet v-if="section === 'level'"
                 id="level"
                 :code="HeadingLevelRaw"
                 :component="HeadingLevel"
                 :preview="{ columns: 1, rows: 6 }"
    />
</template>

<script setup lang="ts">
import CodeSnippet     from '@/.vitepress/theme/Components/CodeSnippet/UI/CodeSnippet.vue';
import HeadingLevel    from '@/Content/Heading/HeadingLevel.vue';
import HeadingLevelRaw from '@/Content/Heading/HeadingLevel.vue?raw';

interface Props {
    section: 'level';
}

defineProps<Props>();
</script>
