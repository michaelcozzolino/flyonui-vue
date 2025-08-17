import type { BorderableComponentName }       from '@/Lib';
import type { ComputedRef, MaybeRefOrGetter } from 'vue';
import { useClass }                           from '@/Lib/UseClass/Internal';
import { toValue }                            from 'vue';

export function useBorder(
    componentName: MaybeRefOrGetter<BorderableComponentName>,
    isBordered: MaybeRefOrGetter<boolean | undefined>,
): ComputedRef<string> {
    const classes: Record<BorderableComponentName, ComputedRef<string>> = {
        FoStats: useClass(isBordered, 'stats-border shadow-none'),
        FoTable: useClass(isBordered, 'border border-base-content/25', 'table-borderless'),
    };

    return classes[toValue(componentName)];
}
