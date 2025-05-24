import type { ComputedRef, MaybeRefOrGetter } from 'vue';
import { useClass }                           from '@/Shared/UseClass/Internal';

export function useJoinItem(isInJoin: MaybeRefOrGetter<boolean>): ComputedRef<string> {
    return useClass(isInJoin, 'join-item');
}
