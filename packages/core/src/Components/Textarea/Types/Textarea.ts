import type { WithConfigurableHelperText } from '@/Components/HelperText';
import type { WithConfigurableIcon }       from '@/Components/Icon';
import type { InputLabel, LabelType }      from '@/Components/Label';
import type { MaybeStringId }              from '@/Shared/UseIdentifiable';
import type { Sizable }                    from '@/Shared/UseSize';
import type { Disableable }                from '@/Shared/UseState';
import type { IsValid }                    from '@/Shared/UseValidity';

type TextareaLabelType = Exclude<LabelType, 'inline'>;

export type TextareaLabel = InputLabel<TextareaLabelType>;

export interface TextareaProps extends MaybeStringId, Disableable, IsValid, Sizable, WithConfigurableHelperText, WithConfigurableIcon {
    placeholder?: string;
    label?:       TextareaLabel;
    isReadonly?:  boolean;
}
