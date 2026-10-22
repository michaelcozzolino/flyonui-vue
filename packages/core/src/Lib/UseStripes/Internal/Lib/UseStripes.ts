import type { ComputedRef, MaybeRefOrGetter } from 'vue';

import type { StripedComponentName } from '@/Lib';
import { toValue }                   from 'vue';
import { useClass }                  from '@/Lib/UseClass/Internal';

export function useStripes(
    elementName: MaybeRefOrGetter<StripedComponentName>,
    isStriped: MaybeRefOrGetter<boolean>,
): ComputedRef<string> {
    const classes: Record<StripedComponentName, ComputedRef<string>> = {
        FoListGroup:     useClass(isStriped, '*:odd:bg-base-200'),
        FoListGroupItem: useClass(isStriped, 'bg-base-200'),
        FoSkeleton:      useClass(isStriped, 'skeleton-striped border-base-content/20 rounded-box border'),
    };

    return classes[toValue(elementName)];
}
