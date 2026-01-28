<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   :api-docs-component-names="['FoSwitch', 'FoSwitchGroup']"
    />
</template>

<script setup lang="ts">
import type { ComponentDocsPreview } from '@/.vitepress/theme/Components/ComponentDocs/Types/ComponentDocs';
import type { ApiType }              from '@/Api/Types/Api';
import type { Default }              from 'flyonui-vue';
import ComponentDocs                 from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import DefaultSwitch                 from '@/Forms/Switch/DefaultSwitch.vue';
import DefaultSwitchRaw              from '@/Forms/Switch/DefaultSwitch.vue?raw';
import InlineSwitchGroup             from '@/Forms/Switch/InlineSwitchGroup.vue';
import InlineSwitchGroupRaw          from '@/Forms/Switch/InlineSwitchGroup.vue?raw';
import OutlineSwitch                 from '@/Forms/Switch/OutlineSwitch.vue';
import OutlineSwitchRaw              from '@/Forms/Switch/OutlineSwitch.vue?raw';
import SwitchColor                   from '@/Forms/Switch/SwitchColor.vue';
import SwitchColorRaw                from '@/Forms/Switch/SwitchColor.vue?raw';
import SwitchCustomColor             from '@/Forms/Switch/SwitchCustomColor.vue';
import SwitchCustomColorRaw          from '@/Forms/Switch/SwitchCustomColor.vue?raw';
import SwitchHorizontalListGroup     from '@/Forms/Switch/SwitchHorizontalListGroup.vue';
import SwitchHorizontalListGroupRaw  from '@/Forms/Switch/SwitchHorizontalListGroup.vue?raw';
import SwitchListGroup               from '@/Forms/Switch/SwitchListGroup.vue';
import SwitchListGroupRaw            from '@/Forms/Switch/SwitchListGroup.vue?raw';
import SwitchSize                    from '@/Forms/Switch/SwitchSize.vue';
import SwitchSizeRaw                 from '@/Forms/Switch/SwitchSize.vue?raw';
import SwitchState                   from '@/Forms/Switch/SwitchState.vue';
import SwitchStateRaw                from '@/Forms/Switch/SwitchState.vue?raw';
import SwitchValidationState         from '@/Forms/Switch/SwitchValidationState.vue';
import SwitchValidationStateRaw      from '@/Forms/Switch/SwitchValidationState.vue?raw';
import SwitchWithIcon                from '@/Forms/Switch/SwitchWithIcon.vue';
import SwitchWithIconRaw             from '@/Forms/Switch/SwitchWithIcon.vue?raw';
import VerticalSwitchGroup           from '@/Forms/Switch/VerticalSwitchGroup.vue';
import VerticalSwitchGroupRaw        from '@/Forms/Switch/VerticalSwitchGroup.vue?raw';
import { computed }                  from 'vue';

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

const previews = computed(() => {
    return new Map<Section, ComponentDocsPreview>([
        [
            'default',
            {
                code:      DefaultSwitchRaw,
                component: DefaultSwitch,
            },
        ],
        [
            'color',
            {
                code:      SwitchColorRaw,
                component: SwitchColor,
            },
        ],
        [
            'outline',
            {
                code:      OutlineSwitchRaw,
                component: OutlineSwitch,
            },
        ],
        [
            'custom-color',
            {
                code:      SwitchCustomColorRaw,
                component: SwitchCustomColor,
            },
        ],
        [
            'size',
            {
                code:      SwitchSizeRaw,
                component: SwitchSize,
            },
        ],
        [
            'validation-state',
            {
                code:      SwitchValidationStateRaw,
                component: SwitchValidationState,
            },
        ],
        [
            'icon',
            {
                code:      SwitchWithIconRaw,
                component: SwitchWithIcon,
            },
        ],
        [
            'state',
            {
                code:      SwitchStateRaw,
                component: SwitchState,
            },
        ],
        [
            'inline-group',
            {
                code:      InlineSwitchGroupRaw,
                component: InlineSwitchGroup,
            },
        ],
        [
            'vertical-group',
            {
                code:      VerticalSwitchGroupRaw,
                component: VerticalSwitchGroup,
            },
        ],
        [
            'list-group',
            {
                code:      SwitchListGroupRaw,
                component: SwitchListGroup,
            },
        ],
        [
            'horizontal-list-group',
            {
                code:      SwitchHorizontalListGroupRaw,
                component: SwitchHorizontalListGroup,
            },
        ],
    ]);
});
</script>
