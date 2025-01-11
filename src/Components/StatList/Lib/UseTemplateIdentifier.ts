import { computed, type ComputedRef, type MaybeRefOrGetter, toValue } from 'vue';

export function useTemplateIdentifier(identifier: MaybeRefOrGetter<'image'>, id: MaybeRefOrGetter<number>): ComputedRef<string> {
    return computed(() => {
        return `${toValue(identifier)}-${toValue(id)}`;
    });
}
