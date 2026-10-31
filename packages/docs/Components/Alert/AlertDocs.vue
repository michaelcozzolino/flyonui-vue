<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   api-docs-component-names="FoAlert"
    />
</template>

<script setup lang="ts">
import type { FrameworkSectionPreview } from '@/.vitepress/theme/Components/Preview/Types/Preview';
import type { ApiType }                 from '@/Api/Types/Api';
import { computed }                     from 'vue';
import ComponentDocs                    from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import AlertWithAction                  from '@/Components/Alert/AlertWithAction.vue';
import AlertWithActionRaw               from '@/Components/Alert/AlertWithAction.vue?raw';
import AlertWithIcon                    from '@/Components/Alert/AlertWithIcon.vue';
import AlertWithIconRaw                 from '@/Components/Alert/AlertWithIcon.vue?raw';
import AlertWithList                    from '@/Components/Alert/AlertWithList.vue';
import AlertWithListRaw                 from '@/Components/Alert/AlertWithList.vue?raw';
import DashedAlert                      from '@/Components/Alert/DashedAlert.vue';
import DashedAlertRaw                   from '@/Components/Alert/DashedAlert.vue?raw';
import DescriptiveAlert                 from '@/Components/Alert/DescriptiveAlert.vue';
import DescriptiveAlertRaw              from '@/Components/Alert/DescriptiveAlert.vue?raw';
import DismissibleAlert                 from '@/Components/Alert/DismissibleAlert.vue';
import DismissibleAlertRaw              from '@/Components/Alert/DismissibleAlert.vue?raw';
import OutlineAlert                     from '@/Components/Alert/OutlineAlert.vue';
import OutlineAlertRaw                  from '@/Components/Alert/OutlineAlert.vue?raw';
import ResponsiveAlert                  from '@/Components/Alert/ResponsiveAlert.vue';
import ResponsiveAlertRaw               from '@/Components/Alert/ResponsiveAlert.vue?raw';
import SoftAlert                        from '@/Components/Alert/SoftAlert.vue';
import SoftAlertRaw                     from '@/Components/Alert/SoftAlert.vue?raw';
import SolidAlert                       from '@/Components/Alert/SolidAlert.vue';
import SolidAlertRaw                    from '@/Components/Alert/SolidAlert.vue?raw';

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

const previews = computed((): Map<Section, FrameworkSectionPreview> => {
    return new Map<Section, FrameworkSectionPreview>([
        [
            'solid',
            {
                vue: {
                    codePreview: SolidAlertRaw,
                    component:   SolidAlert,
                },
            },
        ],
        [
            'soft',
            {
                vue: {
                    codePreview: SoftAlertRaw,
                    component:   SoftAlert,
                },
            },
        ],
        [
            'outline',
            {
                vue: {
                    codePreview: OutlineAlertRaw,
                    component:   OutlineAlert,
                },
            },
        ],
        [
            'dash',
            {
                vue: {
                    codePreview: DashedAlertRaw,
                    component:   DashedAlert,
                },
            },
        ],
        [
            'with-icon',
            {
                vue: {
                    codePreview: AlertWithIconRaw,
                    component:   AlertWithIcon,
                },
            },
        ],
        [
            'descriptive',
            {
                vue: {
                    codePreview: DescriptiveAlertRaw,
                    component:   DescriptiveAlert,
                },
            },
        ],
        [
            'with-list',
            {
                vue: {
                    codePreview: AlertWithListRaw,
                    component:   AlertWithList,
                },
            },
        ],
        [
            'with-action',
            {
                vue: {
                    codePreview: AlertWithActionRaw,
                    component:   AlertWithAction,
                },
            },
        ],
        [
            'responsive',
            {
                vue: {
                    codePreview: ResponsiveAlertRaw,
                    component:   ResponsiveAlert,
                },
            },
        ],
        [
            'dismissible',
            {
                vue: {
                    codePreview: DismissibleAlertRaw,
                    component:   DismissibleAlert,
                },
            },
        ],
    ]);
});
</script>
