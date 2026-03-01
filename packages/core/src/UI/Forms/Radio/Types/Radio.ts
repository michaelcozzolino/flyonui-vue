import type { Colorable, Disableable, MaybeStringId, Sizable, Validity } from '@/Lib';
import type { Image }                                                    from '@/Types';
import type { WithHelperText, WithLabel }                                from '@/UI/Components';

interface RadioValue {
    value: string;
}

export interface RadioProps extends MaybeStringId, RadioValue, Colorable, Disableable, Sizable, Validity, WithLabel, WithHelperText {
    isInset?: boolean;
}

export interface ImageRadioProps extends RadioValue {
    image: Image;
}
