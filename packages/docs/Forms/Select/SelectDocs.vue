<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   :api-docs-component-names="['FoSelect', 'FoMultipleSelect', 'FoDataList']"
    />
</template>

<script setup lang="ts">
import type { Default }                 from 'flyonui-vue';
import type { FrameworkSectionPreview } from '@/.vitepress/theme/Components/Preview/Types/Preview';
import type { ApiType }                 from '@/Api/Types/Api';
import { computed }                     from 'vue';
import ComponentDocs                    from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import DefaultSelect                    from '@/Forms/Select/DefaultSelect.vue';
import DefaultSelectRaw                 from '@/Forms/Select/DefaultSelect.vue?raw';
import DefaultSelectSize                from '@/Forms/Select/DefaultSelectSize.vue';
import DefaultSelectSizeRaw             from '@/Forms/Select/DefaultSelectSize.vue?raw';
import DisabledSelect                   from '@/Forms/Select/DisabledSelect.vue';
import DisabledSelectRaw                from '@/Forms/Select/DisabledSelect.vue?raw';
import MultipleSelect                   from '@/Forms/Select/MultipleSelect.vue';
import MultipleSelectRaw                from '@/Forms/Select/MultipleSelect.vue?raw';
import SelectAsDataList                 from '@/Forms/Select/SelectAsDataList.vue';
import SelectAsDataListRaw              from '@/Forms/Select/SelectAsDataList.vue?raw';
import SelectFloatingLabel              from '@/Forms/Select/SelectFloatingLabel.vue';
import SelectFloatingLabelRaw           from '@/Forms/Select/SelectFloatingLabel.vue?raw';
import SelectFloatingLabelSize          from '@/Forms/Select/SelectFloatingLabelSize.vue';
import SelectFloatingLabelSizeRaw       from '@/Forms/Select/SelectFloatingLabelSize.vue?raw';
import SelectHiddenLabel                from '@/Forms/Select/SelectHiddenLabel.vue';
import SelectHiddenLabelRaw             from '@/Forms/Select/SelectHiddenLabel.vue?raw';
import SelectRefUsage                   from '@/Forms/Select/SelectRefUsage.vue';
import SelectRefUsageRaw                from '@/Forms/Select/SelectRefUsage.vue?raw';
import SelectShape                      from '@/Forms/Select/SelectShape.vue';
import SelectShapeRaw                   from '@/Forms/Select/SelectShape.vue?raw';
import SelectValidationState            from '@/Forms/Select/SelectValidationState.vue';
import SelectValidationStateRaw         from '@/Forms/Select/SelectValidationState.vue?raw';
import SelectWithIcon                   from '@/Forms/Select/SelectWithIcon.vue';
import SelectWithIconRaw                from '@/Forms/Select/SelectWithIcon.vue?raw';
import SelectWithLabelAndHelperText     from '@/Forms/Select/SelectWithLabelAndHelperText.vue';
import SelectWithLabelAndHelperTextRaw  from '@/Forms/Select/SelectWithLabelAndHelperText.vue?raw';
import SelectWithOptgroup               from '@/Forms/Select/SelectWithOptgroup.vue';
import SelectWithOptgroupRaw            from '@/Forms/Select/SelectWithOptgroup.vue?raw';

type Section = Default
    | 'floating-label'
    | 'default-size'
    | 'floating-label-size'
    | 'with-icon'
    | 'validation-state'
    | 'shape'
    | 'with-label-and-helper-text'
    | 'hidden-label'
    | 'disabled'
    | 'datalist'
    | 'multiple'
    | 'optgroup'
    | 'ref-usage'
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
                    codePreview: DefaultSelectRaw,
                    component:   DefaultSelect,
                },
                grid: { columns: 1, rows: 2 },
            },
        ],
        [
            'floating-label',
            {
                vue: {
                    codePreview: SelectFloatingLabelRaw,
                    component:   SelectFloatingLabel,
                },
            },
        ],
        [
            'default-size',
            {
                vue: {
                    codePreview: DefaultSelectSizeRaw,
                    component:   DefaultSelectSize,
                },
                grid: { columns: 1, rows: 4 },
            },
        ],
        [
            'floating-label-size',
            {
                vue: {
                    codePreview: SelectFloatingLabelSizeRaw,
                    component:   SelectFloatingLabelSize,
                },
                grid: { columns: 1, rows: 3 },
            },
        ],
        [
            'with-icon',
            {
                vue: {
                    codePreview: SelectWithIconRaw,
                    component:   SelectWithIcon,
                },
                grid: { columns: 1, rows: 2 },
            },
        ],
        [
            'validation-state',
            {
                vue: {
                    codePreview: SelectValidationStateRaw,
                    component:   SelectValidationState,
                },
                grid: { columns: 1, rows: 4 },
            },
        ],
        [
            'shape',
            {
                vue: {
                    codePreview: SelectShapeRaw,
                    component:   SelectShape,
                },
                grid: { columns: 1, rows: 4 },
            },
        ],
        [
            'with-label-and-helper-text',
            {
                vue: {
                    codePreview: SelectWithLabelAndHelperTextRaw,
                    component:   SelectWithLabelAndHelperText,
                },
            },
        ],
        [
            'hidden-label',
            {
                vue: {
                    codePreview: SelectHiddenLabelRaw,
                    component:   SelectHiddenLabel,
                },
                grid: { columns: 1, rows: 2 },
            },
        ],
        [
            'disabled',
            {
                vue: {
                    codePreview: DisabledSelectRaw,
                    component:   DisabledSelect,
                },
                grid: { columns: 1, rows: 2 },
            },
        ],
        [
            'datalist',
            {
                vue: {
                    codePreview: SelectAsDataListRaw,
                    component:   SelectAsDataList,
                },
            },
        ],
        [
            'multiple',
            {
                vue: {
                    codePreview: MultipleSelectRaw,
                    component:   MultipleSelect,
                },
            },
        ],
        [
            'optgroup',
            {
                vue: {
                    codePreview: SelectWithOptgroupRaw,
                    component:   SelectWithOptgroup,
                },
            },
        ],
        [
            'ref-usage',
            {
                vue: {
                    codePreview: SelectRefUsageRaw,
                    component:   SelectRefUsage,
                },
                grid: { columns: 1, rows: 2 },
            },
        ],
    ]);
});
</script>
