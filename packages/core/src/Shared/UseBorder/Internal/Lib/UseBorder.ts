import type { BorderableComponentName }       from '@/Shared/UseBorder';
import type { ComputedRef, MaybeRefOrGetter } from 'vue';
import { useClass }                           from '@/Shared/UseClass/Internal';
import { toValue }                            from 'vue';

export function useBorder(
    componentName: MaybeRefOrGetter<BorderableComponentName>,
    isBordered: MaybeRefOrGetter<boolean>,
): ComputedRef<string> {
    const availableClasses: Record<BorderableComponentName, string> = {
        FoStats: 'stats-border shadow-none',
    };

    return useClass(isBordered, availableClasses[toValue(componentName)]);
}
