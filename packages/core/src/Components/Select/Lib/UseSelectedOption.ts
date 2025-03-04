import type { SelectOption }                  from '@/Components/Select';
import type { ComputedRef, MaybeRefOrGetter } from 'vue';
import { useIdentifiable }                    from '@/Shared/Identifiable/Lib';

export function useSelectedOption<T extends number | string = number>(
    options: MaybeRefOrGetter<MaybeRefOrGetter<SelectOption<T>>[]>,
    id: MaybeRefOrGetter<T | null>,
): ComputedRef<SelectOption<T> | null> {
    return useIdentifiable<'id', T, SelectOption<T>>(options, id, 'id');
}
