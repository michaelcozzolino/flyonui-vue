import type { Colorable, Disableable, MaybeStringId, Sizable, Validity } from '@/Lib';
import type { Image }                                                    from '@/Types';
import type { LabelType, WithConfigurableInputLabel, WithHelperText }    from '@/UI/Components';

export type RadioLabelType = Extract<LabelType, 'text' | 'floating'>;

interface RadioValue {
    value: string;
}

export interface RadioProps extends MaybeStringId, RadioValue, Colorable, Disableable, Sizable, Validity, WithConfigurableInputLabel<RadioLabelType>, WithHelperText {
    isInset?: boolean;
}

export interface ImageRadioProps extends RadioValue {
    image: Image;
}
