import type { ComputedRef, MaybeRefOrGetter } from 'vue';
import type { BorderableComponentName }       from '@/Lib';
import { toValue }                            from 'vue';
import { useClass }                           from '@/Lib/UseClass/Internal';

export function useBorder(
    componentName: MaybeRefOrGetter<BorderableComponentName>,
    isBordered: MaybeRefOrGetter<boolean | undefined>,
): ComputedRef<string> {
    const browserComponentsClass = useClass(isBordered, 'border border-neutral/30');

    const classes: Record<BorderableComponentName, ComputedRef<string>> = {
        FoBrowser:           browserComponentsClass,
        FoBrowserToolbarURL: browserComponentsClass,
        FoStats:             useClass(isBordered, 'stats-border shadow-none'),
        FoTable:             useClass(isBordered, 'border border-base-content/25', 'table-borderless'),
    };

    return classes[toValue(componentName)];
}
