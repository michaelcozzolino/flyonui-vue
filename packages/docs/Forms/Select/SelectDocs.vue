<template>
    <CodeSnippet v-if="section === 'default'"
                 id="default"
                 :code="DefaultSelectRaw"
                 :component="DefaultSelect"
    />

    <CodeSnippet v-else-if="section === 'floating-label'"
                 id="floating-label"
                 :code="SelectFloatingLabelRaw"
                 :component="SelectFloatingLabel"
    />

    <CodeSnippet v-else-if="section === 'default-size'"
                 id="default-size"
                 :preview="{ columns: 1, rows: 4 }"
                 :code="DefaultSelectSizeRaw"
                 :component="DefaultSelectSize"
    />

    <CodeSnippet v-else-if="section === 'floating-label-size'"
                 id="floating-label-size"
                 :preview="{ columns: 1, rows: 3 }"
                 :code="SelectFloatingLabelSizeRaw"
                 :component="SelectFloatingLabelSize"
    />
</template>

<script setup lang="ts">
import type { Default }           from 'flyonui-vue';
import CodeSnippet                from '@/.vitepress/theme/Components/CodeSnippet/UI/CodeSnippet.vue';
import DefaultSelect              from '@/Forms/Select/DefaultSelect.vue';
import DefaultSelectRaw           from '@/Forms/Select/DefaultSelect.vue?raw';
import DefaultSelectSize          from '@/Forms/Select/DefaultSelectSize.vue';
import DefaultSelectSizeRaw       from '@/Forms/Select/DefaultSelectSize.vue?raw';
import SelectFloatingLabel        from '@/Forms/Select/SelectFloatingLabel.vue';
import SelectFloatingLabelRaw     from '@/Forms/Select/SelectFloatingLabel.vue?raw';
import SelectFloatingLabelSize    from '@/Forms/Select/SelectFloatingLabelSize.vue';
import SelectFloatingLabelSizeRaw from '@/Forms/Select/SelectFloatingLabelSize.vue?raw';

interface Props {
    section: Default | 'floating-label' | 'default-size' | 'floating-label-size';
}

defineProps<Props>();
</script>
