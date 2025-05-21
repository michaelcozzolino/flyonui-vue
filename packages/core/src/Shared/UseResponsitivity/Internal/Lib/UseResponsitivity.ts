import type { ResponsiveComponentName }       from '@/Shared/UseResponsitivity';
import type { ComputedRef, MaybeRefOrGetter } from 'vue';
import { useClass }                           from '@/Shared/UseClass/Internal';
import { toValue }                            from 'vue';

export function useResponsitivity(
    elementName: MaybeRefOrGetter<ResponsiveComponentName>,
    isResponsive: MaybeRefOrGetter<boolean>,
): ComputedRef<string> {
    const classes: Record<ResponsiveComponentName, ComputedRef<string>> = {
        FoButton: useClass(isResponsive, 'max-sm:btn-sm lg:btn-lg'),
        FoJoin:   useClass(isResponsive, 'max-sm:join-vertical'),
    };

    return classes[toValue(elementName)];
}
