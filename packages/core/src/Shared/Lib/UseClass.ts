import type { BorderableElementName }                                 from '@/Shared/Types/Variants';
import { computed, type ComputedRef, type MaybeRefOrGetter, toValue } from 'vue';

export function useBorder(
    elementName: MaybeRefOrGetter<BorderableElementName>,
    isBordered: MaybeRefOrGetter<boolean>,
): ComputedRef<string> {
    const availableClasses = {
        'stat-list': 'border border-base-content/10 shadow-none',
    };

    return useClass(isBordered, availableClasses[toValue(elementName)]);
}

export function useGlass(hasGlass: MaybeRefOrGetter<boolean>): ComputedRef<string> {
    return useClass(hasGlass, 'glass');
}

export function useValidity(isValid: MaybeRefOrGetter<boolean | undefined>): ComputedRef<string> {
    return useClass(isValid, 'is-valid', 'is-invalid');
}

export function useRoundedBox(isRounded: MaybeRefOrGetter<boolean>): ComputedRef<string> {
    return useClass(isRounded, 'rounded-box');
}

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
