import type { ComputedRef, MaybeRefOrGetter, ModelRef } from 'vue';
import type { TabProps }                                from '@/UI/Navigations';
import { computed, toValue }                            from 'vue';

export function useIsActiveTab(activeTab: ModelRef<TabProps>, tabId: MaybeRefOrGetter<string>): ComputedRef<boolean> {
    return computed((): boolean => activeTab.value.id === toValue(tabId));
}
