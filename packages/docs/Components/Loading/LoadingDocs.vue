<template>
    <CodeSnippet v-if="section === 'animation'"
                 :code="LoadingAnimationRaw"
                 :component="LoadingAnimation"
                 :preview="{ columns: 4, rows: 6 }"
    />

    <CodeSnippet v-else-if="section === 'color'"
                 :code="LoadingColorRaw"
                 :component="LoadingColor"
    />
</template>

<script setup lang="ts">
import CodeSnippet         from '@/.vitepress/theme/Components/CodeSnippet.vue';
import LoadingAnimation    from '@/Components/Loading/LoadingAnimation.vue';
import LoadingAnimationRaw from '@/Components/Loading/LoadingAnimation.vue?raw';
import LoadingColor        from '@/Components/Loading/LoadingColor.vue';
import LoadingColorRaw     from '@/Components/Loading/LoadingColor.vue?raw';

interface Props {
    section: 'animation' | 'color';
}

defineProps<Props>();
</script>
