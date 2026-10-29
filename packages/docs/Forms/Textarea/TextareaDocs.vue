<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   api-docs-component-names="FoTextarea"
    />
</template>

<script setup lang="ts">
import type { Default }                   from 'flyonui-vue';
import type { FrameworkSectionPreview }   from '@/.vitepress/theme/Components/Preview/Types/Preview';
import type { ApiType }                   from '@/Api/Types/Api.ts';
import { computed }                       from 'vue';
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
    return new Map<Section, FrameworkSectionPreview>([
        [
            'default',
            {
                vue: {
                    codePreview: DefaultTextareaRaw,
                    component:   DefaultTextarea,
                },
                grid: { columns: 1, rows: 1 },
            },
        ],
        [
            'with-label-and-placeholder',
            {
                vue: {
                    codePreview: TextareaWithLabelAndPlaceholderRaw,
                    component:   TextareaWithLabelAndPlaceholder,
                },
                grid: { columns: 1, rows: 1 },
            },
        ],
        [
            'hidden-label',
            {
                vue: {
                    codePreview: TextareaHiddenLabelRaw,
                    component:   TextareaHiddenLabel,
                },
                grid: { columns: 1, rows: 1 },
            },
        ],
        [
            'floating-label',
            {
                vue: {
                    codePreview: TextareaFloatingLabelRaw,
                    component:   TextareaFloatingLabel,
                },
                grid: { columns: 1, rows: 1 },
            },
        ],
        [
            'default-size',
            {
                vue: {
                    codePreview: TextareaDefaultSizeRaw,
                    component:   TextareaDefaultSize,
                },
                grid: { columns: 1, rows: 5 },
            },
        ],
        [
            'floating-label-size',
            {
                vue: {
                    codePreview: TextareaFloatingLabelSizeRaw,
                    component:   TextareaFloatingLabelSize,
                },
                grid: { columns: 1, rows: 5 },
            },
        ],
        [
            'with-icon',
            {
                vue: {
                    codePreview: TextareaWithIconRaw,
                    component:   TextareaWithIcon,
                },
                grid: { columns: 1, rows: 6 },
            },
        ],
        [
            'with-helper-text',
            {
                vue: {
                    codePreview: TextareaWithHelperTextRaw,
                    component:   TextareaWithHelperText,
                },
                grid: { columns: 1, rows: 2 },
            },
        ],
        [
            'validation-state',
            {
                vue: {
                    codePreview: TextareaValidationStateRaw,
                    component:   TextareaValidationState,
                },
                grid: { columns: 1, rows: 4 },
            },
        ],
        [
            'disabled',
            {
                vue: {
                    codePreview: DisabledTextareaRaw,
                    component:   DisabledTextarea,
                },
                grid: { columns: 1, rows: 2 },
            },
        ],
        [
            'readonly',
            {
                vue: {
                    codePreview: ReadonlyTextareaRaw,
                    component:   ReadonlyTextarea,
                },
                grid: { columns: 1, rows: 1 },
            },
        ],
    ]);
});
</script>
