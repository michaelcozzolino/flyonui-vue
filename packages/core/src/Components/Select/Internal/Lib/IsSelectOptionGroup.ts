import type { SelectOptionGroup, SelectOptionType } from '@/Components';

export function isSelectOptionGroup<T extends string | number>(
    option: SelectOptionType<T>,
): option is SelectOptionGroup<T> {
    if ('options' in option === false) {
        return false;
    }

    if (Array.isArray(option.options) === false) {
        return false;
    }

    return true;
}
