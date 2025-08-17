import type { Disableable, MaybeStringId, Shape, Shapeable, Sizable, Validity  } from '@/Lib';
import type { Immutable, WithPlaceholder }                                       from '@/Types';
import type { WithConfigurableHelperText, WithConfigurableInputLabel  }          from '@/UI/Components';
import type { WithConfigurableIcon }                                             from '@/UI/Customization/Icon';

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
