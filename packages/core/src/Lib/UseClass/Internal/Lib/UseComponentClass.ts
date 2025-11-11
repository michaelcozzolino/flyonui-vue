import type { ComponentName }                 from '@/Lib';
import type { ComputedRef, MaybeRefOrGetter } from 'vue';
import { computed, toValue }                  from 'vue';

export function useComponentClass<T extends ComponentName, K extends string>(
    componentName: MaybeRefOrGetter<T>,
    availableClasses: MaybeRefOrGetter<Record<T, Record<K, string>>>,
    classKey: MaybeRefOrGetter<K>,
): ComputedRef<string> {
    return computed(() => {
        return toValue(availableClasses)[toValue(componentName)][toValue(classKey)];
    });
}
