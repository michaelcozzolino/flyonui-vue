import type { ComputedRef, MaybeRefOrGetter } from 'vue';
import { useClass }                           from '@/Lib/UseClass/Internal';

export function useJoinItem(isInJoin: MaybeRefOrGetter<boolean>): ComputedRef<string> {
    return useClass(isInJoin, 'join-item');
}
