import type { Disableable, Id, MaybeStringId, Shape, Shapeable, Sizable, Validity   } from '@/Lib';
import type { WithPlaceholder, WithRequiredText }                                     from '@/Types';
import type { WithConfigurableHelperText, WithConfigurableInputLabel, WithLabel  }    from '@/UI/Components';
import type { WithIcon }                                                              from '@/UI/Customization';

export type SelectOption<T extends number | string = number> = Id<T>
    & Disableable
    & WithRequiredText;

export interface SelectOptionGroup<
    T extends number | string = number,
    K extends SelectOption<T> = SelectOption<T>,
> extends WithLabel {
    options: K[];
}

export type SelectOptionType<
    T extends number | string = number,
    K extends SelectOption<T> = SelectOption<T>,
> = K | SelectOptionGroup<T, K>;

export interface BaseSelectProps<
    T extends string | number,
    K extends SelectOption<T>,
    V extends SelectOptionType<T, K>,
> extends MaybeStringId,
    Disableable,
    Shapeable<Extract<Shape, 'rounded' | 'pilled'>>,
    Validity,
    WithConfigurableHelperText {
    /**
     * The select's options.
     * An array where each option is an object that contains at least "id" and "text".
     * In case of optgroup the array must contain an object with "options" and an optional "label"
     */
    options: V[];
}

export type SelectProps<
    T extends string | number = number,
    K extends SelectOption<T> = SelectOption<T>,
    V extends SelectOptionType<T, K> = SelectOptionType<T, K>,
> = BaseSelectProps<T, K, V>
    & Sizable
    & WithConfigurableInputLabel
    & WithIcon;

export type DatalistOption<T extends number | string> = Omit<SelectOption<T>, 'isDisabled'>;

export type DatalistProps<
    T extends string | number = number,
    K extends DatalistOption<T> = DatalistOption<T>,
> = BaseSelectProps<T, K, K>
    & WithPlaceholder
    & WithLabel;

export interface MultipleSelectProps<
    T extends string | number,
> extends MaybeStringId, Disableable, WithLabel {
    /**
     * The multiple select's options.
     * An array where each option is an object that contains at least "id" and "text".
     */
    options: SelectOption<T>[];

    /** The number of options that are visible in the select without scrolling. */
    visibleOptions?: number;
}
