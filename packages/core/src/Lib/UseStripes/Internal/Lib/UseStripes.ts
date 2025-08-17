import type { StripedComponentName } from '@/Lib';

import type { ComputedRef, MaybeRefOrGetter } from 'vue';
import { useClass }                           from '@/Lib/UseClass/Internal';
import { toValue }                            from 'vue';

export function useStripes(
    elementName: MaybeRefOrGetter<StripedComponentName>,
    isStriped: MaybeRefOrGetter<boolean>,
): ComputedRef<string> {
    const classes: Record<StripedComponentName, ComputedRef<string>> = {
        FoListGroup:     useClass(isStriped, '*:odd:bg-base-200'),
        FoListGroupItem: useClass(isStriped, 'bg-base-200'),
    };

    return classes[toValue(elementName)];
}
