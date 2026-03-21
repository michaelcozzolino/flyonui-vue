<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   api-docs-component-names="FoInputFile"
    />
</template>

<script setup lang="ts">
import type { ComponentDocsPreview } from '@/.vitepress/theme/Components/ComponentDocs/Types/ComponentDocs';
import type { ApiType }              from '@/Api/Types/Api.ts';
import type { Default }              from 'flyonui-vue';
import ComponentDocs                 from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import DefaultInputFile              from '@/Forms/InputFile/DefaultInputFile.vue';
import DefaultInputFileRaw           from '@/Forms/InputFile/DefaultInputFile.vue?raw';
import DisabledInputFile             from '@/Forms/InputFile/DisabledInputFile.vue';
import DisabledInputFileRaw          from '@/Forms/InputFile/DisabledInputFile.vue?raw';
import InputFileHelperText           from '@/Forms/InputFile/InputFileHelperText.vue';
import InputFileHelperTextRaw        from '@/Forms/InputFile/InputFileHelperText.vue?raw';
import InputFileLabel                from '@/Forms/InputFile/InputFileLabel.vue';
import InputFileLabelRaw             from '@/Forms/InputFile/InputFileLabel.vue?raw';
import InputFileSize                 from '@/Forms/InputFile/InputFileSize.vue';
import InputFileSizeRaw              from '@/Forms/InputFile/InputFileSize.vue?raw';
import InputFileValidationState      from '@/Forms/InputFile/InputFileValidationState.vue';
import InputFileValidationStateRaw   from '@/Forms/InputFile/InputFileValidationState.vue?raw';
import MultipleFilesInputFile        from '@/Forms/InputFile/MultipleFilesInputFile.vue';
import MultipleFilesInputFileRaw     from '@/Forms/InputFile/MultipleFilesInputFile.vue?raw';
import { computed }                  from 'vue';

type Section = Default
    | 'label'
    | 'size'
    | 'validation-state'
    | 'disabled'
    | 'helper-text'
    | 'multiple-files'
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
                code:      DefaultInputFileRaw,
                component: DefaultInputFile,
            },
        ],
        [
            'label',
            {
                code:      InputFileLabelRaw,
                component: InputFileLabel,
            },
        ],
        [
            'size',
            {
                code:      InputFileSizeRaw,
                component: InputFileSize,
                grid:      { rows: 5, columns: 1 },
            },
        ],
        [
            'validation-state',
            {
                code:      InputFileValidationStateRaw,
                component: InputFileValidationState,
            },
        ],
        [
            'disabled',
            {
                code:      DisabledInputFileRaw,
                component: DisabledInputFile,
            },
        ],
        [
            'helper-text',
            {
                code:      InputFileHelperTextRaw,
                component: InputFileHelperText,
                grid:      { rows: 2, columns: 1 },
            },
        ],
        [
            'multiple-files',
            {
                code:      MultipleFilesInputFileRaw,
                component: MultipleFilesInputFile,
            },
        ],
    ]);
});
</script>
