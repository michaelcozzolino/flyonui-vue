import type { WithConfigurableHelperText } from '@/Components/HelperText';
import type { WithConfigurableIcon }       from '@/Components/Icon';
import type { InputLabel }                 from '@/Components/Label';
import type { MaybeStringId }              from '@/Shared/UseIdentifiable';
import type { Shape }                      from '@/Shared/UseShape';
import type { Sizable }                    from '@/Shared/UseSize';
import type { Disableable }                from '@/Shared/UseState';
import type { Validity }                   from '@/Shared/UseValidity';

export interface InputTextProps extends MaybeStringId, Disableable, Validity, Sizable, WithConfigurableHelperText, WithConfigurableIcon {
    type?:         'text' | 'email';
    label?:        string | InputLabel;
    placeholder?:  string;
    shape?:        Extract<Shape, 'rounded' | 'pilled'>;
    withoutFocus?: boolean;
    isReadonly?:   boolean;
}
