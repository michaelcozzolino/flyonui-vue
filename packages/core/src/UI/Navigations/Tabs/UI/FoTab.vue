<template>
    <FoButton :id="id"
              :data-tab="`#tab-content-${id}`"
              class="tab"
              :class="[
                  isActiveTab && tabsProps.shape === undefined && 'border-primary! text-primary',
                  tabsProps.isFilled && 'w-full',
              ]"
              :color="isActiveTab && tabsProps.shape !== undefined ? 'primary' : undefined"
              :preset="isActiveTab ? undefined : 'text'"
              :shape="tabsProps.shape"
              :icon="icon"
              :aria-controls="`tab-content-${id}`"
              role="tab"
              :aria-selected="isActiveTab"
              :is-disabled="isDisabled"
              @click.prevent="!tabsProps.activateOnHover && (activeTab = { ...props })"
              @mouseover="tabsProps.activateOnHover && (activeTab = { ...props })"
    >
        <slot />
    </FoButton>
</template>

<script setup lang="ts">
import type { TabProps }                                                from '@/UI/Navigations/Tabs/Types/Tabs';
import { useSafeInjection }                                             from '@/Lib/UseSafeInjection/Internal';
import { FoButton }                                                     from '@/UI/Components';
import { activeTabInjectionKey, tabsPropsInjectionKey, useIsActiveTab } from '@/UI/Navigations/Tabs/Internal';

const props = defineProps<TabProps>();

const activeTab = useSafeInjection(activeTabInjectionKey);
const tabsProps = useSafeInjection(tabsPropsInjectionKey);

const isActiveTab = useIsActiveTab(activeTab, () => props.id);
</script>
