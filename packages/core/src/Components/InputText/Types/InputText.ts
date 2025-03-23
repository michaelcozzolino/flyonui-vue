import type { InputHelperText, InputLabel, LabelType }       from '@/Components/Label';
import type { IsDisabled, IsReadonly, IsValid, Shape, Size } from '@/Shared/Types';

export interface InputTextLabelProp {
    text:      string;
    type?:     LabelType; // When undefined the label will be a text by default
    isHidden?: boolean;
}

export interface InputTextProps extends IsDisabled, IsReadonly, IsValid {
    type?:  'text' | 'email';
    label?: InputLabel;
    icon?: {
        left?:  string;
        right?: string;
    };
    placeholder?:  string;
    helperText?:   InputHelperText;
    shape?:        Extract<Shape, 'default' | 'pilled'>;
    size?:         Exclude<Size, 'extraLarge' | 'doubleExtraLarge'>;
    withoutFocus?: boolean;
}
