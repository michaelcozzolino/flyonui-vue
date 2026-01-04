import type { ComputedRef, useAttrs } from 'vue';
import { reactiveOmit }               from '@vueuse/core';
import { computed   }                 from 'vue';

export function useNativeAttributes(attrs: ReturnType<typeof useAttrs>): ComputedRef<ReturnType<typeof useAttrs>> {
    return computed((): ReturnType<typeof useAttrs> => {
        const omittableKeys: string[] = ['class', 'style', 'disabled', 'readonly'];

        return reactiveOmit(
            attrs,
            (_value, key) => omittableKeys.includes(key) || key.toString().startsWith('on'),
        );
    });
}
