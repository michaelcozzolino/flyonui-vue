import type { SelectOption, SelectOptionType }                                from '@/UI/Forms/Select';
import type { ComputedRef, MaybeRefOrGetter, Ref }                            from 'vue';
import { useIdentifiable }                                                    from '@/Lib/UseIdentifiable/Internal';
import { isSelectOptionGroup }                                                from '@/UI/Forms/Select/Internal';
import { computed, isReadonly, isRef, ref, toValue, watch, watchEffect      } from 'vue';

/**
 * Retrieves the select option of a select field.
 *
 * Inferred behavior:
 * - If T includes `null` (e.g., Ref<number | null>), returns Ref<K | null>.
 * - If T excludes `null` (e.g., Ref<number>), returns Ref<K> and throws if the id doesn't exist.
 *
 * @param options
 * @param id The id of the option to retrieve; if it is a writable ref, it will be kept in sync
 *           with the selected option id when a new one is selected.
 */
export function useSelectedOption<
    T extends number | string | null,
    K extends SelectOption<NonNullable<T>>,
>(
    options: MaybeRefOrGetter<MaybeRefOrGetter<SelectOptionType<NonNullable<T>, K>>[]>,
    id: MaybeRefOrGetter<T>,
): null extends T ? Ref<K | null> : Ref<K> {
    const flatOptions = getFlatOptions<NonNullable<T>, K>(options);

    const selectedOption = useIdentifiable<'id', NonNullable<T>, K>(
        flatOptions,
        id as MaybeRefOrGetter<NonNullable<T> | null>,
        'id',
    );

    const option = ref<K | null>(null);

    watch(
        selectedOption,
        () => {
            // Non-nullable usage: id != null but option not found -> throw
            if (selectedOption.value === null && toValue(id) !== null) {
                throw new Error(`Selected option ${toValue(id)} does not exist.`);
            }

            option.value = selectedOption.value;
        },
        { immediate: true },
    );

    watchEffect(() => {
        if (isReadonly(id) === false && isRef(id)) {
            (id as Ref<NonNullable<T> | null>).value = option.value?.id ?? null;
        }
    });

    return option as unknown as (null extends T ? Ref<K | null> : Ref<K>);
}

function getFlatOptions<T extends number | string, K extends SelectOption<T>>(
    options: MaybeRefOrGetter<MaybeRefOrGetter<SelectOptionType<T, K>>[]>,
): ComputedRef<K[]> {
    return computed(() => {
        const maybeGroupedOptions = toValue(options).map(toValue);

        let flatOptions: K[] = [];

        for (const maybeGroupedOption of maybeGroupedOptions) {
            if (isSelectOptionGroup(maybeGroupedOption)) {
                flatOptions = flatOptions.concat(maybeGroupedOption.options);
            } else {
                flatOptions.push(maybeGroupedOption);
            }
        }

        return flatOptions;
    });
}
