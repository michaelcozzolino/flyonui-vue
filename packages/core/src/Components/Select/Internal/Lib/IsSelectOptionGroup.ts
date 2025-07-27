import type { SelectOption, SelectOptionGroup, SelectOptionType } from '@/Components';

export function isSelectOptionGroup<T extends string | number, K extends SelectOption<T>>(
    option: SelectOptionType<T, K>,
): option is SelectOptionGroup<T, K> {
    if ('options' in option === false) {
        return false;
    }

    if (Array.isArray(option.options) === false) {
        return false;
    }

    return true;
}
