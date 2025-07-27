import type { SelectOption, SelectOptionType } from '@/Components';
import type { MaybeRefOrGetter }               from 'vue';
import { useArrayLength }                      from '@/Shared/Utils/Internal';
import { watch }                               from 'vue';

export function onEmptyOptions<T extends number | string, K extends SelectOption<T>>(
    options: MaybeRefOrGetter<MaybeRefOrGetter<SelectOptionType<T, K>>[]>,
): void {
    watch(useArrayLength(options), (length) => {
        if (length === 0) {
            throw new Error('No options found.');
        }
    }, { immediate: true });
}
