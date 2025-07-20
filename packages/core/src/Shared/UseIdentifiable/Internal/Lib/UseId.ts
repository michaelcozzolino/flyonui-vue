import type { ComputedRef, MaybeRefOrGetter }   from 'vue';
import { computed, toValue, useId as useIdVue } from 'vue';

export function useId(id: MaybeRefOrGetter<string | undefined>): ComputedRef<string> {
    const vueId = useIdVue();

    return computed(() => toValue(id) ?? vueId);
}
