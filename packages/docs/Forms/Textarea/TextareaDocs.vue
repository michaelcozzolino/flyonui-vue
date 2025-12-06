<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   api-docs-component-names="FoTextarea"
    />
</template>

<script setup lang="ts">
import type { ComponentDocsPreview }      from '@/.vitepress/theme/Components/ComponentDocs/Types/ComponentDocs';
import type { ApiType }                   from '@/Api/Types/Api.ts';
import type { Default }                   from 'flyonui-vue';
import ComponentDocs                      from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import DefaultTextarea                    from '@/Forms/Textarea/DefaultTextarea.vue';
import DefaultTextareaRaw                 from '@/Forms/Textarea/DefaultTextarea.vue?raw';
import DisabledTextarea                   from '@/Forms/Textarea/DisabledTextarea.vue';
import DisabledTextareaRaw                from '@/Forms/Textarea/DisabledTextarea.vue?raw';
import ReadonlyTextarea                   from '@/Forms/Textarea/ReadonlyTextarea.vue';
import ReadonlyTextareaRaw                from '@/Forms/Textarea/ReadonlyTextarea.vue?raw';
import TextareaDefaultSize                from '@/Forms/Textarea/TextareaDefaultSize.vue';
import TextareaDefaultSizeRaw             from '@/Forms/Textarea/TextareaDefaultSize.vue?raw';
import TextareaFloatingLabel              from '@/Forms/Textarea/TextareaFloatingLabel.vue';
import TextareaFloatingLabelRaw           from '@/Forms/Textarea/TextareaFloatingLabel.vue?raw';
import TextareaFloatingLabelSize          from '@/Forms/Textarea/TextareaFloatingLabelSize.vue';
import TextareaFloatingLabelSizeRaw       from '@/Forms/Textarea/TextareaFloatingLabelSize.vue?raw';
import TextareaHiddenLabel                from '@/Forms/Textarea/TextareaHiddenLabel.vue';
import TextareaHiddenLabelRaw             from '@/Forms/Textarea/TextareaHiddenLabel.vue?raw';
import TextareaValidationState            from '@/Forms/Textarea/TextareaValidationState.vue';
import TextareaValidationStateRaw         from '@/Forms/Textarea/TextareaValidationState.vue?raw';
import TextareaWithHelperText             from '@/Forms/Textarea/TextareaWithHelperText.vue';
import TextareaWithHelperTextRaw          from '@/Forms/Textarea/TextareaWithHelperText.vue?raw';
import TextareaWithIcon                   from '@/Forms/Textarea/TextareaWithIcon.vue';
import TextareaWithIconRaw                from '@/Forms/Textarea/TextareaWithIcon.vue?raw';
import TextareaWithLabelAndPlaceholder    from '@/Forms/Textarea/TextareaWithLabelAndPlaceholder.vue';
import TextareaWithLabelAndPlaceholderRaw from '@/Forms/Textarea/TextareaWithLabelAndPlaceholder.vue?raw';
import { computed }                       from 'vue';

type Section = Default
    | 'with-label-and-placeholder'
    | 'hidden-label'
    | 'floating-label'
    | 'default-size'
    | 'floating-label-size'
    | 'with-icon'
    | 'with-helper-text'
    | 'validation-state'
    | 'disabled'
    | 'readonly'
    | ApiType;

interface Props {
    section: Section;
}

defineProps<Props>();

const previews = computed(() => {
    return new Map<Section, ComponentDocsPreview>([
        [
            'default',
            {
                grid:      { columns: 1, rows: 1 },
                code:      DefaultTextareaRaw,
                component: DefaultTextarea,
            },
        ],
        [
            'with-label-and-placeholder',
            {
                grid:      { columns: 1, rows: 1 },
                code:      TextareaWithLabelAndPlaceholderRaw,
                component: TextareaWithLabelAndPlaceholder,
            },
        ],
        [
            'hidden-label',
            {
                grid:      { columns: 1, rows: 1 },
                code:      TextareaHiddenLabelRaw,
                component: TextareaHiddenLabel,
            },
        ],
        [
            'floating-label',
            {
                grid:      { columns: 1, rows: 1 },
                code:      TextareaFloatingLabelRaw,
                component: TextareaFloatingLabel,
            },
        ],
        [
            'default-size',
            {
                grid:      { columns: 1, rows: 5 },
                code:      TextareaDefaultSizeRaw,
                component: TextareaDefaultSize,
            },
        ],
        [
            'floating-label-size',
            {
                grid:      { columns: 1, rows: 5 },
                code:      TextareaFloatingLabelSizeRaw,
                component: TextareaFloatingLabelSize,
            },
        ],
        [
            'with-icon',
            {
                grid:      { columns: 1, rows: 6 },
                code:      TextareaWithIconRaw,
                component: TextareaWithIcon,
            },
        ],
        [
            'with-helper-text',
            {
                grid:      { columns: 1, rows: 2 },
                code:      TextareaWithHelperTextRaw,
                component: TextareaWithHelperText,
            },
        ],
        [
            'validation-state',
            {
                grid:      { columns: 1, rows: 4 },
                code:      TextareaValidationStateRaw,
                component: TextareaValidationState,
            },
        ],
        [
            'disabled',
            {
                grid:      { columns: 1, rows: 2 },
                code:      DisabledTextareaRaw,
                component: DisabledTextarea,
            },
        ],
        [
            'readonly',
            {
                grid:      { columns: 1, rows: 1 },
                code:      ReadonlyTextareaRaw,
                component: ReadonlyTextarea,
            },
        ],
    ]);
});
</script>
