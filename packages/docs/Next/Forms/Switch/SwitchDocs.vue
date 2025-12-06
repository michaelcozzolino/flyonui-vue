<template>
    <ComponentPreview v-if="section === 'default'"
                      :data-test-screenshot="section"
                      :code="DefaultSwitchRaw"
                      :component="DefaultSwitch"
    />

    <ComponentPreview v-else-if="section === 'color'"
                      :data-test-screenshot="section"
                      :code="SwitchColorRaw"
                      :component="SwitchColor"
    />

    <ComponentPreview v-else-if="section === 'outline'"
                      :data-test-screenshot="section"
                      :code="OutlineSwitchRaw"
                      :component="OutlineSwitch"
    />

    <ComponentPreview v-else-if="section === 'custom-color'"
                      :data-test-screenshot="section"
                      :code="SwitchCustomColorRaw"
                      :component="SwitchCustomColor"
    />

    <ComponentPreview v-else-if="section === 'size'"
                      :data-test-screenshot="section"
                      :code="SwitchSizeRaw"
                      :component="SwitchSize"
    />

    <ComponentPreview v-else-if="section === 'validation-state'"
                      :data-test-screenshot="section"
                      :code="SwitchValidationStateRaw"
                      :component="SwitchValidationState"
    />

    <ComponentPreview v-else-if="section === 'icon'"
                      :data-test-screenshot="section"
                      :code="SwitchWithIconRaw"
                      :component="SwitchWithIcon"
    />

    <ComponentPreview v-else-if="section === 'state'"
                      :data-test-screenshot="section"
                      :code="SwitchStateRaw"
                      :component="SwitchState"
    />

    <ComponentPreview v-else-if="section === 'inline-group'"
                      :data-test-screenshot="section"
                      :code="InlineSwitchGroupRaw"
                      :component="InlineSwitchGroup"
    />

    <ComponentPreview v-else-if="section === 'vertical-group'"
                      :data-test-screenshot="section"
                      :code="VerticalSwitchGroupRaw"
                      :component="VerticalSwitchGroup"
    />

    <ComponentPreview v-else-if="section === 'list-group'"
                      :data-test-screenshot="section"
                      :code="SwitchListGroupRaw"
                      :component="SwitchListGroup"
    />

    <ComponentPreview v-else-if="section === 'horizontal-list-group'"
                      :data-test-screenshot="section"
                      :code="SwitchHorizontalListGroupRaw"
                      :component="SwitchHorizontalListGroup"
    />

    <ComponentsApiDocs v-else
                       :section="section"
                       :component-names="['FoSwitch', 'FoSwitchGroup']"
    />
</template>

<script setup lang="ts">
import type { ApiType }             from '@/Api/Types/Api';
import type { Default }             from 'flyonui-vue';
import ComponentPreview             from '@/.vitepress/theme/Components/Preview/UI/ComponentPreview.vue';
import ComponentsApiDocs            from '@/Api/UI/ComponentsApiDocs.vue';
import DefaultSwitch                from '@/Next/Forms/Switch/DefaultSwitch.vue';
import DefaultSwitchRaw             from '@/Next/Forms/Switch/DefaultSwitch.vue?raw';
import InlineSwitchGroup            from '@/Next/Forms/Switch/InlineSwitchGroup.vue';
import InlineSwitchGroupRaw         from '@/Next/Forms/Switch/InlineSwitchGroup.vue?raw';
import OutlineSwitch                from '@/Next/Forms/Switch/OutlineSwitch.vue';
import OutlineSwitchRaw             from '@/Next/Forms/Switch/OutlineSwitch.vue?raw';
import SwitchColor                  from '@/Next/Forms/Switch/SwitchColor.vue';
import SwitchColorRaw               from '@/Next/Forms/Switch/SwitchColor.vue?raw';
import SwitchCustomColor            from '@/Next/Forms/Switch/SwitchCustomColor.vue';
import SwitchCustomColorRaw         from '@/Next/Forms/Switch/SwitchCustomColor.vue?raw';
import SwitchHorizontalListGroup    from '@/Next/Forms/Switch/SwitchHorizontalListGroup.vue';
import SwitchHorizontalListGroupRaw from '@/Next/Forms/Switch/SwitchHorizontalListGroup.vue?raw';
import SwitchListGroup              from '@/Next/Forms/Switch/SwitchListGroup.vue';
import SwitchListGroupRaw           from '@/Next/Forms/Switch/SwitchListGroup.vue?raw';
import SwitchSize                   from '@/Next/Forms/Switch/SwitchSize.vue';
import SwitchSizeRaw                from '@/Next/Forms/Switch/SwitchSize.vue?raw';
import SwitchState                  from '@/Next/Forms/Switch/SwitchState.vue';
import SwitchStateRaw               from '@/Next/Forms/Switch/SwitchState.vue?raw';
import SwitchValidationState        from '@/Next/Forms/Switch/SwitchValidationState.vue';
import SwitchValidationStateRaw     from '@/Next/Forms/Switch/SwitchValidationState.vue?raw';
import SwitchWithIcon               from '@/Next/Forms/Switch/SwitchWithIcon.vue';
import SwitchWithIconRaw            from '@/Next/Forms/Switch/SwitchWithIcon.vue?raw';
import VerticalSwitchGroup          from '@/Next/Forms/Switch/VerticalSwitchGroup.vue';
import VerticalSwitchGroupRaw       from '@/Next/Forms/Switch/VerticalSwitchGroup.vue?raw';

interface Props {
    section: Default
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
}

defineProps<Props>();
</script>
