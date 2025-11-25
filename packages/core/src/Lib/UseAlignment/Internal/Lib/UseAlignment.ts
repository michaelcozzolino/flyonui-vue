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
            FoPagination: standardAlignmentClasses,
            FoTabs:       standardAlignmentClasses,
        },
        alignment,
    );
}
