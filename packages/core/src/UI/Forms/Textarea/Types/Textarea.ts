import type { Disableable, MaybeStringId, Sizable, Validity  }                     from '@/Lib';
import type { Immutable, WithPlaceholder }                                         from '@/Types';
import type { LabelType, WithConfigurableHelperText, WithConfigurableInputLabel  } from '@/UI/Components';
import type { WithConfigurableIcon }                                               from '@/UI/Customization/Icon';

export type TextareaLabelType = Exclude<LabelType, 'inline'>;

export type TextareaProps = MaybeStringId
    & Disableable
    & Immutable
    & Validity
    & Sizable
    & WithConfigurableHelperText
    & WithConfigurableIcon
    & WithConfigurableInputLabel<TextareaLabelType>
    & WithPlaceholder;
