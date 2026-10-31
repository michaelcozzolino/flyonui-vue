import type { ComputedRef, MaybeRefOrGetter } from 'vue';
import type { PaginationShape }               from '@/UI/Navigations';
import { toValue }                            from 'vue';
import { useClass }                           from '@/Lib/UseClass/Internal';

export function useRoundedNone(shape: MaybeRefOrGetter<PaginationShape>): ComputedRef<string> {
    return useClass((): boolean => toValue(shape) === 'square', 'rounded-none');
}
