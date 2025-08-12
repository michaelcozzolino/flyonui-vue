import type { WithConfigurableHelperText }            from '@/Components/HelperText';
import type { WithConfigurableIcon }                  from '@/Components/Icon';
import type { LabelType, WithConfigurableInputLabel } from '@/Components/Label';
import type { MaybeStringId }                         from '@/Shared/UseIdentifiable';
import type { Sizable }                               from '@/Shared/UseSize';
import type { Disableable }                           from '@/Shared/UseState';
import type { Validity }                              from '@/Shared/UseValidity';
import type { Immutable, WithPlaceholder }            from '@/Shared/Utils/Types/Props.ts';

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
