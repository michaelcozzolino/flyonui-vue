<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   api-docs-component-names="FoInputText"
    />
</template>

<script setup lang="ts">
import type { ComponentDocsPreview }      from '@/.vitepress/theme/Components/ComponentDocs/Types/ComponentDocs';
import type { ApiType }                   from '@/Api/Types/Api.ts';
import type { Default }                   from 'flyonui-vue';
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
import { computed }                       from 'vue';

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
    return new Map<Section, ComponentDocsPreview>([
        [
            'default',
            {
                code:      DefaultInputTextRaw,
                component: DefaultInputText,
            },
        ],
        [
            'with-placeholder',
            {
                code:      InputTextWithPlaceholderRaw,
                component: InputTextWithPlaceholder,
            },
        ],
        [
            'with-label-and-helper-text',
            {
                grid:      { columns: 1, rows: 4 },
                code:      InputTextWithLabelAndHelperTextRaw,
                component: InputTextWithLabelAndHelperText,
            },
        ],
        [
            'hidden-label',
            {
                code:      InputTextHiddenLabelRaw,
                component: InputTextHiddenLabel,
            },
        ],
        [
            'floating-label',
            {
                code:      InputTextFloatingLabelRaw,
                component: InputTextFloatingLabel,
            },
        ],
        [
            'size',
            {
                grid:      { columns: 1, rows: 4 },
                code:      InputTextSizeRaw,
                component: InputTextSize,
            },
        ],
        [
            'floating-label-size',
            {
                grid:      { columns: 1, rows: 3 },
                code:      InputTextFloatingLabelSizeRaw,
                component: InputTextFloatingLabelSize,
            },
        ],
        [
            'validation-state',
            {
                grid:      { columns: 1, rows: 2 },
                code:      InputTextValidationStateRaw,
                component: InputTextValidationState,
            },
        ],
        [
            'inline-label',
            {
                code:      InputTextInlineLabelRaw,
                component: InputTextInlineLabel,
            },
        ],
        [
            'with-icon',
            {
                grid:      { columns: 1, rows: 7 },
                code:      InputTextWithIconRaw,
                component: InputTextWithIcon,
            },
        ],
        [
            'shape',
            {
                grid:      { columns: 1, rows: 2 },
                code:      InputTextShapeRaw,
                component: InputTextShape,
            },
        ],
        [
            'without-focus',
            {
                code:      InputTextWithoutFocusRaw,
                component: InputTextWithoutFocus,
            },
        ],
        [
            'disabled',
            {
                grid:      { columns: 1, rows: 2 },
                code:      DisabledInputTextRaw,
                component: DisabledInputText,
            },
        ],
        [
            'readonly',
            {
                code:      ReadonlyInputTextRaw,
                component: ReadonlyInputText,
            },
        ],
        [
            'join',
            {
                grid:      { columns: 1, rows: 10 },
                code:      JoinInputTextRaw,
                component: JoinInputText,
            },
        ],
    ]);
});
</script>
