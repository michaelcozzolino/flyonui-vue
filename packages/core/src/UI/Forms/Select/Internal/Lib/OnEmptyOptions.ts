import type { MaybeRefOrGetter }               from 'vue';
import type { SelectOption, SelectOptionType } from '@/UI/Forms';
import { watch }                               from 'vue';
import { useArrayLength }                      from '@/Lib/Utils/Internal';

export function onEmptyOptions<T extends number | string, K extends SelectOption<T>>(
    options: MaybeRefOrGetter<MaybeRefOrGetter<SelectOptionType<T, K>>[]>,
): void {
    watch(useArrayLength(options), (length) => {
        if (length === 0) {
            throw new Error('No options found.');
        }
    }, { immediate: true });
}
