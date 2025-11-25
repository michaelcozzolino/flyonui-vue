import type { TabProps }                                from '@/UI/Navigations';
import type { ComputedRef, MaybeRefOrGetter, ModelRef } from 'vue';
import { computed, toValue }                            from 'vue';

export function useIsActiveTab(activeTab: ModelRef<TabProps>, tabId: MaybeRefOrGetter<string>): ComputedRef<boolean> {
    return computed((): boolean => activeTab.value.id === toValue(tabId));
}
