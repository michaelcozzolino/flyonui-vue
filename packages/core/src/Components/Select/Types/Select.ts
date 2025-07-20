import type { LabelType }                from '@/Components/Label';
import type { Shape, Sizable, Validity } from '@/Shared';
import type { Id, MaybeStringId }        from '@/Shared/UseIdentifiable';
import type { Disableable }              from '@/Shared/UseState';

export interface SelectOption<T extends number | string = number> extends Id<T>, Disableable {
    readonly text: string;
}

export interface SelectOptionGroup<T extends number | string = number> {
    label:   string;
    options: SelectOption<T>[];
}

export type SelectOptionType<T extends number | string = number> = SelectOption<T> | SelectOptionGroup<T>;

interface BaseSelectProps<T extends string | number, K extends SelectOptionType<T>> extends MaybeStringId, Disableable, Validity {
    shape?:  Extract<Shape, 'rounded' | 'pilled'>;
    options: K[];
}

export interface SelectProps<T extends string | number = number, K extends SelectOptionType<T> = SelectOption<T>> extends BaseSelectProps<T, K>, Sizable {
    label?: string | {
        text:  string;
        type?: Exclude<LabelType, 'inline'>; // When undefined the label will be a text by default, todo: option
    };
}

export type DatalistOption<T extends number | string> = Omit<SelectOption<T>, 'isDisabled'>;

export interface DatalistProps<T extends string | number = number, K extends DatalistOption<T> = DatalistOption<T>> extends BaseSelectProps<T, K> {
    label?:       string;
    placeholder?: string;
}
