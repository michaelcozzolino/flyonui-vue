import type { LabelType }                     from '@/Components/Label/Types/Label';
import type { LabellableTypeElementName }     from '@/Shared/Types/Variants';
import type { ComputedRef, MaybeRefOrGetter } from 'vue';
import { useElementClass }                    from '@/Shared/Lib/UseElementClass';

export function useLabelType(
    elementName: MaybeRefOrGetter<LabellableTypeElementName>,
    labelType: MaybeRefOrGetter<LabelType>,
): ComputedRef<string> {
    return useElementClass<LabellableTypeElementName, LabelType>(
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
