<template>
    <div :id="`tab-content-${tabId}`"
         :class="[isActiveTab === false && 'hidden', textSizeClass]"
         role="tabpanel"
         :aria-labelledby="tabId"
    >
        <slot />
    </div>
</template>

<script setup lang="ts">
import type { TabContentProps }                                         from '@/UI/Navigations/Tabs/Types/Tabs';
import { useFlyonUIVueAppConfig }                                       from '@/Lib';
import { useFlyonUIVueAppConfigProperty }                               from '@/Lib/UseFlyonUIVueAppConfig/Internal';
import { useSafeInjection }                                             from '@/Lib/UseSafeInjection/Internal';
import { activeTabInjectionKey, tabsPropsInjectionKey, useIsActiveTab } from '@/UI/Navigations/Tabs/Internal';
import { computed }                                                     from 'vue';

const props = defineProps<TabContentProps>();

const { config } = useFlyonUIVueAppConfig();

const activeTab = useSafeInjection(activeTabInjectionKey);
const tabsProps = useSafeInjection(tabsPropsInjectionKey);

const isActiveTab = useIsActiveTab(activeTab, () => props.tabId);

const textSizeClass = computed((): string => ({
    extraSmall: 'text-sm',
    small:      'text-sm',
    medium:     'text-lg',
    large:      'text-lg',
    extraLarge: 'text-lg',
}[useFlyonUIVueAppConfigProperty(config, 'FoTabs', 'size', () => tabsProps.value.size).value]));
</script>
