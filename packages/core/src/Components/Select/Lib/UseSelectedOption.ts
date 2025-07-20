import type { SelectOption, SelectOptionType }            from '@/Components/Select';
import type { MaybeRefOrGetter, Ref, UnwrapRef }          from 'vue';
import { isSelectOptionGroup }                            from '@/Components/Select/Internal';
import { useIdentifiable }                                from '@/Shared/UseIdentifiable/Internal';
import { isReadonly, isRef, toRef, toValue, watchEffect } from 'vue';

type UseSelectedOptionReturn<T extends number | string> = Ref<UnwrapRef<SelectOption<T> | null>>;

/**
 * Retrieves the select option of a select field.
 *
 * @param options
 * @param id The initial id of the option to retrieve, if it is a writable ref, the id will automatically be
 *           overridden with the selected option id when a new one is selected.
 * @return UseSelectedOptionReturn<T>
 */
export function useSelectedOption<T extends number | string = number>(
    options: MaybeRefOrGetter<MaybeRefOrGetter<SelectOptionType<T>>[]>,
    id: MaybeRefOrGetter<T | null>,
): UseSelectedOptionReturn<T> {
    const maybeGroupedOptions = toValue(options).map(toValue);

    let flatOptions: SelectOption<T>[] = [];

    for (const maybeGroupedOption of maybeGroupedOptions) {
        if (isSelectOptionGroup(maybeGroupedOption)) {
            flatOptions = flatOptions.concat(maybeGroupedOption.options);
        } else {
            flatOptions.push(maybeGroupedOption);
        }
    }

    const selectedOption = toRef(useIdentifiable<'id', T, SelectOption<T>>(flatOptions, id, 'id').value);

    // todo: this behaviour should be documented
    watchEffect(() => {
        if (isReadonly(id) === false && isRef(id)) {
            (id as Ref<T | null>).value = (selectedOption.value?.id ?? null) as T | null;
        }
    });

    return selectedOption;
}
