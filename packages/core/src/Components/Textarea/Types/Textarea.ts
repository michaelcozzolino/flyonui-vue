import type { InputHelperText }       from '@/Components/HelperText/Internal';
import type { PositionableIcon }      from '@/Components/Icon';
import type { InputLabel, LabelType } from '@/Components/Label';
import type { MaybeStringId }         from '@/Shared/UseIdentifiable';
import type { SizeWithout2XL }        from '@/Shared/UseSize';
import type { Disableable }           from '@/Shared/UseState';
import type { IsValid }               from '@/Shared/UseValidity';

type TextareaLabelType = Exclude<LabelType, 'inline'>;

export type TextareaLabel = InputLabel<TextareaLabelType>;

export interface TextareaProps extends MaybeStringId, Disableable, IsValid {
    placeholder?: string;
    icon?:        PositionableIcon;
    label?:       TextareaLabel;
    helperText?:  InputHelperText;
    size?:        SizeWithout2XL;
    isReadonly?:  boolean;
}
