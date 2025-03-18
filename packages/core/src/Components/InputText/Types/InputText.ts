import type { LabelType }   from '@/Components/Label/Internal';
import type { Shape, Size } from '@/Shared/Types';

export interface InputTextLabelProp {
    text:      string;
    type?:     LabelType; // When undefined the label will be a text by default
    isHidden?: boolean;
}

export interface InputTextProps {
    type?:  'text' | 'email';
    label?: InputTextLabelProp;
    icon?: {
        left?:  string;
        right?: string;
    };
    placeholder?: string;
    helperText?: {
        top?:    string;
        bottom?: {
            left?:  string;
            right?: string;
        };
    };
    shape?:        Extract<Shape, 'default' | 'pilled'>;
    size?:         Exclude<Size, 'extraLarge' | 'doubleExtraLarge'>;
    isDisabled?:   boolean;
    isReadonly?:   boolean;
    isValid?:      boolean;
    withoutFocus?: boolean;
}
