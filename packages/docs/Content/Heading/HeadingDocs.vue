<template>
    <CodeSnippet v-if="section === 'heading'"
                 id="heading"
                 :code="HeadingRaw"
                 :component="Heading"
                 :preview="{ columns: 1, rows: 6 }"
    />
</template>

<script setup lang="ts">
import CodeSnippet from '@/.vitepress/theme/Components/CodeSnippet/UI/CodeSnippet.vue';
import Heading     from '@/Content/Heading/Heading.vue';
import HeadingRaw  from '@/Content/Heading/Heading.vue?raw';

interface Props {
    section: 'heading';
}

defineProps<Props>();
</script>
