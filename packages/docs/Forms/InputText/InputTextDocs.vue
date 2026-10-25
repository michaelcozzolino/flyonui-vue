<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   api-docs-component-names="FoInputText"
    />
</template>

<script setup lang="ts">
import type { Default }                   from 'flyonui-vue';
import type { FrameworkSectionPreview }   from '@/.vitepress/theme/Components/Preview/Types/Preview';
import type { ApiType }                   from '@/Api/Types/Api.ts';
import { computed }                       from 'vue';
import ComponentDocs                      from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import DefaultInputText                   from '@/Forms/InputText/DefaultInputText.vue';
import DefaultInputTextRaw                from '@/Forms/InputText/DefaultInputText.vue?raw';
import DisabledInputText                  from '@/Forms/InputText/DisabledInputText.vue';
import DisabledInputTextRaw               from '@/Forms/InputText/DisabledInputText.vue?raw';
import InputTextFloatingLabel             from '@/Forms/InputText/InputTextFloatingLabel.vue';
import InputTextFloatingLabelRaw          from '@/Forms/InputText/InputTextFloatingLabel.vue?raw';
import InputTextFloatingLabelSize         from '@/Forms/InputText/InputTextFloatingLabelSize.vue';
import InputTextFloatingLabelSizeRaw      from '@/Forms/InputText/InputTextFloatingLabelSize.vue?raw';
import InputTextHiddenLabel               from '@/Forms/InputText/InputTextHiddenLabel.vue';
import InputTextHiddenLabelRaw            from '@/Forms/InputText/InputTextHiddenLabel.vue?raw';
import InputTextInlineLabel               from '@/Forms/InputText/InputTextInlineLabel.vue';
import InputTextInlineLabelRaw            from '@/Forms/InputText/InputTextInlineLabel.vue?raw';
import InputTextShape                     from '@/Forms/InputText/InputTextShape.vue';
import InputTextShapeRaw                  from '@/Forms/InputText/InputTextShape.vue?raw';
import InputTextSize                      from '@/Forms/InputText/InputTextSize.vue';
import InputTextSizeRaw                   from '@/Forms/InputText/InputTextSize.vue?raw';
import InputTextValidationState           from '@/Forms/InputText/InputTextValidationState.vue';
import InputTextValidationStateRaw        from '@/Forms/InputText/InputTextValidationState.vue?raw';
import InputTextWithIcon                  from '@/Forms/InputText/InputTextWithIcon.vue';
import InputTextWithIconRaw               from '@/Forms/InputText/InputTextWithIcon.vue?raw';
import InputTextWithLabelAndHelperText    from '@/Forms/InputText/InputTextWithLabelAndHelperText.vue';
import InputTextWithLabelAndHelperTextRaw from '@/Forms/InputText/InputTextWithLabelAndHelperText.vue?raw';
import InputTextWithoutFocus              from '@/Forms/InputText/InputTextWithoutFocus.vue';
import InputTextWithoutFocusRaw           from '@/Forms/InputText/InputTextWithoutFocus.vue?raw';
import InputTextWithPlaceholder           from '@/Forms/InputText/InputTextWithPlaceholder.vue';
import InputTextWithPlaceholderRaw        from '@/Forms/InputText/InputTextWithPlaceholder.vue?raw';
import JoinInputText                      from '@/Forms/InputText/JoinInputText.vue';
import JoinInputTextRaw                   from '@/Forms/InputText/JoinInputText.vue?raw';
import ReadonlyInputText                  from '@/Forms/InputText/ReadonlyInputText.vue';
import ReadonlyInputTextRaw               from '@/Forms/InputText/ReadonlyInputText.vue?raw';

type Section = Default
    | 'with-placeholder'
    | 'with-label-and-helper-text'
    | 'hidden-label'
    | 'floating-label'
    | 'size'
    | 'floating-label-size'
    | 'validation-state'
    | 'inline-label'
    | 'with-icon'
    | 'shape'
    | 'without-focus'
    | 'disabled'
    | 'readonly'
    | 'join'
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
                    codePreview: DefaultInputTextRaw,
                    component:   DefaultInputText,
                },
            },
        ],
        [
            'with-placeholder',
            {
                vue: {
                    codePreview: InputTextWithPlaceholderRaw,
                    component:   InputTextWithPlaceholder,
                },
            },
        ],
        [
            'with-label-and-helper-text',
            {
                vue: {
                    codePreview: InputTextWithLabelAndHelperTextRaw,
                    component:   InputTextWithLabelAndHelperText,
                },
                grid: { columns: 1, rows: 4 },
            },
        ],
        [
            'hidden-label',
            {
                vue: {
                    codePreview: InputTextHiddenLabelRaw,
                    component:   InputTextHiddenLabel,
                },
            },
        ],
        [
            'floating-label',
            {
                vue: {
                    codePreview: InputTextFloatingLabelRaw,
                    component:   InputTextFloatingLabel,
                },
            },
        ],
        [
            'size',
            {
                vue: {
                    codePreview: InputTextSizeRaw,
                    component:   InputTextSize,
                },
                grid: { columns: 1, rows: 4 },
            },
        ],
        [
            'floating-label-size',
            {
                vue: {
                    codePreview: InputTextFloatingLabelSizeRaw,
                    component:   InputTextFloatingLabelSize,
                },
                grid: { columns: 1, rows: 3 },
            },
        ],
        [
            'validation-state',
            {
                vue: {
                    codePreview: InputTextValidationStateRaw,
                    component:   InputTextValidationState,
                },
                grid: { columns: 1, rows: 2 },
            },
        ],
        [
            'inline-label',
            {
                vue: {
                    codePreview: InputTextInlineLabelRaw,
                    component:   InputTextInlineLabel,
                },
            },
        ],
        [
            'with-icon',
            {
                vue: {
                    codePreview: InputTextWithIconRaw,
                    component:   InputTextWithIcon,
                },
                grid: { columns: 1, rows: 7 },
            },
        ],
        [
            'shape',
            {
                vue: {
                    codePreview: InputTextShapeRaw,
                    component:   InputTextShape,
                },
                grid: { columns: 1, rows: 2 },
            },
        ],
        [
            'without-focus',
            {
                vue: {
                    codePreview: InputTextWithoutFocusRaw,
                    component:   InputTextWithoutFocus,
                },
            },
        ],
        [
            'disabled',
            {
                vue: {
                    codePreview: DisabledInputTextRaw,
                    component:   DisabledInputText,
                },
                grid: { columns: 1, rows: 2 },
            },
        ],
        [
            'readonly',
            {
                vue: {
                    codePreview: ReadonlyInputTextRaw,
                    component:   ReadonlyInputText,
                },
            },
        ],
        [
            'join',
            {
                vue: {
                    codePreview: JoinInputTextRaw,
                    component:   JoinInputText,
                },
                grid: { columns: 1, rows: 10 },
            },
        ],
    ]);
});
</script>
