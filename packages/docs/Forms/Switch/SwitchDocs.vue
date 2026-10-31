<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   :api-docs-component-names="['FoSwitch', 'FoSwitchGroup']"
    />
</template>

<script setup lang="ts">
import type { Default }                 from 'flyonui-vue';
import type { FrameworkSectionPreview } from '@/.vitepress/theme/Components/Preview/Types/Preview';
import type { ApiType }                 from '@/Api/Types/Api';
import { computed }                     from 'vue';
import ComponentDocs                    from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import DefaultSwitch                    from '@/Forms/Switch/DefaultSwitch.vue';
import DefaultSwitchRaw                 from '@/Forms/Switch/DefaultSwitch.vue?raw';
import InlineSwitchGroup                from '@/Forms/Switch/InlineSwitchGroup.vue';
import InlineSwitchGroupRaw             from '@/Forms/Switch/InlineSwitchGroup.vue?raw';
import OutlineSwitch                    from '@/Forms/Switch/OutlineSwitch.vue';
import OutlineSwitchRaw                 from '@/Forms/Switch/OutlineSwitch.vue?raw';
import SwitchColor                      from '@/Forms/Switch/SwitchColor.vue';
import SwitchColorRaw                   from '@/Forms/Switch/SwitchColor.vue?raw';
import SwitchCustomColor                from '@/Forms/Switch/SwitchCustomColor.vue';
import SwitchCustomColorRaw             from '@/Forms/Switch/SwitchCustomColor.vue?raw';
import SwitchHorizontalListGroup        from '@/Forms/Switch/SwitchHorizontalListGroup.vue';
import SwitchHorizontalListGroupRaw     from '@/Forms/Switch/SwitchHorizontalListGroup.vue?raw';
import SwitchListGroup                  from '@/Forms/Switch/SwitchListGroup.vue';
import SwitchListGroupRaw               from '@/Forms/Switch/SwitchListGroup.vue?raw';
import SwitchSize                       from '@/Forms/Switch/SwitchSize.vue';
import SwitchSizeRaw                    from '@/Forms/Switch/SwitchSize.vue?raw';
import SwitchState                      from '@/Forms/Switch/SwitchState.vue';
import SwitchStateRaw                   from '@/Forms/Switch/SwitchState.vue?raw';
import SwitchValidationState            from '@/Forms/Switch/SwitchValidationState.vue';
import SwitchValidationStateRaw         from '@/Forms/Switch/SwitchValidationState.vue?raw';
import SwitchWithIcon                   from '@/Forms/Switch/SwitchWithIcon.vue';
import SwitchWithIconRaw                from '@/Forms/Switch/SwitchWithIcon.vue?raw';
import VerticalSwitchGroup              from '@/Forms/Switch/VerticalSwitchGroup.vue';
import VerticalSwitchGroupRaw           from '@/Forms/Switch/VerticalSwitchGroup.vue?raw';

type Section = Default
    | 'color'
    | 'outline'
    | 'custom-color'
    | 'size'
    | 'validation-state'
    | 'icon'
    | 'state'
    | 'inline-group'
    | 'vertical-group'
    | 'list-group'
    | 'horizontal-list-group'
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
                    codePreview: DefaultSwitchRaw,
                    component:   DefaultSwitch,
                },
            },
        ],
        [
            'color',
            {
                vue: {
                    codePreview: SwitchColorRaw,
                    component:   SwitchColor,
                },
            },
        ],
        [
            'outline',
            {
                vue: {
                    codePreview: OutlineSwitchRaw,
                    component:   OutlineSwitch,
                },
            },
        ],
        [
            'custom-color',
            {
                vue: {
                    codePreview: SwitchCustomColorRaw,
                    component:   SwitchCustomColor,
                },
            },
        ],
        [
            'size',
            {
                vue: {
                    codePreview: SwitchSizeRaw,
                    component:   SwitchSize,
                },
            },
        ],
        [
            'validation-state',
            {
                vue: {
                    codePreview: SwitchValidationStateRaw,
                    component:   SwitchValidationState,
                },
            },
        ],
        [
            'icon',
            {
                vue: {
                    codePreview: SwitchWithIconRaw,
                    component:   SwitchWithIcon,
                },
            },
        ],
        [
            'state',
            {
                vue: {
                    codePreview: SwitchStateRaw,
                    component:   SwitchState,
                },
            },
        ],
        [
            'inline-group',
            {
                vue: {
                    codePreview: InlineSwitchGroupRaw,
                    component:   InlineSwitchGroup,
                },
            },
        ],
        [
            'vertical-group',
            {
                vue: {
                    codePreview: VerticalSwitchGroupRaw,
                    component:   VerticalSwitchGroup,
                },
            },
        ],
        [
            'list-group',
            {
                vue: {
                    codePreview: SwitchListGroupRaw,
                    component:   SwitchListGroup,
                },
            },
        ],
        [
            'horizontal-list-group',
            {
                vue: {
                    codePreview: SwitchHorizontalListGroupRaw,
                    component:   SwitchHorizontalListGroup,
                },
            },
        ],
    ]);
});
</script>
