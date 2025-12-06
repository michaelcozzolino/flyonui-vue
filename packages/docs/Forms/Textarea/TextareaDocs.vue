<template>
    <ComponentPreview v-if="section === 'default'"
                      :data-test-screenshot="section"
                      :code="DefaultTextareaRaw"
                      :component="DefaultTextarea"
                      :grid="{ columns: 1, rows: 1 }"
    />

    <ComponentPreview v-else-if="section === 'with-label-and-placeholder'"
                      :data-test-screenshot="section"
                      :code="TextareaWithLabelAndPlaceholderRaw"
                      :component="TextareaWithLabelAndPlaceholder"
                      :grid="{ columns: 1, rows: 1 }"
    />

    <ComponentPreview v-else-if="section === 'hidden-label'"
                      :data-test-screenshot="section"
                      :code="TextareaHiddenLabelRaw"
                      :component="TextareaHiddenLabel"
                      :grid="{ columns: 1, rows: 1 }"
    />

    <ComponentPreview v-else-if="section === 'floating-label'"
                      :data-test-screenshot="section"
                      :code="TextareaFloatingLabelRaw"
                      :component="TextareaFloatingLabel"
                      :grid="{ columns: 1, rows: 1 }"
    />

    <ComponentPreview v-else-if="section === 'default-size'"
                      :data-test-screenshot="section"
                      :code="TextareaDefaultSizeRaw"
                      :component="TextareaDefaultSize"
                      :grid="{ columns: 1, rows: 5 }"
    />

    <ComponentPreview v-else-if="section === 'floating-label-size'"
                      :data-test-screenshot="section"
                      :code="TextareaFloatingLabelSizeRaw"
                      :component="TextareaFloatingLabelSize"
                      :grid="{ columns: 1, rows: 5 }"
    />

    <ComponentPreview v-else-if="section === 'with-icon'"
                      :data-test-screenshot="section"
                      :code="TextareaWithIconRaw"
                      :component="TextareaWithIcon"
                      :grid="{ columns: 1, rows: 6 }"
    />

    <ComponentPreview v-else-if="section === 'with-helper-text'"
                      :data-test-screenshot="section"
                      :code="TextareaWithHelperTextRaw"
                      :component="TextareaWithHelperText"
                      :grid="{ columns: 1, rows: 2 }"
    />

    <ComponentPreview v-else-if="section === 'validation-state'"
                      :data-test-screenshot="section"
                      :code="TextareaValidationStateRaw"
                      :component="TextareaValidationState"
                      :grid="{ columns: 1, rows: 4 }"
    />

    <ComponentPreview v-else-if="section === 'disabled'"
                      :data-test-screenshot="section"
                      :code="DisabledTextareaRaw"
                      :component="DisabledTextarea"
                      :grid="{ columns: 1, rows: 2 }"
    />

    <ComponentPreview v-else-if="section === 'readonly'"
                      :data-test-screenshot="section"
                      :code="ReadonlyTextareaRaw"
                      :component="ReadonlyTextarea"
                      :grid="{ columns: 1, rows: 1 }"
    />

    <ComponentsApiDocs v-else
                       :section="section"
                       component-names="FoTextarea"
    />
</template>

<script setup lang="ts">
import type { ApiType }                   from '@/Api/Types/Api.ts';
import type { Default }                   from 'flyonui-vue';
import ComponentPreview                   from '@/.vitepress/theme/Components/Preview/UI/ComponentPreview.vue';
import ComponentsApiDocs                  from '@/Api/UI/ComponentsApiDocs.vue';
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

interface Props {
    section: Default
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
}

defineProps<Props>();
</script>
