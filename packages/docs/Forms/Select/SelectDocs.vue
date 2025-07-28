<template>
    <CodeSnippet v-if="section === 'default'"
                 id="default"
                 :code="DefaultSelectRaw"
                 :preview="{ columns: 1, rows: 2 }"
                 :component="DefaultSelect"
    />

    <CodeSnippet v-else-if="section === 'floating-label'"
                 id="floating-label"
                 :code="SelectFloatingLabelRaw"
                 :component="SelectFloatingLabel"
    />

    <CodeSnippet v-else-if="section === 'default-size'"
                 id="default-size"
                 :preview="{ columns: 1, rows: 4 }"
                 :code="DefaultSelectSizeRaw"
                 :component="DefaultSelectSize"
    />

    <CodeSnippet v-else-if="section === 'floating-label-size'"
                 id="floating-label-size"
                 :preview="{ columns: 1, rows: 3 }"
                 :code="SelectFloatingLabelSizeRaw"
                 :component="SelectFloatingLabelSize"
    />

    <CodeSnippet v-else-if="section === 'with-icon'"
                 id="with-icon"
                 :preview="{ columns: 1, rows: 2 }"
                 :code="SelectWithIconRaw"
                 :component="SelectWithIcon"
    />

    <CodeSnippet v-else-if="section === 'validation-state'"
                 id="validation-state"
                 :preview="{ columns: 1, rows: 4 }"
                 :code="SelectValidationStateRaw"
                 :component="SelectValidationState"
    />

    <CodeSnippet v-else-if="section === 'shape'"
                 id="shape"
                 :preview="{ columns: 1, rows: 4 }"
                 :code="SelectShapeRaw"
                 :component="SelectShape"
    />

    <CodeSnippet v-else-if="section === 'with-label-and-helper-text'"
                 id="with-label-and-helper-text"
                 :code="SelectWithLabelAndHelperTextRaw"
                 :component="SelectWithLabelAndHelperText"
    />

    <CodeSnippet v-else-if="section === 'hidden-label'"
                 id="hidden-label"
                 :preview="{ columns: 1, rows: 2 }"
                 :code="SelectHiddenLabelRaw"
                 :component="SelectHiddenLabel"
    />

    <CodeSnippet v-else-if="section === 'disabled'"
                 id="disabled"
                 :preview="{ columns: 1, rows: 2 }"
                 :code="DisabledSelectRaw"
                 :component="DisabledSelect"
    />

    <CodeSnippet v-else-if="section === 'datalist'"
                 id="datalist"
                 :code="SelectAsDatalistRaw"
                 :component="SelectAsDatalist"
    />

    <CodeSnippet v-else-if="section === 'optgroup'"
                 id="optgroup"
                 :code="SelectWithOptgroupRaw"
                 :component="SelectWithOptgroup"
    />

    <CodeSnippet v-else-if="section === 'ref-usage'"
                 id="ref-usage"
                 :preview="{ columns: 1, rows: 2 }"
                 :code="SelectRefUsageRaw"
                 :component="SelectRefUsage"
    />
</template>

<script setup lang="ts">
import type { Default }                from 'flyonui-vue';
import CodeSnippet                     from '@/.vitepress/theme/Components/CodeSnippet/UI/CodeSnippet.vue';
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
        | 'ref-usage';
}

defineProps<Props>();
</script>
