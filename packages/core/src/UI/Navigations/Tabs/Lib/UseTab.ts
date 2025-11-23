import type { TabProps }                      from '@/UI/Navigations';
import type { ComputedRef, MaybeRefOrGetter } from 'vue';
import { computed, toValue }                  from 'vue';

// todo: add to docs
export function useTab(tabs: MaybeRefOrGetter<MaybeRefOrGetter<TabProps>[]>, index: MaybeRefOrGetter<number>): ComputedRef<TabProps> {
    return computed((): TabProps => {
        const _index = toValue(index);

        const tab = toValue(tabs).at(_index);

        if (tab === undefined) {
            throw new Error(`tab at index ${_index} not found`);
        }

        return toValue(tab);
    });
}
