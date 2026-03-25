<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   :api-docs-component-names="['FoSelect', 'FoMultipleSelect', 'FoDataList']"
    />
</template>

<script setup lang="ts">
import type { ComponentDocsPreview }   from '@/.vitepress/theme/Components/ComponentDocs/Types/ComponentDocs';
import type { ApiType }                from '@/Api/Types/Api.ts';
import type { Default }                from 'flyonui-vue';
import ComponentDocs                   from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import DefaultSelect                   from '@/Forms/Select/DefaultSelect.vue';
import DefaultSelectRaw                from '@/Forms/Select/DefaultSelect.vue?raw';
import DefaultSelectSize               from '@/Forms/Select/DefaultSelectSize.vue';
import DefaultSelectSizeRaw            from '@/Forms/Select/DefaultSelectSize.vue?raw';
import DisabledSelect                  from '@/Forms/Select/DisabledSelect.vue';
import DisabledSelectRaw               from '@/Forms/Select/DisabledSelect.vue?raw';
import MultipleSelect                  from '@/Forms/Select/MultipleSelect.vue';
import MultipleSelectRaw               from '@/Forms/Select/MultipleSelect.vue?raw';
import SelectAsDataList                from '@/Forms/Select/SelectAsDataList.vue';
import SelectAsDataListRaw             from '@/Forms/Select/SelectAsDataList.vue?raw';
import SelectFloatingLabel             from '@/Forms/Select/SelectFloatingLabel.vue';
import SelectFloatingLabelRaw          from '@/Forms/Select/SelectFloatingLabel.vue?raw';
import SelectFloatingLabelSize         from '@/Forms/Select/SelectFloatingLabelSize.vue';
import SelectFloatingLabelSizeRaw      from '@/Forms/Select/SelectFloatingLabelSize.vue?raw';
import SelectHiddenLabel               from '@/Forms/Select/SelectHiddenLabel.vue';
import SelectHiddenLabelRaw            from '@/Forms/Select/SelectHiddenLabel.vue?raw';
import SelectRefUsage                  from '@/Forms/Select/SelectRefUsage.vue';
import SelectRefUsageRaw               from '@/Forms/Select/SelectRefUsage.vue?raw';
import SelectShape                     from '@/Forms/Select/SelectShape.vue';
import SelectShapeRaw                  from '@/Forms/Select/SelectShape.vue?raw';
import SelectValidationState           from '@/Forms/Select/SelectValidationState.vue';
import SelectValidationStateRaw        from '@/Forms/Select/SelectValidationState.vue?raw';
import SelectWithIcon                  from '@/Forms/Select/SelectWithIcon.vue';
import SelectWithIconRaw               from '@/Forms/Select/SelectWithIcon.vue?raw';
import SelectWithLabelAndHelperText    from '@/Forms/Select/SelectWithLabelAndHelperText.vue';
import SelectWithLabelAndHelperTextRaw from '@/Forms/Select/SelectWithLabelAndHelperText.vue?raw';
import SelectWithOptgroup              from '@/Forms/Select/SelectWithOptgroup.vue';
import SelectWithOptgroupRaw           from '@/Forms/Select/SelectWithOptgroup.vue?raw';
import { computed }                    from 'vue';

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
    return new Map<Section, ComponentDocsPreview>([
        [
            'default',
            {
                grid:      { columns: 1, rows: 2 },
                code:      DefaultSelectRaw,
                component: DefaultSelect,
            },
        ],
        [
            'floating-label',
            {
                code:      SelectFloatingLabelRaw,
                component: SelectFloatingLabel,
            },
        ],
        [
            'default-size',
            {
                grid:      { columns: 1, rows: 4 },
                code:      DefaultSelectSizeRaw,
                component: DefaultSelectSize,
            },
        ],
        [
            'floating-label-size',
            {
                grid:      { columns: 1, rows: 3 },
                code:      SelectFloatingLabelSizeRaw,
                component: SelectFloatingLabelSize,
            },
        ],
        [
            'with-icon',
            {
                grid:      { columns: 1, rows: 2 },
                code:      SelectWithIconRaw,
                component: SelectWithIcon,
            },
        ],
        [
            'validation-state',
            {
                grid:      { columns: 1, rows: 4 },
                code:      SelectValidationStateRaw,
                component: SelectValidationState,
            },
        ],
        [
            'shape',
            {
                grid:      { columns: 1, rows: 4 },
                code:      SelectShapeRaw,
                component: SelectShape,
            },
        ],
        [
            'with-label-and-helper-text',
            {
                code:      SelectWithLabelAndHelperTextRaw,
                component: SelectWithLabelAndHelperText,
            },
        ],
        [
            'hidden-label',
            {
                grid:      { columns: 1, rows: 2 },
                code:      SelectHiddenLabelRaw,
                component: SelectHiddenLabel,
            },
        ],
        [
            'disabled',
            {
                grid:      { columns: 1, rows: 2 },
                code:      DisabledSelectRaw,
                component: DisabledSelect,
            },
        ],
        [
            'datalist',
            {
                code:      SelectAsDataListRaw,
                component: SelectAsDataList,
            },
        ],
        [
            'multiple',
            {
                code:      MultipleSelectRaw,
                component: MultipleSelect,
            },
        ],
        [
            'optgroup',
            {
                code:      SelectWithOptgroupRaw,
                component: SelectWithOptgroup,
            },
        ],
        [
            'ref-usage',
            {
                grid:      { columns: 1, rows: 2 },
                code:      SelectRefUsageRaw,
                component: SelectRefUsage,
            },
        ],
    ]);
});
</script>
