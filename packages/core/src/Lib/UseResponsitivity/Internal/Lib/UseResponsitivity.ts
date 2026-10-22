import type { ComputedRef, MaybeRefOrGetter } from 'vue';
import type { ResponsiveComponentName }       from '@/Lib';
import { toValue }                            from 'vue';
import { useClass }                           from '@/Lib/UseClass/Internal';

export function useResponsitivity(
    componentName: MaybeRefOrGetter<ResponsiveComponentName>,
    isResponsive: MaybeRefOrGetter<boolean>,
): ComputedRef<string> {
    const classes: Record<ResponsiveComponentName, ComputedRef<string>> = {
        FoButton: useClass(isResponsive, 'max-sm:btn-sm lg:btn-lg'),
        FoJoin:   useClass(isResponsive, 'max-sm:join-vertical'),
        FoTable:  useClass(isResponsive, 'overflow-x-auto'),
        FoTabs:   useClass(isResponsive, 'overflow-x-auto'),
    };

    return classes[toValue(componentName)];
}
