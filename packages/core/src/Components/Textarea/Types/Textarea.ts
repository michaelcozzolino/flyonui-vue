import type { InputHelperText }        from '@/Components/HelperText/Internal';
import type { PositionableIcon }       from '@/Components/Icon';
import type { InputLabel, LabelType }  from '@/Components/Label';
import type { SizeWithout2XL }         from '@/Shared/UseSize';
import type { IsValid }                from '@/Shared/UseValidity';
import type { TextareaHTMLAttributes } from 'vue';

type TextareaLabelType = Exclude<LabelType, 'inline'>;

export type TextareaLabel = InputLabel<TextareaLabelType>;

export interface TextareaProps extends /* @vue-ignore */ Pick<
    TextareaHTMLAttributes,
    'id' | 'placeholder' | 'disabled' | 'readonly'
>, IsValid {
    icon?:       PositionableIcon;
    label?:      TextareaLabel;
    helperText?: InputHelperText;
    size?:       SizeWithout2XL;
}
