import type { ComputedRef, MaybeRefOrGetter } from 'vue';
import { computed, toValue, useId }           from 'vue';

export function useElementId(id: MaybeRefOrGetter<string | undefined>): ComputedRef<string> {
    const vueId = useId();

    return computed(() => toValue(id) ?? vueId);
}
