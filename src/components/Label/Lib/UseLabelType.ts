import type { LabelType }                     from '@/components/Label/Types/Label';
import type { LabellableElementName }         from '@/Shared/Types/Variants';
import type { ComputedRef, MaybeRefOrGetter } from 'vue';
import { useElementClass }                    from '@/Shared/Lib/UseElementClass';

export function useLabelType(
    elementName: MaybeRefOrGetter<LabellableElementName>,
    labelType: MaybeRefOrGetter<LabelType>,
): ComputedRef<string> {
    return useElementClass<LabellableElementName, LabelType>(
        elementName,
        {
            input: {
                text:     '',
                filled:   'input-filled',
                floating: 'input-floating',
            },
            select: {
                text:     '',
                filled:   'select-filled',
                floating: 'select-floating',
            },
        },
        labelType,
    );
}
