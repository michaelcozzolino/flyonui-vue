import type { SelectOption, SelectOptionType }                 from '@/Components/Select';
import type { MaybeRefOrGetter, Ref, UnwrapRef }               from 'vue';
import { isSelectOptionGroup }                                 from '@/Components/Select/Internal';
import { useIdentifiable }                                     from '@/Shared/UseIdentifiable/Internal';
import { isReadonly, isRef, ref, toValue, watch, watchEffect } from 'vue';

export function useSelectedOption<T extends number | string, K extends SelectOption<T>>(
    options: MaybeRefOrGetter<MaybeRefOrGetter<SelectOptionType<T, K>>[]>,
    id: MaybeRefOrGetter<T | null>,
): Ref<K | null>;

export function useSelectedOption<T extends number | string, K extends SelectOption<T>>(
    options: MaybeRefOrGetter<MaybeRefOrGetter<SelectOptionType<T, K>>[]>,
    id: MaybeRefOrGetter<T>,
    allowNull: false,
): Ref<K>;

/**
 * Retrieves the select option of a select field.
 *
 * @param options
 * @param id The initial id of the option to retrieve, if it is a writable ref, the id will automatically be
 *           overridden with the selected option id when a new one is selected.
 * @param allowNull true if there can be a non-selected option, false otherwise.
 */
export function useSelectedOption<T extends number | string, K extends SelectOption<T>>(
    options: MaybeRefOrGetter<MaybeRefOrGetter<SelectOptionType<T, K>>[]>,
    id: MaybeRefOrGetter<T | null> | MaybeRefOrGetter<T>,
    allowNull: boolean = true,
): Ref<K | null> | Ref<K> {
    return isNullAllowed(id, allowNull)
        ? useSelectedNullableOption(options, id)
        : useSelectedNonNullableOption(options, id);
}

export function useSelectedNullableOption<T extends number | string, K extends SelectOption<T>>(
    options: MaybeRefOrGetter<MaybeRefOrGetter<SelectOptionType<T, K>>[]>,
    id: MaybeRefOrGetter<T | null>,
): Ref<K | null> {
    const flatOptions = getFlatOptions(options);

    const selectedOption = useIdentifiable<'id', T, K>(flatOptions, id, 'id');

    const option = ref<K | null>(null);

    watch(selectedOption, () => option.value = selectedOption.value, { immediate: true });

    watchEffect(() => {
        if (isReadonly(id) === false && isRef(id)) {
            (id as Ref<T | null>).value = option.value?.id ?? null;
        }
    });

    return option as Ref<K | null>;
}

export function useSelectedNonNullableOption<T extends number | string, K extends SelectOption<T>>(
    options: MaybeRefOrGetter<MaybeRefOrGetter<SelectOptionType<T, K>>[]>,
    id: MaybeRefOrGetter<T>,
): Ref<K> {
    const flatOptions = getFlatOptions(options);

    const selectedOption = useIdentifiable<'id', T, K>(flatOptions, id, 'id');

    const option = ref<K | null>(null);

    watch(
        selectedOption,
        () => {
            option.value = getSelectedOptionIfExists(id, selectedOption).value;
        },
        { immediate: true },
    );

    watchEffect(() => {
        if (isReadonly(id) === false && isRef(id)) {
            (id as Ref<UnwrapRef<T>>).value = getSelectedOptionIfExists(id, option).value.id;
        }
    });

    return getSelectedOptionIfExists(id, option) as Ref<K>;
}

function isNullAllowed<T extends number | string>(
    id: MaybeRefOrGetter<T | null> | MaybeRefOrGetter<T>,
    allowNull: boolean,
): id is MaybeRefOrGetter<T | null> {
    return allowNull;
}

function guardAgainstNonExistingSelectedOption<T extends string | number>(
    id: MaybeRefOrGetter<T>,
    selectedOption: Ref<SelectOption<T> | null>,
): asserts selectedOption is Ref<SelectOption<T>> {
    if (selectedOption.value === null) {
        throw new Error(`Selected option ${toValue(id)} does not exist.`);
    }
}

function getSelectedOptionIfExists<T extends string | number, K extends SelectOption<T>>(
    id: MaybeRefOrGetter<T>,
    selectedOption: Ref<K | null>,
): Ref<K> {
    guardAgainstNonExistingSelectedOption(id, selectedOption);

    return selectedOption;
}

function getFlatOptions<T extends number | string, K extends SelectOption<T>>(
    options: MaybeRefOrGetter<MaybeRefOrGetter<SelectOptionType<T, K>>[]>,
): K[] {
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
}
