<template>
    <FoTabs v-model="activeTab"
            alignment="center"
            :tabs="frameworkTabs"
    >
        <template #tabs>
            <FoTab v-for="tab in frameworkTabs"
                   :id="tab.id"
                   :key="tab.id"
                   :icon="tab.icon"
            >
                {{ tab.label }}
            </FoTab>
        </template>

        <template #contents>
            <FoTabContent v-for="tab in frameworkTabs"
                          :key="tab.id"
                          :tab-id="tab.id"
            >
                <ComponentPreview :code-preview="tab.codePreview"
                                  :component="tab.component"
                                  :grid="previews.grid"
                />
            </FoTabContent>
        </template>
    </FoTabs>
</template>

<script setup lang="ts">
import type { TabProps }       from 'flyonui-vue';
import type {
    ComponentPreviewProps,
    FrameworkId,
    FrameworkSectionPreview,
}                                      from '@/.vitepress/theme/Components/Preview/Types/Preview';
import { FoTab, FoTabContent, FoTabs } from 'flyonui-vue';
import { storeToRefs }                 from 'pinia';
import { computed, ref, watch }        from 'vue';
import { useFrameworkSelectionStore }  from '@/.vitepress/theme/Components/Layout/Features/FrameworkSelector/Lib/UseFrameworkSelectionStore.ts';
import ComponentPreview                from '@/.vitepress/theme/Components/Preview/UI/ComponentPreview.vue';

interface Props {
    previews: FrameworkSectionPreview;
}

const props = defineProps<Props>();

interface FrameworkMetadata {
    id:    FrameworkId;
    label: string;
    icon:  NonNullable<TabProps['icon']>;
}

const frameworkMetadata: FrameworkMetadata[] = [
    { id: 'vue', label: 'Vue', icon: 'logos:vue' },
    { id: 'react', label: 'React', icon: 'logos:react' },
    { id: 'html', label: 'HTML', icon: 'logos:html-5' },
    { id: 'angular', label: 'Angular', icon: 'logos:angular-icon' },
];

const { selectedFrameworkIds } = storeToRefs(useFrameworkSelectionStore());

interface FrameworkTab extends TabProps, Pick<ComponentPreviewProps, 'codePreview' | 'component'> {
    label: string;
}

const frameworkTabs = computed((): FrameworkTab[] => {
    const tabs: FrameworkTab[] = [];

    for (const { id, label, icon } of frameworkMetadata) {
        const frameworkPreview = props.previews[id] ?? null;

        if (frameworkPreview !== null && selectedFrameworkIds.value.includes(id)) {
            tabs.push({
                id,
                label,
                icon,
                codePreview: frameworkPreview.codePreview,
                component:   frameworkPreview.component,

            });
        }
    }

    return tabs;
});

const activeTab = ref<Readonly<FrameworkTab>>(frameworkTabs.value[0]);

watch(frameworkTabs, (): void => {
    if (frameworkTabs.value.some((tab: FrameworkTab): boolean => tab.id === activeTab.value?.id)) {
        return;
    }

    // the first tab is always vue, according to the framework metadata
    const fallbackTab = frameworkTabs.value[0] ?? null;

    if (fallbackTab === null) {
        throw new Error('Fallback tab not found.');
    }

    activeTab.value = fallbackTab;
});
</script>
