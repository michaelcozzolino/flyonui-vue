import type { ComputedRef, useAttrs } from 'vue';
import { reactiveOmit }               from '@vueuse/core';
import { computed   }                 from 'vue';

export function useListeners(attrs: ReturnType<typeof useAttrs>): ComputedRef<Record<string, unknown>> {
    return computed((): Record<string, unknown> => {
        const events = reactiveOmit(attrs, (_value, key) => !key.toString().startsWith('on'));

        const listeners: Record<string, unknown> = {};

        for (const [event, listener] of Object.entries(events)) {
            listeners[event.slice(2).toLowerCase()] = listener;
        }

        return listeners;
    });
}
