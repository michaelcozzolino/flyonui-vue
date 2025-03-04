import type { Identifiable }                                          from '@/Shared/Types';
import { useArrayFind }                                               from '@vueuse/core';
import { computed, type ComputedRef, type MaybeRefOrGetter, toValue } from 'vue';

export function useIdentifiable<
    Name extends string = 'id',
    Value extends number | string = number,
    T extends Identifiable<Name, Value> = Identifiable<Name, Value>,
>(
    identifiables: MaybeRefOrGetter<MaybeRefOrGetter<T>[]>,
    id: MaybeRefOrGetter<Value | null>,
    key: MaybeRefOrGetter<Name>,
): ComputedRef<T | null> {
    return computed(() => {
        const _id = toValue(id);

        if (_id === null) {
            return null;
        }

        return useArrayFind<T>(
            identifiables,
            (identifiable: Identifiable<Name, Value>) => identifiable[toValue(key)] === _id,
        ).value ?? null;
    });
}
