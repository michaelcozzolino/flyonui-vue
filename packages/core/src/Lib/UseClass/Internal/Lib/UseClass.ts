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
