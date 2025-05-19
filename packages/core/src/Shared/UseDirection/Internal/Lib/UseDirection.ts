import type { FlyonUIVueAppDefaultConfig }         from '@/Configuration/CreateFlyonUIVueApp';
import type { Direction }                          from '@/Shared/UseDirection';
import type { ComputedRef, MaybeRefOrGetter, Ref } from 'vue';
import { computed, toValue }                       from 'vue';

// todo: use with all the components and globally as well, check if there is a way to avoid redundancy
export function useDirection(
    config: Ref<FlyonUIVueAppDefaultConfig>,
    direction: MaybeRefOrGetter<Direction | undefined>,
): ComputedRef<string> {
    return computed(() => {
        const { global } = config.value;

        return toValue(direction) ?? global.direction;
    });
}
