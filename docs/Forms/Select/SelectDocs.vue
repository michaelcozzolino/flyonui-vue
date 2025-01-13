<template>
    <CodeSnippet v-if="section === 'default'"
                 :code="DefaultSelectRaw"
                 :component="DefaultSelect"
    />

    <CodeSnippet v-else-if="section === 'floating-label'"
                 :code="SelectFloatingLabelRaw"
                 :component="SelectFloatingLabel"
    />

    <CodeSnippet v-else-if="section === 'filled-label'"
                 :code="SelectFilledLabelRaw"
                 :component="SelectFilledLabel"
    />

    <CodeSnippet v-else-if="section === 'default-size'"
                 :preview="{ columns: 1, rows: 4 }"
                 :code="DefaultSelectSizeRaw"
                 :component="DefaultSelectSize"
    />

    <CodeSnippet v-else-if="section === 'floating-label-size'"
                 :preview="{ columns: 1, rows: 3 }"
                 :code="SelectFloatingLabelSizeRaw"
                 :component="SelectFloatingLabelSize"
    />

    <CodeSnippet v-else-if="section === 'filled-label-size'"
                 :preview="{ columns: 1, rows: 3 }"
                 :code="SelectFilledLabelSizeRaw"
                 :component="SelectFilledLabelSize"
    />
</template>

<script setup lang="ts">
import type { Default }           from '@/Shared/Types/Variants';
import CodeSnippet                from '../../.vitepress/theme/Components/CodeSnippet.vue';
import DefaultSelect              from './DefaultSelect.vue';
import DefaultSelectRaw           from './DefaultSelect.vue?raw';
import DefaultSelectSize          from './DefaultSelectSize.vue';
import DefaultSelectSizeRaw       from './DefaultSelectSize.vue?raw';
import SelectFilledLabel          from './SelectFilledLabel.vue';
import SelectFilledLabelRaw       from './SelectFilledLabel.vue?raw';
import SelectFilledLabelSize      from './SelectFilledLabelSize.vue';
import SelectFilledLabelSizeRaw   from './SelectFilledLabelSize.vue?raw';
import SelectFloatingLabel        from './SelectFloatingLabel.vue';
import SelectFloatingLabelRaw     from './SelectFloatingLabel.vue?raw';
import SelectFloatingLabelSize    from './SelectFloatingLabelSize.vue';
import SelectFloatingLabelSizeRaw from './SelectFloatingLabelSize.vue?raw';

interface Props {
    section: Default | 'floating-label' | 'filled-label' | 'default-size' | 'floating-label-size' | 'filled-label-size';
}

defineProps<Props>();
</script>
