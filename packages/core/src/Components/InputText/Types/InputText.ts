import type { InputHelperText }                                        from '@/Components/HelperText/Internal';
import type { IconType, PositionableIcon }                             from '@/Components/Icon';
import type { InputLabel }                                             from '@/Components/Label';
import type { IsDisabled, IsReadonly, IsValid, Shape, SizeWithout2XL } from '@/Shared/Types';

export interface InputTextProps extends IsDisabled, IsReadonly, IsValid {
    type?:         'text' | 'email';
    label?:        InputLabel;
    icon?:         IconType | PositionableIcon;
    placeholder?:  string;
    helperText?:   InputHelperText;
    shape?:        Extract<Shape, 'default' | 'pilled'>;
    size?:         SizeWithout2XL;
    withoutFocus?: boolean;
}
