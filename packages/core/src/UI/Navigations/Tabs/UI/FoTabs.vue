<template>
    <div ref="tabs"
         tabindex="0"
         class="outline-0"
         :class="[
             isFilled && 'w-full',
             orientation === 'vertical' && 'flex',

         ]"
         @click.prevent="focused = true"
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
                {{ useRequiredSlotMessage(componentName, '', 'tabs') }}
            </slot>
        </nav>

        <div :class="orientation === 'horizontal' ? 'mt-3' : 'ms-3'">
            <slot name="contents">
                {{ useRequiredSlotMessage(componentName, '', 'contents') }}
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
import { useArrayLength, useRequiredSlotMessage }                             from '@/Lib/Utils/Internal';
import { activeTabInjectionKey, tabsPropsInjectionKey }                       from '@/UI/Navigations/Tabs/Internal';
import { useArrayEvery, useArrayFindIndex, useFocus, useMagicKeys, whenever } from '@vueuse/core';
import { computed, provide, useTemplateRef, watch }                           from 'vue';

const props = withDefaults(defineProps<TabsProps<T>>(), {
    alignment:    'left',
    orientation:  'horizontal',
    isResponsive: false,
});

defineSlots<{
    /** The FoTab components */
    tabs: Slot;

    /** The FoTabContent components */
    contents: Slot;
}>();

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

    const newIndex     = index >= tabsLength ? 0 : (index < 0 ? props.tabs.length - 1 : index);
    const newActiveTab = props.tabs[newIndex];

    if (newActiveTab === undefined) {
        throw new Error(`Index ${newIndex} not found.`);
    }

    // todo: disabled tabs cannot be selected with the keyboard

    activeTab.value = newActiveTab;
}
</script>
