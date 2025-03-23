<template>
    <CodeSnippet v-if="section === 'default'"
                 :code="DefaultTextareaRaw"
                 :component="DefaultTextarea"
                 :preview="{ columns: 1, rows: 1 }"
    />

    <CodeSnippet v-else-if="section === 'with-label-and-placeholder'"
                 :code="TextareaWithLabelAndPlaceholderRaw"
                 :component="TextareaWithLabelAndPlaceholder"
                 :preview="{ columns: 1, rows: 1 }"
    />

    <CodeSnippet v-else-if="section === 'hidden-label'"
                 :code="TextareaHiddenLabelRaw"
                 :component="TextareaHiddenLabel"
                 :preview="{ columns: 1, rows: 1 }"
    />

    <CodeSnippet v-else-if="section === 'floating-label'"
                 :code="TextareaFloatingLabelRaw"
                 :component="TextareaFloatingLabel"
                 :preview="{ columns: 1, rows: 1 }"
    />

    <CodeSnippet v-else-if="section === 'filled-label'"
                 :code="TextareaFilledLabelRaw"
                 :component="TextareaFilledLabel"
                 :preview="{ columns: 1, rows: 1 }"
    />

    <CodeSnippet v-else-if="section === 'with-helper-text'"
                 :code="TextareaWithHelperTextRaw"
                 :component="TextareaWithHelperText"
                 :preview="{ columns: 1, rows: 3 }"
    />

    <CodeSnippet v-else-if="section === 'validation-state'"
                 :code="TextareaValidationStateRaw"
                 :component="TextareaValidationState"
                 :preview="{ columns: 1, rows: 6 }"
    />

    <CodeSnippet v-else-if="section === 'disabled'"
                 :code="DisabledTextareaRaw"
                 :component="DisabledTextarea"
                 :preview="{ columns: 1, rows: 3 }"
    />

    <CodeSnippet v-else-if="section === 'readonly'"
                 :code="ReadonlyTextareaRaw"
                 :component="ReadonlyTextarea"
                 :preview="{ columns: 1, rows: 1 }"
    />
</template>

<script setup lang="ts">
import type { Default }                   from 'flyonui-vue';
import CodeSnippet                        from '@/.vitepress/theme/Components/CodeSnippet.vue';
import DefaultTextarea                    from '@/Forms/Textarea/DefaultTextarea.vue';
import DefaultTextareaRaw                 from '@/Forms/Textarea/DefaultTextarea.vue?raw';
import DisabledTextarea                   from '@/Forms/Textarea/DisabledTextarea.vue';
import DisabledTextareaRaw                from '@/Forms/Textarea/DisabledTextarea.vue?raw';
import ReadonlyTextarea                   from '@/Forms/Textarea/ReadonlyTextarea.vue';
import ReadonlyTextareaRaw                from '@/Forms/Textarea/ReadonlyTextarea.vue?raw';
import TextareaFilledLabel                from '@/Forms/Textarea/TextareaFilledLabel.vue';
import TextareaFilledLabelRaw             from '@/Forms/Textarea/TextareaFilledLabel.vue?raw';
import TextareaFloatingLabel              from '@/Forms/Textarea/TextareaFloatingLabel.vue';
import TextareaFloatingLabelRaw           from '@/Forms/Textarea/TextareaFloatingLabel.vue?raw';
import TextareaHiddenLabel                from '@/Forms/Textarea/TextareaHiddenLabel.vue';
import TextareaHiddenLabelRaw             from '@/Forms/Textarea/TextareaHiddenLabel.vue?raw';
import TextareaValidationState            from '@/Forms/Textarea/TextareaValidationState.vue';
import TextareaValidationStateRaw         from '@/Forms/Textarea/TextareaValidationState.vue?raw';
import TextareaWithHelperText             from '@/Forms/Textarea/TextareaWithHelperText.vue';
import TextareaWithHelperTextRaw          from '@/Forms/Textarea/TextareaWithHelperText.vue?raw';
import TextareaWithLabelAndPlaceholder    from '@/Forms/Textarea/TextareaWithLabelAndPlaceholder.vue';
import TextareaWithLabelAndPlaceholderRaw from '@/Forms/Textarea/TextareaWithLabelAndPlaceholder.vue?raw';

interface Props {
    section: Default
        | 'with-label-and-placeholder'
        | 'hidden-label'
        | 'floating-label'
        | 'filled-label'
        | 'with-helper-text'
        | 'validation-state'
        | 'disabled'
        | 'readonly';
}

defineProps<Props>();
</script>
