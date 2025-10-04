import type { PaginationShape }               from '@/UI/Navigations';
import type { ComputedRef, MaybeRefOrGetter } from 'vue';
import { useClass }                           from '@/Lib/UseClass/Internal';
import { toValue }                            from 'vue';

export function useRoundedNone(shape: MaybeRefOrGetter<PaginationShape>): ComputedRef<string> {
    return useClass(() => toValue(shape) === 'square', 'rounded-none');
}
