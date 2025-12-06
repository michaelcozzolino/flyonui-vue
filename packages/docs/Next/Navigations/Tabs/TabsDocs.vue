<template>
    <ComponentPreview v-if="section === 'default'"
                      :data-test-screenshot="section"
                      :code="DefaultTabsRaw"
                      :component="DefaultTabs"
    />

    <ComponentPreview v-else-if="section === 'disabled'"
                      :data-test-screenshot="section"
                      :code="DisabledTabsRaw"
                      :component="DisabledTabs"
    />

    <ComponentPreview v-else-if="section === 'filled'"
                      :data-test-screenshot="section"
                      :code="FilledTabsRaw"
                      :component="FilledTabs"
    />

    <ComponentPreview v-else-if="section === 'vertical'"
                      :data-test-screenshot="section"
                      :code="VerticalTabsRaw"
                      :component="VerticalTabs"
    />

    <ComponentPreview v-else-if="section === 'size'"
                      :data-test-screenshot="section"
                      :code="TabsSizeRaw"
                      :component="TabsSize"
    />

    <ComponentPreview v-else-if="section === 'alignment'"
                      :data-test-screenshot="section"
                      :code="TabsAlignmentRaw"
                      :component="TabsAlignment"
    />

    <ComponentPreview v-else-if="section === 'with-icon'"
                      :data-test-screenshot="section"
                      :code="TabsWithIconRaw"
                      :component="TabsWithIcon"
    />

    <ComponentPreview v-else-if="section === 'with-badge'"
                      :data-test-screenshot="section"
                      :code="TabsWithBadgeRaw"
                      :component="TabsWithBadge"
    />

    <ComponentPreview v-else-if="section === 'responsive'"
                      :data-test-screenshot="section"
                      :code="ResponsiveTabsRaw"
                      :component="ResponsiveTabs"
    />

    <ComponentPreview v-else-if="section === 'activate-on-hover'"
                      :data-test-screenshot="section"
                      :code="ActivateOnHoverTabsRaw"
                      :component="ActivateOnHoverTabs"
    />

    <ComponentPreview v-else-if="section === 'shape'"
                      :data-test-screenshot="section"
                      :code="TabsShapeRaw"
                      :component="TabsShape"
    />

    <ComponentPreview v-else-if="section === 'full-control'"
                      :data-test-screenshot="section"
                      :code="FullControlTabsRaw"
                      :component="FullControlTabs"
    />

    <ComponentsApiDocs v-else
                       :section="section"
                       :component-names="['FoTabs', 'FoTab', 'FoTabContent']"
    />
</template>

<script setup lang="ts">
import type { ApiType }       from '@/Api/Types/Api';
import type { Default }       from 'flyonui-vue';
import ComponentPreview       from '@/.vitepress/theme/Components/Preview/UI/ComponentPreview.vue';
import ComponentsApiDocs      from '@/Api/UI/ComponentsApiDocs.vue';
import ActivateOnHoverTabs    from '@/Next/Navigations/Tabs/ActivateOnHoverTabs.vue';
import ActivateOnHoverTabsRaw from '@/Next/Navigations/Tabs/ActivateOnHoverTabs.vue?raw';
import DefaultTabs            from '@/Next/Navigations/Tabs/DefaultTabs.vue';
import DefaultTabsRaw         from '@/Next/Navigations/Tabs/DefaultTabs.vue?raw';
import DisabledTabs           from '@/Next/Navigations/Tabs/DisabledTabs.vue';
import DisabledTabsRaw        from '@/Next/Navigations/Tabs/DisabledTabs.vue?raw';
import FilledTabs             from '@/Next/Navigations/Tabs/FilledTabs.vue';
import FilledTabsRaw          from '@/Next/Navigations/Tabs/FilledTabs.vue?raw';
import FullControlTabs        from '@/Next/Navigations/Tabs/FullControlTabs.vue';
import FullControlTabsRaw     from '@/Next/Navigations/Tabs/FullControlTabs.vue?raw';
import ResponsiveTabs         from '@/Next/Navigations/Tabs/ResponsiveTabs.vue';
import ResponsiveTabsRaw      from '@/Next/Navigations/Tabs/ResponsiveTabs.vue?raw';
import TabsAlignment          from '@/Next/Navigations/Tabs/TabsAlignment.vue';
import TabsAlignmentRaw       from '@/Next/Navigations/Tabs/TabsAlignment.vue?raw';
import TabsShape              from '@/Next/Navigations/Tabs/TabsShape.vue';
import TabsShapeRaw           from '@/Next/Navigations/Tabs/TabsShape.vue?raw';
import TabsSize               from '@/Next/Navigations/Tabs/TabsSize.vue';
import TabsSizeRaw            from '@/Next/Navigations/Tabs/TabsSize.vue?raw';
import TabsWithBadge          from '@/Next/Navigations/Tabs/TabsWithBadge.vue';
import TabsWithBadgeRaw       from '@/Next/Navigations/Tabs/TabsWithBadge.vue?raw';
import TabsWithIcon           from '@/Next/Navigations/Tabs/TabsWithIcon.vue';
import TabsWithIconRaw        from '@/Next/Navigations/Tabs/TabsWithIcon.vue?raw';
import VerticalTabs           from '@/Next/Navigations/Tabs/VerticalTabs.vue';
import VerticalTabsRaw        from '@/Next/Navigations/Tabs/VerticalTabs.vue?raw';

interface Props {
    section: Default
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
}

defineProps<Props>();
</script>
