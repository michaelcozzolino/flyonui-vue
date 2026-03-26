import type { TailwindAnimation }             from '@/Lib/UseTailwindAnimation/Types';
import type { ComputedRef, MaybeRefOrGetter } from 'vue';
import { computed, toValue }                  from 'vue';

export function useTailwindAnimation(animation: MaybeRefOrGetter<TailwindAnimation>): ComputedRef<string> {
    return computed((): string => {
        const animations: Record<TailwindAnimation, string> = {
            none:   'animate-none',
            bounce: 'animate-bounce',
            spin:   'animate-spin',
            ping:   'animate-ping',
            pulse:  'animate-pulse',
        };

        return animations[toValue(animation)];
    });
}
