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

export function useGlass(hasGlass: MaybeRefOrGetter<boolean>): ComputedRef<'glass' | ''> {
    return useClass(hasGlass, 'glass');
}

export function usePilled(isPilled: MaybeRefOrGetter<boolean>): ComputedRef<'rounded-full' | ''> {
    return useClass(isPilled, 'rounded-full');
}

export function useClass<T extends string>(
    test: MaybeRefOrGetter<boolean>,
    classToUse: MaybeRefOrGetter<T>,
): ComputedRef<T | ''> {
    return computed(() => {
        return toValue(test) ? toValue(classToUse) : '';
    });
}
