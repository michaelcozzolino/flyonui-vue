import type { AlignableComponentName, Alignment } from '@/Lib/UseAlignment';
import type { ComputedRef, MaybeRefOrGetter }     from 'vue';
import { useComponentClass }                      from '@/Lib/UseClass/Internal';

export function useAlignment(
    componentName: MaybeRefOrGetter<AlignableComponentName>,
    alignment: MaybeRefOrGetter<Alignment>,
): ComputedRef<string> {
    const standardAlignmentClasses: Record<Alignment, string> = {
        left:   '',
        center: 'justify-center',
        right:  'justify-end',
    };

    return useComponentClass<AlignableComponentName, Alignment>(
        componentName,
        {
            FoBlockQuote: {
                left:   '',
                center: 'mx-auto text-center',
                right:  'ms-auto text-end',
            },
            FoDivider: {
                left:   'divider-start',
                center: '',
                right:  'divider-end',
            },
            FoPagination: standardAlignmentClasses,
            FoTabs:       standardAlignmentClasses,
        },
        alignment,
    );
}
