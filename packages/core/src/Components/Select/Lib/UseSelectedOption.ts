import type { SelectOption }                     from '@/Components/Select';
import type { MaybeRefOrGetter, Ref, UnwrapRef } from 'vue';
import { useIdentifiable }                       from '@/Shared/UseIdentifiable/Internal';
import { toRef }                                 from 'vue';

export function useSelectedOption<T extends number | string = number>(
    options: MaybeRefOrGetter<MaybeRefOrGetter<SelectOption<T>>[]>,
    id: MaybeRefOrGetter<T | null>,
): Ref<UnwrapRef<SelectOption<T> | null>> {
    return toRef(useIdentifiable<'id', T, SelectOption<T>>(options, id, 'id').value);
}
