<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   :api-docs-component-names="['FoRadio', 'FoImageRadio']"
    />
</template>

<script setup lang="ts">
import type { ComponentDocsPreview }  from '@/.vitepress/theme/Components/ComponentDocs/Types/ComponentDocs';
import type { ApiType }               from '@/Api/Types/Api.ts';
import type { Default }               from 'flyonui-vue';
import ComponentDocs                  from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import CustomRadioColor               from '@/Forms/Radio/CustomRadioColor.vue';
import CustomRadioColorRaw            from '@/Forms/Radio/CustomRadioColor.vue?raw';
import DefaultRadio                   from '@/Forms/Radio/DefaultRadio.vue';
import DefaultRadioRaw                from '@/Forms/Radio/DefaultRadio.vue?raw';
import DisabledRadio                  from '@/Forms/Radio/DisabledRadio.vue';
import DisabledRadioRaw               from '@/Forms/Radio/DisabledRadio.vue?raw';
import ImageRadio                     from '@/Forms/Radio/ImageRadio.vue';
import ImageRadioRaw                  from '@/Forms/Radio/ImageRadio.vue?raw';
import InlineRadioGroup               from '@/Forms/Radio/InlineRadioGroup.vue';
import InlineRadioGroupRaw            from '@/Forms/Radio/InlineRadioGroup.vue?raw';
import InsetRadio                     from '@/Forms/Radio/InsetRadio.vue';
import InsetRadioRaw                  from '@/Forms/Radio/InsetRadio.vue?raw';
import InsetRadioColor                from '@/Forms/Radio/InsetRadioColor.vue';
import InsetRadioColorRaw             from '@/Forms/Radio/InsetRadioColor.vue?raw';
import InsetRadioSize                 from '@/Forms/Radio/InsetRadioSize.vue';
import InsetRadioSizeRaw              from '@/Forms/Radio/InsetRadioSize.vue?raw';
import RadioButtonGroup               from '@/Forms/Radio/RadioButtonGroup.vue';
import RadioButtonGroupRaw            from '@/Forms/Radio/RadioButtonGroup.vue?raw';
import RadioColor                     from '@/Forms/Radio/RadioColor.vue';
import RadioColorRaw                  from '@/Forms/Radio/RadioColor.vue?raw';
import RadioHorizontalListGroup       from '@/Forms/Radio/RadioHorizontalListGroup.vue';
import RadioHorizontalListGroupRaw    from '@/Forms/Radio/RadioHorizontalListGroup.vue?raw';
import RadioListGroup                 from '@/Forms/Radio/RadioListGroup.vue';
import RadioListGroupRaw              from '@/Forms/Radio/RadioListGroup.vue?raw';
import RadioSize                      from '@/Forms/Radio/RadioSize.vue';
import RadioSizeRaw                   from '@/Forms/Radio/RadioSize.vue?raw';
import RadioValidationState           from '@/Forms/Radio/RadioValidationState.vue';
import RadioValidationStateRaw        from '@/Forms/Radio/RadioValidationState.vue?raw';
import RadioWithLabelAndHelperText    from '@/Forms/Radio/RadioWithLabelAndHelperText.vue';
import RadioWithLabelAndHelperTextRaw from '@/Forms/Radio/RadioWithLabelAndHelperText.vue?raw';
import VerticalRadioGroup             from '@/Forms/Radio/VerticalRadioGroup.vue';
import VerticalRadioGroupRaw          from '@/Forms/Radio/VerticalRadioGroup.vue?raw';
import { computed }                   from 'vue';

type Section = Default
    | 'with-label-and-helper-text'
    | 'inset'
    | 'color'
    | 'inset-color'
    | 'custom-color'
    | 'size'
    | 'inset-size'
    | 'validation-state'
    | 'disabled'
    | 'inline-group'
    | 'vertical-group'
    | 'list-group'
    | 'horizontal-list-group'
    | 'button-group'
    | 'image'
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
                code:      DefaultRadioRaw,
                component: DefaultRadio,
            },
        ],
        [
            'with-label-and-helper-text',
            {
                code:      RadioWithLabelAndHelperTextRaw,
                component: RadioWithLabelAndHelperText,
                grid:      { rows: 2, columns: 1 },
            },
        ],
        [
            'inset',
            {
                code:      InsetRadioRaw,
                component: InsetRadio,
            },
        ],
        [
            'color',
            {
                code:      RadioColorRaw,
                component: RadioColor,
            },
        ],
        [
            'inset-color',
            {
                code:      InsetRadioColorRaw,
                component: InsetRadioColor,
            },
        ],
        [
            'custom-color',
            {
                code:      CustomRadioColorRaw,
                component: CustomRadioColor,
            },
        ],
        [
            'size',
            {
                code:      RadioSizeRaw,
                component: RadioSize,
            },
        ],
        [
            'inset-size',
            {
                code:      InsetRadioSizeRaw,
                component: InsetRadioSize,
            },
        ],
        [
            'validation-state',
            {
                code:      RadioValidationStateRaw,
                component: RadioValidationState,
                grid:      { rows: 2, columns: 1 },
            },
        ],
        [
            'disabled',
            {
                code:      DisabledRadioRaw,
                component: DisabledRadio,
            },
        ],
        [
            'inline-group',
            {
                code:      InlineRadioGroupRaw,
                component: InlineRadioGroup,
            },
        ],
        [
            'vertical-group',
            {
                code:      VerticalRadioGroupRaw,
                component: VerticalRadioGroup,
            },
        ],
        [
            'list-group',
            {
                code:      RadioListGroupRaw,
                component: RadioListGroup,
                grid:      { columns: 1, rows: 1 },
            },
        ],
        [
            'horizontal-list-group',
            {
                code:      RadioHorizontalListGroupRaw,
                component: RadioHorizontalListGroup,
            },
        ],
        [
            'button-group',
            {
                code:      RadioButtonGroupRaw,
                component: RadioButtonGroup,
            },
        ],
        [
            'image',
            {
                code:      ImageRadioRaw,
                component: ImageRadio,
            },
        ],
    ]);
});
</script>
