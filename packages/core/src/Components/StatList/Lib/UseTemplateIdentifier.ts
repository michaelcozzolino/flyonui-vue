import type { ComputedRef, MaybeRefOrGetter } from 'vue';
import { computed, toValue }                  from 'vue';

export function useTemplateIdentifier(identifier: MaybeRefOrGetter<'image'>, id: MaybeRefOrGetter<number>): ComputedRef<string> {
    return computed(() => {
        return `${toValue(identifier)}-${toValue(id)}`;
    });
}
