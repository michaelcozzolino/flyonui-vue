<template>
    <CodeSnippet v-if="section === 'default'"
                 id="default"
                 :code="DefaultInputTextRaw"
                 :component="DefaultInputText"
    />

    <CodeSnippet v-else-if="section === 'with-placeholder'"
                 id="with-placeholder"
                 :code="InputTextWithPlaceholderRaw"
                 :component="InputTextWithPlaceholder"
    />

    <CodeSnippet v-else-if="section === 'with-label-and-helper-text'"
                 id="with-label-and-helper-text"
                 :code="InputTextWithLabelAndHelperTextRaw"
                 :component="InputTextWithLabelAndHelperText"
                 :preview="{ columns: 1, rows: 4 }"
    />

    <CodeSnippet v-else-if="section === 'hidden-label'"
                 id="hidden-label"
                 :code="InputTextHiddenLabelRaw"
                 :component="InputTextHiddenLabel"
    />

    <CodeSnippet v-else-if="section === 'floating-label'"
                 id="floating-label"
                 :code="InputTextFloatingLabelRaw"
                 :component="InputTextFloatingLabel"
    />

    <CodeSnippet v-else-if="section === 'size'"
                 id="size"
                 :code="InputTextSizeRaw"
                 :component="InputTextSize"
                 :preview="{ columns: 1, rows: 4 }"
    />

    <CodeSnippet v-else-if="section === 'floating-label-size'"
                 id="floating-label-size"
                 :code="InputTextFloatingLabelSizeRaw"
                 :component="InputTextFloatingLabelSize"
                 :preview="{ columns: 1, rows: 3 }"
    />

    <CodeSnippet v-else-if="section === 'validation-state'"
                 id="validation-state"
                 :code="InputTextValidationStateRaw"
                 :component="InputTextValidationState"
                 :preview="{ columns: 1, rows: 2 }"
    />

    <CodeSnippet v-else-if="section === 'inline-label'"
                 id="inline-label"
                 :code="InputTextInlineLabelRaw"
                 :component="InputTextInlineLabel"
    />

    <CodeSnippet v-else-if="section === 'with-icon'"
                 id="with-icon"
                 :code="InputTextWithIconRaw"
                 :component="InputTextWithIcon"
    />

    <CodeSnippet v-else-if="section === 'shape'"
                 id="shape"
                 :code="InputTextShapeRaw"
                 :component="InputTextShape"
                 :preview="{ columns: 1, rows: 2 }"
    />

    <CodeSnippet v-else-if="section === 'without-focus'"
                 id="without-focus"
                 :code="InputTextWithoutFocusRaw"
                 :component="InputTextWithoutFocus"
    />

    <CodeSnippet v-else-if="section === 'disabled'"
                 id="disabled"
                 :code="DisabledInputTextRaw"
                 :component="DisabledInputText"
                 :preview="{ columns: 1, rows: 2 }"
    />

    <CodeSnippet v-else-if="section === 'readonly'"
                 id="readonly"
                 :code="ReadonlyInputTextRaw"
                 :component="ReadonlyInputText"
    />

    <CodeSnippet v-else-if="section === 'join'"
                 id="join"
                 :code="JoinInputTextRaw"
                 :component="JoinInputText"
    />

    <template v-else>
        <ComponentsApiDocs :section="section"
                           component-names="FoInputText"
        />
    </template>
</template>

<script setup lang="ts">
import type { ApiType }                   from '@/Api/Types/Api.ts';
import type { Default }                   from 'flyonui-vue';
import CodeSnippet                        from '@/.vitepress/theme/Components/CodeSnippet/UI/CodeSnippet.vue';
import ComponentsApiDocs                  from '@/Api/UI/ComponentsApiDocs.vue';
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

interface Props {
    section: Default
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
}

defineProps<Props>();
</script>
