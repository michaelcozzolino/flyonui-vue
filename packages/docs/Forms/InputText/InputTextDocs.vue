<template>
    <ComponentPreview v-if="section === 'default'"
                      :data-test-screenshot="section"
                      :code="DefaultInputTextRaw"
                      :component="DefaultInputText"
    />

    <ComponentPreview v-else-if="section === 'with-placeholder'"
                      :data-test-screenshot="section"
                      :code="InputTextWithPlaceholderRaw"
                      :component="InputTextWithPlaceholder"
    />

    <ComponentPreview v-else-if="section === 'with-label-and-helper-text'"
                      :data-test-screenshot="section"
                      :code="InputTextWithLabelAndHelperTextRaw"
                      :component="InputTextWithLabelAndHelperText"
                      :grid="{ columns: 1, rows: 4 }"
    />

    <ComponentPreview v-else-if="section === 'hidden-label'"
                      :data-test-screenshot="section"
                      :code="InputTextHiddenLabelRaw"
                      :component="InputTextHiddenLabel"
    />

    <ComponentPreview v-else-if="section === 'floating-label'"
                      :data-test-screenshot="section"
                      :code="InputTextFloatingLabelRaw"
                      :component="InputTextFloatingLabel"
    />

    <ComponentPreview v-else-if="section === 'size'"
                      :data-test-screenshot="section"
                      :code="InputTextSizeRaw"
                      :component="InputTextSize"
                      :grid="{ columns: 1, rows: 4 }"
    />

    <ComponentPreview v-else-if="section === 'floating-label-size'"
                      :data-test-screenshot="section"
                      :code="InputTextFloatingLabelSizeRaw"
                      :component="InputTextFloatingLabelSize"
                      :grid="{ columns: 1, rows: 3 }"
    />

    <ComponentPreview v-else-if="section === 'validation-state'"
                      :data-test-screenshot="section"
                      :code="InputTextValidationStateRaw"
                      :component="InputTextValidationState"
                      :grid="{ columns: 1, rows: 2 }"
    />

    <ComponentPreview v-else-if="section === 'inline-label'"
                      :data-test-screenshot="section"
                      :code="InputTextInlineLabelRaw"
                      :component="InputTextInlineLabel"
    />

    <ComponentPreview v-else-if="section === 'with-icon'"
                      :data-test-screenshot="section"
                      :code="InputTextWithIconRaw"
                      :component="InputTextWithIcon"
    />

    <ComponentPreview v-else-if="section === 'shape'"
                      :data-test-screenshot="section"
                      :code="InputTextShapeRaw"
                      :component="InputTextShape"
                      :grid="{ columns: 1, rows: 2 }"
    />

    <ComponentPreview v-else-if="section === 'without-focus'"
                      :data-test-screenshot="section"
                      :code="InputTextWithoutFocusRaw"
                      :component="InputTextWithoutFocus"
    />

    <ComponentPreview v-else-if="section === 'disabled'"
                      :data-test-screenshot="section"
                      :code="DisabledInputTextRaw"
                      :component="DisabledInputText"
                      :grid="{ columns: 1, rows: 2 }"
    />

    <ComponentPreview v-else-if="section === 'readonly'"
                      :data-test-screenshot="section"
                      :code="ReadonlyInputTextRaw"
                      :component="ReadonlyInputText"
    />

    <ComponentPreview v-else-if="section === 'join'"
                      :data-test-screenshot="section"
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
import ComponentPreview                   from '@/.vitepress/theme/Components/Preview/UI/ComponentPreview.vue';
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
