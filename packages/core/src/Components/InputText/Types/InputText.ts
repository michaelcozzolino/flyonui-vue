import type { WithConfigurableHelperText } from '@/Components/HelperText';
import type { WithConfigurableIcon }       from '@/Components/Icon';
import type { InputLabel }                 from '@/Components/Label';
import type { MaybeStringId }              from '@/Shared/UseIdentifiable';
import type { Shape, Shapeable }           from '@/Shared/UseShape';
import type { Sizable }                    from '@/Shared/UseSize';
import type { Disableable }                from '@/Shared/UseState';
import type { Validity }                   from '@/Shared/UseValidity';
import type { HasPlaceholder, Immutable }  from '@/Shared/Utils/Types/Props.ts';

export type InputTextShape = Extract<Shape, 'rounded' | 'pilled'>;

// todo: the input label can be documented through a specific label docs even if no one will ever use the component FoLabel as it is internal

export interface InputTextProps extends MaybeStringId,
    Disableable,
    HasPlaceholder,
    Immutable,
    Shapeable<InputTextShape>,
    Sizable,
    Validity,
    WithConfigurableHelperText,
    WithConfigurableIcon {
    /** The input's type */
    type?: 'text' | 'email';

    /** The input's label text or an object containing "text" and "type" where type can be "text" | "floating" | "inline" */
    label?: string | InputLabel;

    /** It does not show any animations when the input is focused */
    withoutFocus?: boolean;

    /**
     * The id of the list to be used in combination with a datalist
     *
     * @internal
     */
    list?: string;
}
