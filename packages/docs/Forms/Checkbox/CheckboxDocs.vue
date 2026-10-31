<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   :api-docs-component-names="['FoCheckbox', 'FoCheckboxGroup']"
    />
</template>

<script setup lang="ts">
import type { Default }                 from 'flyonui-vue';
import type { FrameworkSectionPreview } from '@/.vitepress/theme/Components/Preview/Types/Preview';
import type { ApiType }                 from '@/Api/Types/Api';
import { computed }                     from 'vue';
import ComponentDocs                    from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import {
    getAngularWebComponentPreview,
    getHtmlWebComponentPreview,
    getReactWebComponentPreview,
}                                 from '@/.vitepress/theme/Components/Preview/Lib/GetWebComponentPreview';
import CheckboxColor              from '@/Forms/Checkbox/CheckboxColor.vue';
import CheckboxColorRaw           from '@/Forms/Checkbox/CheckboxColor.vue?raw';
import CheckboxSize               from '@/Forms/Checkbox/CheckboxSize.vue';
import CheckboxSizeRaw            from '@/Forms/Checkbox/CheckboxSize.vue?raw';
import CheckboxState              from '@/Forms/Checkbox/CheckboxState.vue';
import CheckboxStateRaw           from '@/Forms/Checkbox/CheckboxState.vue?raw';
import CheckboxValidationState    from '@/Forms/Checkbox/CheckboxValidationState.vue';
import CheckboxValidationStateRaw from '@/Forms/Checkbox/CheckboxValidationState.vue?raw';
import CheckboxWithCustomColor    from '@/Forms/Checkbox/CheckboxWithCustomColor.vue';
import CheckboxWithCustomColorRaw from '@/Forms/Checkbox/CheckboxWithCustomColor.vue?raw';
import CheckboxWithHelperText     from '@/Forms/Checkbox/CheckboxWithHelperText.vue';
import CheckboxWithHelperTextRaw  from '@/Forms/Checkbox/CheckboxWithHelperText.vue?raw';
import DefaultCheckbox            from '@/Forms/Checkbox/DefaultCheckbox.vue';
import DefaultCheckboxRaw         from '@/Forms/Checkbox/DefaultCheckbox.vue?raw';
import AngularDefaultCheckbox     from '@/Forms/Checkbox/DefaultCheckboxAngular';
import AngularDefaultCheckboxRaw  from '@/Forms/Checkbox/DefaultCheckboxAngular.ts?raw';
import DefaultCheckboxHtml        from '@/Forms/Checkbox/DefaultCheckboxHTML.html?raw';
import DefaultCheckboxReact       from '@/Forms/Checkbox/DefaultCheckboxReact.tsx';
import ReactDefaultCheckboxRaw    from '@/Forms/Checkbox/DefaultCheckboxReact.tsx?raw';
import InlineCheckboxGroup        from '@/Forms/Checkbox/InlineCheckboxGroup.vue';
import InlineCheckboxGroupRaw     from '@/Forms/Checkbox/InlineCheckboxGroup.vue?raw';
import VerticalCheckboxGroup      from '@/Forms/Checkbox/VerticalCheckboxGroup.vue';
import VerticalCheckboxGroupRaw   from '@/Forms/Checkbox/VerticalCheckboxGroup.vue?raw';

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

const previews = computed((): Map<Section, FrameworkSectionPreview> => {
    return new Map<Section, FrameworkSectionPreview>([
        [
            'default',
            {
                vue: {
                    component:   DefaultCheckbox,
                    codePreview: DefaultCheckboxRaw,
                },
                react: {
                    component:   getReactWebComponentPreview(DefaultCheckboxReact),
                    codePreview: ReactDefaultCheckboxRaw,
                },
                html: {
                    component:   getHtmlWebComponentPreview(DefaultCheckboxHtml),
                    codePreview: DefaultCheckboxHtml,
                },
                angular: {
                    component:   getAngularWebComponentPreview(AngularDefaultCheckbox),
                    codePreview: AngularDefaultCheckboxRaw,
                },
            },
        ],
        [
            'with-helper-text',
            {
                vue: {
                    component:   CheckboxWithHelperText,
                    codePreview: CheckboxWithHelperTextRaw,
                },
            },
        ],
        [
            'color',
            {
                vue: {
                    component:   CheckboxColor,
                    codePreview: CheckboxColorRaw,
                },
            },
        ],
        [
            'with-custom-color',
            {
                vue: {
                    component:   CheckboxWithCustomColor,
                    codePreview: CheckboxWithCustomColorRaw,
                },
            },
        ],
        [
            'size',
            {
                vue: {
                    component:   CheckboxSize,
                    codePreview: CheckboxSizeRaw,
                },
            },
        ],
        [
            'validation-state',
            {
                vue: {
                    component:   CheckboxValidationState,
                    codePreview: CheckboxValidationStateRaw,
                },
            },
        ],
        [
            'state',
            {
                vue: {
                    component:   CheckboxState,
                    codePreview: CheckboxStateRaw,
                },
            },
        ],
        [
            'inline-group',
            {
                vue: {
                    component:   InlineCheckboxGroup,
                    codePreview: InlineCheckboxGroupRaw,
                },
            },
        ],
        [
            'vertical-group',
            {
                vue: {
                    component:   VerticalCheckboxGroup,
                    codePreview: VerticalCheckboxGroupRaw,
                },
            },
        ],
    ]);
});
</script>
