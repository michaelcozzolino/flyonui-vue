import type { BorderableElementName, ResponsiveElementName, StripedElementName } from '@/Shared/Types/Variants';
import type { ComputedRef, MaybeRefOrGetter }                                    from 'vue';
import { computed, toValue }                                                     from 'vue';

export function useBorder(
    elementName: MaybeRefOrGetter<BorderableElementName>,
    isBordered: MaybeRefOrGetter<boolean>,
): ComputedRef<string> {
    const availableClasses = {
        'stat-list': 'stats-border shadow-none',
    };

    return useClass(isBordered, availableClasses[toValue(elementName)]);
}

export function useGlass(hasGlass: MaybeRefOrGetter<boolean>): ComputedRef<string> {
    return useClass(hasGlass, 'glass');
}

export function useJoinItem(isInJoin: MaybeRefOrGetter<boolean>): ComputedRef<string> {
    return useClass(isInJoin, 'join-item');
}

export function useValidity(isValid: MaybeRefOrGetter<boolean | undefined>): ComputedRef<string> {
    return useClass(isValid, 'is-valid', 'is-invalid');
}

export function useRoundedBox(isRounded: MaybeRefOrGetter<boolean>): ComputedRef<string> {
    return useClass(isRounded, 'rounded-box');
}

export function useResponsive(
    elementName: MaybeRefOrGetter<ResponsiveElementName>,
    isResponsive: MaybeRefOrGetter<boolean>,
): ComputedRef<string> {
    const classes: Record<ResponsiveElementName, ComputedRef<string>> = {
        btn:  useClass(isResponsive, 'max-sm:btn-sm lg:btn-lg'),
        join: useClass(isResponsive, 'max-sm:join-vertical'),
    };

    return classes[toValue(elementName)];
}

export function useStripes(
    elementName: MaybeRefOrGetter<StripedElementName>,
    isStriped: MaybeRefOrGetter<boolean>,
): ComputedRef<string> {
    const classes: Record<StripedElementName, ComputedRef<string>> = {
        'list-group':      useClass(isStriped, '*:odd:bg-base-200'),
        'list-group-item': useClass(isStriped, 'bg-base-200'),
    };

    return classes[toValue(elementName)];
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
