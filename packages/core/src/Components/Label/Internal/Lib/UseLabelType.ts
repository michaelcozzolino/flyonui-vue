import type { LabelType }                     from '@/Components/Label';
import type { LabellableTypeElementName }     from '@/Shared/Types/Variants';
import type { ComputedRef, MaybeRefOrGetter } from 'vue';
import { useElementClass }                    from '@/Shared/Internal/Lib/UseElementClass';

export function useLabelType(
    elementName: MaybeRefOrGetter<LabellableTypeElementName>,
    labelType: MaybeRefOrGetter<LabelType>,
): ComputedRef<string> {
    return useElementClass<LabellableTypeElementName, LabelType>(
        elementName,
        {
            'input-text': {
                text:     '',
                filled:   'input-filled peer',
                floating: 'input-floating peer',
                inline:   'grow',
            },
            'select': {
                text:     '',
                filled:   'select-filled',
                floating: 'select-floating',
                inline:   '',
            },
            'textarea': {
                text:     '',
                filled:   'textarea-filled peer',
                floating: 'textarea-floating peer',
                inline:   '',
            },
        },
        labelType,
    );
}
