<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   api-docs-component-names="FoAlert"
    />
</template>

<script setup lang="ts">
import type { ComponentDocsPreview } from '@/.vitepress/theme/Components/ComponentDocs/Types/ComponentDocs';
import type { ApiType }              from '@/Api/Types/Api.ts';
import ComponentDocs                 from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import AlertWithAction               from '@/Next/Components/Alert/AlertWithAction.vue';
import AlertWithActionRaw            from '@/Next/Components/Alert/AlertWithAction.vue?raw';
import AlertWithIcon                 from '@/Next/Components/Alert/AlertWithIcon.vue';
import AlertWithIconRaw              from '@/Next/Components/Alert/AlertWithIcon.vue?raw';
import AlertWithList                 from '@/Next/Components/Alert/AlertWithList.vue';
import AlertWithListRaw              from '@/Next/Components/Alert/AlertWithList.vue?raw';
import DashedAlert                   from '@/Next/Components/Alert/DashedAlert.vue';
import DashedAlertRaw                from '@/Next/Components/Alert/DashedAlert.vue?raw';
import DescriptiveAlert              from '@/Next/Components/Alert/DescriptiveAlert.vue';
import DescriptiveAlertRaw           from '@/Next/Components/Alert/DescriptiveAlert.vue?raw';
import DismissibleAlert              from '@/Next/Components/Alert/DismissibleAlert.vue';
import DismissibleAlertRaw           from '@/Next/Components/Alert/DismissibleAlert.vue?raw';
import OutlineAlert                  from '@/Next/Components/Alert/OutlineAlert.vue';
import OutlineAlertRaw               from '@/Next/Components/Alert/OutlineAlert.vue?raw';
import ResponsiveAlert               from '@/Next/Components/Alert/ResponsiveAlert.vue';
import ResponsiveAlertRaw            from '@/Next/Components/Alert/ResponsiveAlert.vue?raw';
import SoftAlert                     from '@/Next/Components/Alert/SoftAlert.vue';
import SoftAlertRaw                  from '@/Next/Components/Alert/SoftAlert.vue?raw';
import SolidAlert                    from '@/Next/Components/Alert/SolidAlert.vue';
import SolidAlertRaw                 from '@/Next/Components/Alert/SolidAlert.vue?raw';
import { computed }                  from 'vue';

type Section = 'solid'
    | 'soft'
    | 'outline'
    | 'dash'
    | 'with-icon'
    | 'descriptive'
    | 'with-list'
    | 'with-action'
    | 'responsive'
    | 'dismissible'
    | ApiType;

interface Props {
    section: Section;
}

defineProps<Props>();

const previews = computed(() => {
    return new Map<Section, ComponentDocsPreview>([
        [
            'solid',
            {
                code:      SolidAlertRaw,
                component: SolidAlert,
            },
        ],
        [
            'soft',
            {
                code:      SoftAlertRaw,
                component: SoftAlert,
            },
        ],
        [
            'outline',
            {
                code:      OutlineAlertRaw,
                component: OutlineAlert,
            },
        ],
        [
            'dash',
            {
                code:      DashedAlertRaw,
                component: DashedAlert,
            },
        ],
        [
            'with-icon',
            {
                code:      AlertWithIconRaw,
                component: AlertWithIcon,
            },
        ],
        [
            'descriptive',
            {
                code:      DescriptiveAlertRaw,
                component: DescriptiveAlert,
            },
        ],
        [
            'with-list',
            {
                code:      AlertWithListRaw,
                component: AlertWithList,
            },
        ],
        [
            'with-action',
            {
                code:      AlertWithActionRaw,
                component: AlertWithAction,
            },
        ],
        [
            'responsive',
            {
                code:      ResponsiveAlertRaw,
                component: ResponsiveAlert,
            },
        ],
        [
            'dismissible',
            {
                code:      DismissibleAlertRaw,
                component: DismissibleAlert,
            },
        ],
    ]);
});
</script>
