<template>
    <ComponentPreview v-if="section === 'default'"
                      :data-test-screenshot="section"
                      :code="DefaultSelectRaw"
                      :grid="{ columns: 1, rows: 2 }"
                      :component="DefaultSelect"
    />

    <ComponentPreview v-else-if="section === 'floating-label'"
                      :data-test-screenshot="section"
                      :code="SelectFloatingLabelRaw"
                      :component="SelectFloatingLabel"
    />

    <ComponentPreview v-else-if="section === 'default-size'"
                      :data-test-screenshot="section"
                      :grid="{ columns: 1, rows: 4 }"
                      :code="DefaultSelectSizeRaw"
                      :component="DefaultSelectSize"
    />

    <ComponentPreview v-else-if="section === 'floating-label-size'"
                      :data-test-screenshot="section"
                      :grid="{ columns: 1, rows: 3 }"
                      :code="SelectFloatingLabelSizeRaw"
                      :component="SelectFloatingLabelSize"
    />

    <ComponentPreview v-else-if="section === 'with-icon'"
                      :data-test-screenshot="section"
                      :grid="{ columns: 1, rows: 2 }"
                      :code="SelectWithIconRaw"
                      :component="SelectWithIcon"
    />

    <ComponentPreview v-else-if="section === 'validation-state'"
                      :data-test-screenshot="section"
                      :grid="{ columns: 1, rows: 4 }"
                      :code="SelectValidationStateRaw"
                      :component="SelectValidationState"
    />

    <ComponentPreview v-else-if="section === 'shape'"
                      :data-test-screenshot="section"
                      :grid="{ columns: 1, rows: 4 }"
                      :code="SelectShapeRaw"
                      :component="SelectShape"
    />

    <ComponentPreview v-else-if="section === 'with-label-and-helper-text'"
                      :data-test-screenshot="section"
                      :code="SelectWithLabelAndHelperTextRaw"
                      :component="SelectWithLabelAndHelperText"
    />

    <ComponentPreview v-else-if="section === 'hidden-label'"
                      :data-test-screenshot="section"
                      :grid="{ columns: 1, rows: 2 }"
                      :code="SelectHiddenLabelRaw"
                      :component="SelectHiddenLabel"
    />

    <ComponentPreview v-else-if="section === 'disabled'"
                      :data-test-screenshot="section"
                      :grid="{ columns: 1, rows: 2 }"
                      :code="DisabledSelectRaw"
                      :component="DisabledSelect"
    />

    <ComponentPreview v-else-if="section === 'datalist'"
                      :data-test-screenshot="section"
                      :code="SelectAsDatalistRaw"
                      :component="SelectAsDatalist"
    />

    <ComponentPreview v-else-if="section === 'optgroup'"
                      :data-test-screenshot="section"
                      :code="SelectWithOptgroupRaw"
                      :component="SelectWithOptgroup"
    />

    <ComponentPreview v-else-if="section === 'ref-usage'"
                      :data-test-screenshot="section"
                      :grid="{ columns: 1, rows: 2 }"
                      :code="SelectRefUsageRaw"
                      :component="SelectRefUsage"
    />

    <ComponentsApiDocs v-else
                       :section="section"
                       :component-names="['FoSelect', 'FoDatalist']"
    />
</template>

<script setup lang="ts">
import type { ApiType }                from '@/Api/Types/Api.ts';
import type { Default }                from 'flyonui-vue';
import ComponentPreview                from '@/.vitepress/theme/Components/Preview/UI/ComponentPreview.vue';
import ComponentsApiDocs               from '@/Api/UI/ComponentsApiDocs.vue';
import DefaultSelect                   from '@/Forms/Select/DefaultSelect.vue';
import DefaultSelectRaw                from '@/Forms/Select/DefaultSelect.vue?raw';
import DefaultSelectSize               from '@/Forms/Select/DefaultSelectSize.vue';
import DefaultSelectSizeRaw            from '@/Forms/Select/DefaultSelectSize.vue?raw';
import DisabledSelect                  from '@/Forms/Select/DisabledSelect.vue';
import DisabledSelectRaw               from '@/Forms/Select/DisabledSelect.vue?raw';
import SelectAsDatalist                from '@/Forms/Select/SelectAsDatalist.vue';
import SelectAsDatalistRaw             from '@/Forms/Select/SelectAsDatalist.vue?raw';
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

interface Props {
    section: Default
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
        | 'optgroup'
        | 'ref-usage'
        | ApiType;
}

defineProps<Props>();
</script>
