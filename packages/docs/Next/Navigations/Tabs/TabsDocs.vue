<template>
    <ComponentDocs :previews="previews"
                   :section="section"
                   :api-docs-component-names="['FoTabs', 'FoTab', 'FoTabContent']"
    />
</template>

<script setup lang="ts">
import type { ComponentDocsPreview } from '@/.vitepress/theme/Components/ComponentDocs/Types/ComponentDocs';
import type { ApiType }              from '@/Api/Types/Api';
import type { Default }              from 'flyonui-vue';
import ComponentDocs                 from '@/.vitepress/theme/Components/ComponentDocs/UI/ComponentDocs.vue';
import ActivateOnHoverTabs           from '@/Next/Navigations/Tabs/ActivateOnHoverTabs.vue';
import ActivateOnHoverTabsRaw        from '@/Next/Navigations/Tabs/ActivateOnHoverTabs.vue?raw';
import DefaultTabs                   from '@/Next/Navigations/Tabs/DefaultTabs.vue';
import DefaultTabsRaw                from '@/Next/Navigations/Tabs/DefaultTabs.vue?raw';
import DisabledTabs                  from '@/Next/Navigations/Tabs/DisabledTabs.vue';
import DisabledTabsRaw               from '@/Next/Navigations/Tabs/DisabledTabs.vue?raw';
import FilledTabs                    from '@/Next/Navigations/Tabs/FilledTabs.vue';
import FilledTabsRaw                 from '@/Next/Navigations/Tabs/FilledTabs.vue?raw';
import FullControlTabs               from '@/Next/Navigations/Tabs/FullControlTabs.vue';
import FullControlTabsRaw            from '@/Next/Navigations/Tabs/FullControlTabs.vue?raw';
import ResponsiveTabs                from '@/Next/Navigations/Tabs/ResponsiveTabs.vue';
import ResponsiveTabsRaw             from '@/Next/Navigations/Tabs/ResponsiveTabs.vue?raw';
import TabsAlignment                 from '@/Next/Navigations/Tabs/TabsAlignment.vue';
import TabsAlignmentRaw              from '@/Next/Navigations/Tabs/TabsAlignment.vue?raw';
import TabsShape                     from '@/Next/Navigations/Tabs/TabsShape.vue';
import TabsShapeRaw                  from '@/Next/Navigations/Tabs/TabsShape.vue?raw';
import TabsSize                      from '@/Next/Navigations/Tabs/TabsSize.vue';
import TabsSizeRaw                   from '@/Next/Navigations/Tabs/TabsSize.vue?raw';
import TabsWithBadge                 from '@/Next/Navigations/Tabs/TabsWithBadge.vue';
import TabsWithBadgeRaw              from '@/Next/Navigations/Tabs/TabsWithBadge.vue?raw';
import TabsWithIcon                  from '@/Next/Navigations/Tabs/TabsWithIcon.vue';
import TabsWithIconRaw               from '@/Next/Navigations/Tabs/TabsWithIcon.vue?raw';
import VerticalTabs                  from '@/Next/Navigations/Tabs/VerticalTabs.vue';
import VerticalTabsRaw               from '@/Next/Navigations/Tabs/VerticalTabs.vue?raw';
import { computed }                  from 'vue';

type Section = Default
    | 'disabled'
    | 'filled'
    | 'vertical'
    | 'size'
    | 'alignment'
    | 'with-icon'
    | 'with-badge'
    | 'responsive'
    | 'activate-on-hover'
    | 'shape'
    | 'full-control'
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
                code:      DefaultTabsRaw,
                component: DefaultTabs,
            },
        ],
        [
            'disabled',
            {
                code:      DisabledTabsRaw,
                component: DisabledTabs,
            },
        ],
        [
            'filled',
            {
                code:      FilledTabsRaw,
                component: FilledTabs,
            },
        ],
        [
            'vertical',
            {
                code:      VerticalTabsRaw,
                component: VerticalTabs,
            },
        ],
        [
            'size',
            {
                code:      TabsSizeRaw,
                component: TabsSize,
            },
        ],
        [
            'alignment',
            {
                code:      TabsAlignmentRaw,
                component: TabsAlignment,
            },
        ],
        [
            'with-icon',
            {
                code:      TabsWithIconRaw,
                component: TabsWithIcon,
            },
        ],
        [
            'with-badge',
            {
                code:      TabsWithBadgeRaw,
                component: TabsWithBadge,
            },
        ],
        [
            'responsive',
            {
                code:      ResponsiveTabsRaw,
                component: ResponsiveTabs,
            },
        ],
        [
            'activate-on-hover',
            {
                code:      ActivateOnHoverTabsRaw,
                component: ActivateOnHoverTabs,
            },
        ],
        [
            'shape',
            {
                code:      TabsShapeRaw,
                component: TabsShape,
            },
        ],
        [
            'full-control',
            {
                code:      FullControlTabsRaw,
                component: FullControlTabs,
            },
        ],
    ]);
});
</script>
