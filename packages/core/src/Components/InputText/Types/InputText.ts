import type { WithConfigurableHelperText } from '@/Components/HelperText';
import type { WithConfigurableIcon }       from '@/Components/Icon';
import type { WithConfigurableInputLabel } from '@/Components/Label';
import type { MaybeStringId }              from '@/Shared/UseIdentifiable';
import type { Shape, Shapeable }           from '@/Shared/UseShape';
import type { Sizable }                    from '@/Shared/UseSize';
import type { Disableable }                from '@/Shared/UseState';
import type { Validity }                   from '@/Shared/UseValidity';
import type { Immutable, WithPlaceholder } from '@/Shared/Utils/Types/Props.ts';

// todo: the input label can be documented through a specific label docs even if no one will ever use the component FoLabel as it is internal

export interface InputTextProps extends MaybeStringId,
    Disableable,
    WithPlaceholder,
    Immutable,
    Shapeable<Extract<Shape, 'rounded' | 'pilled'>>,
    Sizable,
    Validity,
    WithConfigurableHelperText,
    WithConfigurableIcon,
    WithConfigurableInputLabel {
    /** The input's type */
    type?: 'text' | 'email';

    /** It does not show any animations when the input is focused */
    withoutFocus?: boolean;

    /**
     * The id of the list to be used in combination with a datalist
     *
     * @internal
     */
    list?: string;
}
