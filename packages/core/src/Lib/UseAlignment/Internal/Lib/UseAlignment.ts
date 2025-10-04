import type { AlignableComponentName, Alignment } from '@/Lib/UseAlignment';
import type { ComputedRef, MaybeRefOrGetter }     from 'vue';
import { useElementClass }                        from '@/Lib/UseClass/Internal';

export function useAlignment(
    componentName: MaybeRefOrGetter<AlignableComponentName>,
    alignment: MaybeRefOrGetter<Alignment>,
): ComputedRef<string> {
    return useElementClass<AlignableComponentName, Alignment>(
        componentName,
        {
            FoPagination: {
                left:   '',
                center: 'justify-center',
                right:  'justify-end',
            },
        },
        alignment,
    );
}
