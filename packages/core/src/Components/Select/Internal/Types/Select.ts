import type { SelectOption } from '@/Components';

export interface SelectOptionProps<T extends string | number> {
    option:       SelectOption<T>;
    valueAsText?: boolean;
}
