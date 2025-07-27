import type { InputLabel, LabelType }    from '@/Components/Label';
import type { Shape, Sizable, Validity } from '@/Shared';
import type { Id, MaybeStringId }        from '@/Shared/UseIdentifiable';
import type { Disableable }              from '@/Shared/UseState';

export interface SelectOption<T extends number | string = number> extends Id<T>, Disableable {
    readonly text: string;
}

export interface SelectOptionGroup<T extends number | string = number, K extends SelectOption<T> = SelectOption<T>> {
    label:   string;
    options: K[];
}

export type SelectOptionType<
    T extends number | string = number,
    K extends SelectOption<T> = SelectOption<T>,
> = K | SelectOptionGroup<T, K>;

interface BaseSelectProps<
    T extends string | number,
    K extends SelectOption<T>,
    V extends SelectOptionType<T, K>,
> extends MaybeStringId, Disableable, Validity {
    shape?:  Extract<Shape, 'rounded' | 'pilled'>;
    options: V[];
}

export interface SelectProps<
    T extends string | number = number,
    K extends SelectOption<T> = SelectOption<T>,
    V extends SelectOptionType<T, K> = SelectOptionType<T, K>,
> extends BaseSelectProps<T, K, V>, Sizable {
    label?: string | InputLabel<Exclude<LabelType, 'inline'>>; // todo: option label
}

export type DatalistOption<T extends number | string> = Omit<SelectOption<T>, 'isDisabled'>;

export interface DatalistProps<
    T extends string | number = number,
    K extends DatalistOption<T> = DatalistOption<T>,
> extends BaseSelectProps<T, K, K> {
    label?:       string;
    placeholder?: string;
}
