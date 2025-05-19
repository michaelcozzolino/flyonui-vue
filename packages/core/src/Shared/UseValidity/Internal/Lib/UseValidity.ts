import type { ComputedRef, MaybeRefOrGetter } from 'vue';
import { useClass }                           from '@/Shared/Internal';

export function useValidity(isValid: MaybeRefOrGetter<boolean | undefined>): ComputedRef<string> {
    return useClass(isValid, 'is-valid', 'is-invalid');
}
