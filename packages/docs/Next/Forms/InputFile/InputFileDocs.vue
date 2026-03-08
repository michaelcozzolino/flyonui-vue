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
import DefaultInputFile              from '@/Next/Forms/InputFile/DefaultInputFile.vue';
import DefaultInputFileRaw           from '@/Next/Forms/InputFile/DefaultInputFile.vue?raw';
import DisabledInputFile             from '@/Next/Forms/InputFile/DisabledInputFile.vue';
import DisabledInputFileRaw          from '@/Next/Forms/InputFile/DisabledInputFile.vue?raw';
import InputFileHelperText           from '@/Next/Forms/InputFile/InputFileHelperText.vue';
import InputFileHelperTextRaw        from '@/Next/Forms/InputFile/InputFileHelperText.vue?raw';
import InputFileLabel                from '@/Next/Forms/InputFile/InputFileLabel.vue';
import InputFileLabelRaw             from '@/Next/Forms/InputFile/InputFileLabel.vue?raw';
import InputFileSize                 from '@/Next/Forms/InputFile/InputFileSize.vue';
import InputFileSizeRaw              from '@/Next/Forms/InputFile/InputFileSize.vue?raw';
import InputFileValidationState      from '@/Next/Forms/InputFile/InputFileValidationState.vue';
import InputFileValidationStateRaw   from '@/Next/Forms/InputFile/InputFileValidationState.vue?raw';
import MultipleFilesInputFile        from '@/Next/Forms/InputFile/MultipleFilesInputFile.vue';
import MultipleFilesInputFileRaw     from '@/Next/Forms/InputFile/MultipleFilesInputFile.vue?raw';
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
