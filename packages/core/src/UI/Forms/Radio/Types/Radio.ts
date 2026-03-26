import type { Colorable, Disableable, MaybeStringId, Sizable, Validity } from '@/Lib';
import type { Image }                                                    from '@/Types';
import type { WithHelperText, WithLabel }                                from '@/UI/Components';

interface RadioValue {
    /** The radio's internal value */
    value: string;
}

export interface RadioProps extends MaybeStringId, RadioValue, Colorable, Disableable, Sizable, Validity, WithLabel, WithHelperText {
    /** True, if the radio is an inset one, false otherwise */
    isInset?: boolean;
}

export interface ImageRadioProps extends RadioValue {
    /** The image of the radio */
    image: Image;
}
