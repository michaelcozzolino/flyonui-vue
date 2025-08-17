import type { ComputedRef, MaybeRefOrGetter } from 'vue';
import { computed, toValue }                  from 'vue';

export function useArrayLength<T>(array: MaybeRefOrGetter<MaybeRefOrGetter<T>[]>): ComputedRef<number> {
    return computed(() => toValue(array).length);
}
