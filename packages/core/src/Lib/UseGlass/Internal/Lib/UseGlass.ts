import type { ComputedRef, MaybeRefOrGetter } from 'vue';
import { useClass }                           from '@/Lib/UseClass/Internal';

export function useGlass(hasGlass: MaybeRefOrGetter<boolean>): ComputedRef<string> {
    return useClass(hasGlass, 'glass');
}
