import type { SelectOption } from '@/UI/Forms';

export interface SelectOptionProps<T extends string | number> {
    option: SelectOption<T>;

    /**
     * When true the option will automatically be used as text and not as object.
     * The main case for this is the datalist
     */
    valueAsText?: boolean;
}
