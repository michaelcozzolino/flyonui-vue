<template>
    <ComponentPreview v-if="section === 'animation'"
                      :code="LoadingAnimationRaw"
                      :component="LoadingAnimation"
                      :grid="{ columns: 5, rows: 6 }"
    />

    <ComponentPreview v-else-if="section === 'color'"
                      :code="LoadingColorRaw"
                      :component="LoadingColor"
    />
</template>

<script setup lang="ts">
import ComponentPreview    from '@/.vitepress/theme/Components/Preview/UI/ComponentPreview.vue';
import LoadingAnimation    from '@/Components/Loading/LoadingAnimation.vue';
import LoadingAnimationRaw from '@/Components/Loading/LoadingAnimation.vue?raw';
import LoadingColor        from '@/Components/Loading/LoadingColor.vue';
import LoadingColorRaw     from '@/Components/Loading/LoadingColor.vue?raw';

interface Props {
    section: 'animation' | 'color';
}

defineProps<Props>();
</script>
