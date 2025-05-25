import type { WithConfigurableHelperText } from '@/Components/HelperText';
import type { WithConfigurableIcon }       from '@/Components/Icon';
import type { InputLabel }                 from '@/Components/Label';
import type { MaybeStringId }              from '@/Shared/UseIdentifiable';
import type { Shape }                      from '@/Shared/UseShape';
import type { SizeWithout2XL }             from '@/Shared/UseSize';
import type { Disableable }                from '@/Shared/UseState';
import type { IsValid }                    from '@/Shared/UseValidity';

export interface InputTextProps extends MaybeStringId, Disableable, IsValid, WithConfigurableHelperText, WithConfigurableIcon {
    type?:         'text' | 'email';
    label?:        InputLabel;
    placeholder?:  string;
    shape?:        Extract<Shape, 'rounded' | 'pilled'>;
    size?:         SizeWithout2XL;
    withoutFocus?: boolean;
    isReadonly?:   boolean;
}
