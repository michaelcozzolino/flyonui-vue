import type { ComputedRef, MaybeRefOrGetter } from 'vue';
import { useClass }                           from '@/Shared/UseClass/Internal';

export function useVisuallyHidden(isHidden: MaybeRefOrGetter<boolean>): ComputedRef<string> {
    return useClass(isHidden, 'sr-only');
}
