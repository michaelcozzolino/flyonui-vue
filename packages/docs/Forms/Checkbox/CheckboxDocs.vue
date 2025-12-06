<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   :api-docs-component-names="['FoCheckbox', 'FoCheckboxGroup']"
    />
</template>

<script setup lang="ts">
import type { ComponentDocsPreview } from '@/.vitepress/theme/Components/ComponentDocs/Types/ComponentDocs';
import type { ApiType }              from '@/Api/Types/Api';
import type { Default }              from 'flyonui-vue';
import ComponentDocs                 from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import CheckboxColor                 from '@/Forms/Checkbox/CheckboxColor.vue';
import CheckboxColorRaw              from '@/Forms/Checkbox/CheckboxColor.vue?raw';
import CheckboxSize                  from '@/Forms/Checkbox/CheckboxSize.vue';
import CheckboxSizeRaw               from '@/Forms/Checkbox/CheckboxSize.vue?raw';
import CheckboxState                 from '@/Forms/Checkbox/CheckboxState.vue';
import CheckboxStateRaw              from '@/Forms/Checkbox/CheckboxState.vue?raw';
import CheckboxValidationState       from '@/Forms/Checkbox/CheckboxValidationState.vue';
import CheckboxValidationStateRaw    from '@/Forms/Checkbox/CheckboxValidationState.vue?raw';
import CheckboxWithCustomColor       from '@/Forms/Checkbox/CheckboxWithCustomColor.vue';
import CheckboxWithCustomColorRaw    from '@/Forms/Checkbox/CheckboxWithCustomColor.vue?raw';
import CheckboxWithHelperText        from '@/Forms/Checkbox/CheckboxWithHelperText.vue';
import CheckboxWithHelperTextRaw     from '@/Forms/Checkbox/CheckboxWithHelperText.vue?raw';
import DefaultCheckbox               from '@/Forms/Checkbox/DefaultCheckbox.vue';
import DefaultCheckboxRaw            from '@/Forms/Checkbox/DefaultCheckbox.vue?raw';
import InlineCheckboxGroup           from '@/Forms/Checkbox/InlineCheckboxGroup.vue';
import InlineCheckboxGroupRaw        from '@/Forms/Checkbox/InlineCheckboxGroup.vue?raw';
import VerticalCheckboxGroup         from '@/Forms/Checkbox/VerticalCheckboxGroup.vue';
import VerticalCheckboxGroupRaw      from '@/Forms/Checkbox/VerticalCheckboxGroup.vue?raw';
import { computed }                  from 'vue';

type Section = Default
    | 'with-helper-text'
    | 'color'
    | 'with-custom-color'
    | 'size'
    | 'validation-state'
    | 'state'
    | 'inline-group'
    | 'vertical-group'
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
                code:      DefaultCheckboxRaw,
                component: DefaultCheckbox,
            },
        ],
        [
            'with-helper-text',
            {
                code:      CheckboxWithHelperTextRaw,
                component: CheckboxWithHelperText,
            },
        ],
        [
            'color',
            {
                code:      CheckboxColorRaw,
                component: CheckboxColor,
            },
        ],
        [
            'with-custom-color',
            {
                code:      CheckboxWithCustomColorRaw,
                component: CheckboxWithCustomColor,
            },
        ],
        [
            'size',
            {
                code:      CheckboxSizeRaw,
                component: CheckboxSize,
            },
        ],
        [
            'validation-state',
            {
                code:      CheckboxValidationStateRaw,
                component: CheckboxValidationState,
            },
        ],
        [
            'state',
            {
                code:      CheckboxStateRaw,
                component: CheckboxState,
            },
        ],
        [
            'inline-group',
            {
                code:      InlineCheckboxGroupRaw,
                component: InlineCheckboxGroup,
            },
        ],
        [
            'vertical-group',
            {
                code:      VerticalCheckboxGroupRaw,
                component: VerticalCheckboxGroup,
            },
        ],
    ]);
});
</script>
