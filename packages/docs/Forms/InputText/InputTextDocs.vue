<template>
    <CodeSnippet v-if="section === 'default'"
                 :code="DefaultInputTextRaw"
                 :component="DefaultInputText"
    />

    <CodeSnippet v-else-if="section === 'with-placeholder'"
                 :code="InputTextWithPlaceholderRaw"
                 :component="InputTextWithPlaceholder"
    />

    <CodeSnippet v-else-if="section === 'with-label-and-helper-text'"
                 :code="InputTextWithLabelAndHelperTextRaw"
                 :component="InputTextWithLabelAndHelperText"
    />

    <CodeSnippet v-else-if="section === 'hidden-label'"
                 :code="InputTextHiddenLabelRaw"
                 :component="InputTextHiddenLabel"
    />

    <CodeSnippet v-else-if="section === 'floating-label'"
                 :code="InputTextFloatingLabelRaw"
                 :component="InputTextFloatingLabel"
    />

    <CodeSnippet v-else-if="section === 'filled-label'"
                 :code="InputTextFilledLabelRaw"
                 :component="InputTextFilledLabel"
    />

    <CodeSnippet v-else-if="section === 'with-helper-text-position'"
                 :code="InputTextWithHelperTextPositionRaw"
                 :component="InputTextWithHelperTextPosition"
    />

    <CodeSnippet v-else-if="section === 'size'"
                 :code="InputTextSizeRaw"
                 :component="InputTextSize"
    />

    <CodeSnippet v-else-if="section === 'floating-label-size'"
                 :code="InputTextFloatingLabelSizeRaw"
                 :component="InputTextFloatingLabelSize"
    />

    <CodeSnippet v-else-if="section === 'filled-label-size'"
                 :code="InputTextFilledLabelSizeRaw"
                 :component="InputTextFilledLabelSize"
    />

    <CodeSnippet v-else-if="section === 'validation-state'"
                 :code="InputTextValidationStateRaw"
                 :component="InputTextValidationState"
    />

    <CodeSnippet v-else-if="section === 'inline-label'"
                 :code="InputTextInlineLabelRaw"
                 :component="InputTextInlineLabel"
    />

    <CodeSnippet v-else-if="section === 'with-icon'"
                 :code="InputTextWithIconRaw"
                 :component="InputTextWithIcon"
    />

    <CodeSnippet v-else-if="section === 'shape'"
                 :code="InputTextShapeRaw"
                 :component="InputTextShape"
    />

    <CodeSnippet v-else-if="section === 'without-focus'"
                 :code="InputTextWithoutFocusRaw"
                 :component="InputTextWithoutFocus"
    />

    <CodeSnippet v-else-if="section === 'disabled'"
                 :code="DisabledInputTextRaw"
                 :component="DisabledInputText"
    />

    <CodeSnippet v-else-if="section === 'readonly'"
                 :code="ReadonlyInputTextRaw"
                 :component="ReadonlyInputText"
    />
</template>

<script setup lang="ts">
import type { Default }                   from 'flyonui-vue';
import CodeSnippet                        from '@/.vitepress/theme/Components/CodeSnippet.vue';
import DefaultInputText                   from '@/Forms/InputText/DefaultInputText.vue';
import DefaultInputTextRaw                from '@/Forms/InputText/DefaultInputText.vue?raw';
import DisabledInputText                  from '@/Forms/InputText/DisabledInputText.vue';
import DisabledInputTextRaw               from '@/Forms/InputText/DisabledInputText.vue?raw';
import InputTextFilledLabel               from '@/Forms/InputText/InputTextFilledLabel.vue';
import InputTextFilledLabelRaw            from '@/Forms/InputText/InputTextFilledLabel.vue?raw';
import InputTextFilledLabelSize           from '@/Forms/InputText/InputTextFilledLabelSize.vue';
import InputTextFilledLabelSizeRaw        from '@/Forms/InputText/InputTextFilledLabelSize.vue?raw';
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
import InputTextWithHelperTextPosition    from '@/Forms/InputText/InputTextWithHelperTextPosition.vue';
import InputTextWithHelperTextPositionRaw from '@/Forms/InputText/InputTextWithHelperTextPosition.vue?raw';
import InputTextWithIcon                  from '@/Forms/InputText/InputTextWithIcon.vue';
import InputTextWithIconRaw               from '@/Forms/InputText/InputTextWithIcon.vue?raw';
import InputTextWithLabelAndHelperText    from '@/Forms/InputText/InputTextWithLabelAndHelperText.vue';
import InputTextWithLabelAndHelperTextRaw from '@/Forms/InputText/InputTextWithLabelAndHelperText.vue?raw';
import InputTextWithoutFocus              from '@/Forms/InputText/InputTextWithoutFocus.vue';
import InputTextWithoutFocusRaw           from '@/Forms/InputText/InputTextWithoutFocus.vue?raw';
import InputTextWithPlaceholder           from '@/Forms/InputText/InputTextWithPlaceholder.vue';
import InputTextWithPlaceholderRaw        from '@/Forms/InputText/InputTextWithPlaceholder.vue?raw';
import ReadonlyInputText                  from '@/Forms/InputText/ReadonlyInputText.vue';
import ReadonlyInputTextRaw               from '@/Forms/InputText/ReadonlyInputText.vue?raw';

interface Props {
    section: Default
        | 'with-placeholder'
        | 'with-label-and-helper-text'
        | 'hidden-label'
        | 'floating-label'
        | 'filled-label'
        | 'with-helper-text-position'
        | 'size'
        | 'floating-label-size'
        | 'filled-label-size'
        | 'validation-state'
        | 'inline-label'
        | 'with-icon'
        | 'shape'
        | 'without-focus'
        | 'disabled'
        | 'readonly';
}

defineProps<Props>();
</script>
