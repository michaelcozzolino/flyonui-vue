import type { InputHelperText }            from '@/Components/HelperText/Internal';
import type { IconType, PositionableIcon } from '@/Components/Icon';
import type { InputLabel }                 from '@/Components/Label';
import type { Shape }                      from '@/Shared/UseShape';
import type { SizeWithout2XL }             from '@/Shared/UseSize';
import type { IsValid }                    from '@/Shared/UseValidity';
import type { InputHTMLAttributes }        from 'vue';

export interface InputTextProps extends /* @vue-ignore */ Pick<InputHTMLAttributes, 'id' | 'placeholder' | 'disabled' | 'readonly'>,
    IsValid {
    type?:         'text' | 'email';
    label?:        InputLabel;
    icon?:         IconType | PositionableIcon;
    helperText?:   InputHelperText;
    shape?:        Extract<Shape, 'rounded' | 'pilled'>;
    size?:         SizeWithout2XL;
    withoutFocus?: boolean;
}
