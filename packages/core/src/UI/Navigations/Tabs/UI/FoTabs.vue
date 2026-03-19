<template>
    <div ref="tabs"
         tabindex="0"
         class="outline-0"
         :class="[
             isFilled && 'w-full',
             orientation === 'vertical' && 'flex',

         ]"
         @click.self.prevent="focused = true"
    >
        <nav class="tabs"
             :class="[
                 shape === undefined ? 'tabs-bordered' : (orientation === 'horizontal' ? 'space-x-1' : 'flex-col items-start space-y-1'),
                 alignmentClass,
                 orientationClass,
                 responsiveClass,
                 sizeClass,
             ]"
             aria-label="Tabs"
             role="tablist"
             :aria-orientation="orientation"
        >
            <slot name="tabs">
                <FoTab v-for="tab in tabs"
                       :id="tab.id"
                       :key="tab.id"
                       :size="size"
                       :icon="tab.icon"
                       :is-disabled="tab.isDisabled"
                >
                    <slot :name="tab.id" />
                </FoTab>
            </slot>
        </nav>

        <div :class="orientation === 'horizontal' ? 'mt-3' : 'ms-3'">
            <slot name="contents">
                <FoTabContent v-for="tab in tabs"
                              :key="tab.id"
                              :tab-id="tab.id"
                >
                    <slot :name="`content-${tab.id}`" />
                </FoTabContent>
            </slot>
        </div>
    </div>
</template>

<script setup lang="ts" generic="T extends TabProps">
import type { ComponentName }                                                 from '@/Lib';
import type { TabProps, TabsProps }                                           from '@/UI/Navigations';
import type { Slot }                                                          from 'vue';
import { useFlyonUIVueAppConfig }                                             from '@/Lib';
import { useAlignment }                                                       from '@/Lib/UseAlignment/Internal';
import { useOrientation }                                                     from '@/Lib/UseOrientation/Internal';
import { useResponsitivity }                                                  from '@/Lib/UseResponsitivity/Internal';
import { useSize }                                                            from '@/Lib/UseSize/Internal';
import { useArrayLength }                                                     from '@/Lib/Utils/Internal';
import { FoTab, FoTabContent }                                                from '@/UI/Navigations';
import { activeTabInjectionKey, tabsPropsInjectionKey }                       from '@/UI/Navigations/Tabs/Internal';
import { useArrayEvery, useArrayFindIndex, useFocus, useMagicKeys, whenever } from '@vueuse/core';
import { computed, provide, useTemplateRef, watch }                           from 'vue';

const props = withDefaults(defineProps<TabsProps<T>>(), {
    alignment:    'left',
    orientation:  'horizontal',
    isResponsive: false,
});

defineSlots<
    {
        /** It can contain the tab info such as the name */
        [key: string]: Slot;
    }
    & {
        /** It can contain the tab content info */
        [key: `content-${string}`]: Slot;
    }
    & {
        /** The FoTab components, to be used only if you want to fully customise the tab */
        tabs: Slot;

        /** The FoTabContent components, to be used only if you want to fully customise the tab content */
        contents: Slot;
    }
>();

/** The selected tab */
const activeTab = defineModel<T>({ required: true });

const componentName: ComponentName = 'FoTabs';

const { config } = useFlyonUIVueAppConfig();

provide(activeTabInjectionKey, activeTab);
provide(tabsPropsInjectionKey, computed(() => props));

const [
    alignmentClass,
    orientationClass,
    responsiveClass,
    sizeClass,
] = [
    useAlignment(componentName, () => props.alignment),
    useOrientation(componentName, () => props.orientation),
    useResponsitivity(componentName, () => props.isResponsive),
    useSize(config, componentName, () => props.size),
];

const tabsElement    = useTemplateRef('tabs');
const { focused }    = useFocus(tabsElement);
const activeTabIndex = useArrayFindIndex((): T[] => props.tabs, (tab: T): boolean => tab.id === activeTab.value.id);

const areAllTabsDisabled = useArrayEvery(
    () => props.tabs,
    (tab: T) => tab.isDisabled === true,
);

// todo: check why these can be undefined, as in the docs is not shown
const { arrowLeft, arrowRight, arrowUp, arrowDown } = useMagicKeys({
    passive:      false,
    onEventFired: (e: KeyboardEvent): void => {
        if (focused.value && ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
            e.preventDefault();
        }
    },
});

watch(useArrayLength(() => props.tabs), (length: number) => {
    if (length === 0) {
        throw new Error('No tabs found.');
    }
});

whenever(() => [arrowLeft, arrowRight, arrowUp, arrowDown], () => {
    if (areAllTabsDisabled.value || focused.value === false) {
        return;
    }

    if (props.orientation === 'horizontal') {
        return switchTab(arrowLeft?.value ? -1 : (arrowRight?.value ? 1 : 0));
    }

    return switchTab(arrowUp?.value ? -1 : (arrowDown?.value ? 1 : 0));
}, { deep: true });

function switchTab(delta: 1 | -1 | 0): void {
    if (delta === 0) {
        return;
    }

    const index      = activeTabIndex.value + delta;
    const tabsLength = props.tabs.length;

    const newIndex   = index >= tabsLength ? 0 : (index < 0 ? props.tabs.length - 1 : index);
    let newActiveTab = props.tabs[newIndex];

    if (newActiveTab?.isDisabled) {
        const start = newIndex + delta;

        newActiveTab = props.tabs[findFirstNonDisabledTabIndex(start < 0 || start > tabsLength ? 0 : start)];
    }

    if (newActiveTab === undefined) {
        throw new Error(`Index ${newIndex} not found.`);
    }

    activeTab.value = newActiveTab;
}

function findFirstNonDisabledTabIndex(start: number): number {
    for (let i = start; i < props.tabs.length; i++) {
        if (!props.tabs[i]?.isDisabled) {
            return i;
        }
    }

    for (let i = 0; i < start; i++) {
        if (!props.tabs[i]?.isDisabled) {
            return i;
        }
    }

    throw new Error('No enabled tab exists.');
}
</script>
