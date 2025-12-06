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
import DefaultSwitch                 from '@/Next/Forms/Switch/DefaultSwitch.vue';
import DefaultSwitchRaw              from '@/Next/Forms/Switch/DefaultSwitch.vue?raw';
import InlineSwitchGroup             from '@/Next/Forms/Switch/InlineSwitchGroup.vue';
import InlineSwitchGroupRaw          from '@/Next/Forms/Switch/InlineSwitchGroup.vue?raw';
import OutlineSwitch                 from '@/Next/Forms/Switch/OutlineSwitch.vue';
import OutlineSwitchRaw              from '@/Next/Forms/Switch/OutlineSwitch.vue?raw';
import SwitchColor                   from '@/Next/Forms/Switch/SwitchColor.vue';
import SwitchColorRaw                from '@/Next/Forms/Switch/SwitchColor.vue?raw';
import SwitchCustomColor             from '@/Next/Forms/Switch/SwitchCustomColor.vue';
import SwitchCustomColorRaw          from '@/Next/Forms/Switch/SwitchCustomColor.vue?raw';
import SwitchHorizontalListGroup     from '@/Next/Forms/Switch/SwitchHorizontalListGroup.vue';
import SwitchHorizontalListGroupRaw  from '@/Next/Forms/Switch/SwitchHorizontalListGroup.vue?raw';
import SwitchListGroup               from '@/Next/Forms/Switch/SwitchListGroup.vue';
import SwitchListGroupRaw            from '@/Next/Forms/Switch/SwitchListGroup.vue?raw';
import SwitchSize                    from '@/Next/Forms/Switch/SwitchSize.vue';
import SwitchSizeRaw                 from '@/Next/Forms/Switch/SwitchSize.vue?raw';
import SwitchState                   from '@/Next/Forms/Switch/SwitchState.vue';
import SwitchStateRaw                from '@/Next/Forms/Switch/SwitchState.vue?raw';
import SwitchValidationState         from '@/Next/Forms/Switch/SwitchValidationState.vue';
import SwitchValidationStateRaw      from '@/Next/Forms/Switch/SwitchValidationState.vue?raw';
import SwitchWithIcon                from '@/Next/Forms/Switch/SwitchWithIcon.vue';
import SwitchWithIconRaw             from '@/Next/Forms/Switch/SwitchWithIcon.vue?raw';
import VerticalSwitchGroup           from '@/Next/Forms/Switch/VerticalSwitchGroup.vue';
import VerticalSwitchGroupRaw        from '@/Next/Forms/Switch/VerticalSwitchGroup.vue?raw';
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
