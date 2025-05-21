import type { ComponentName }                 from '@/Shared/Utils/Internal';
import type { ComputedRef, MaybeRefOrGetter } from 'vue';
import { computed, toValue }                  from 'vue';

export function useClass(
    test: MaybeRefOrGetter<boolean | undefined>,
    positiveClass: MaybeRefOrGetter<string>,
    negativeClass: MaybeRefOrGetter<string> = '',
    undefinedClass: MaybeRefOrGetter<string> = '',
): ComputedRef<string> {
    return computed(() => {
        const _test = toValue(test);

        if (_test === undefined) {
            return toValue(undefinedClass);
        }

        return _test ? toValue(positiveClass) : toValue(negativeClass);
    });
}

export function useElementClass<T extends ComponentName, K extends string>(
    componentName: MaybeRefOrGetter<T>,
    availableClasses: MaybeRefOrGetter<Record<T, Record<K, string>>>,
    classKey: MaybeRefOrGetter<K>,
): ComputedRef<string> {
    return computed(() => {
        return toValue(availableClasses)[toValue(componentName)][toValue(classKey)];
    });
}
