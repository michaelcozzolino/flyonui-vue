import type { Disableable } from '@/Lib';
import type { WithIcon }    from '@/UI/Customization';

export interface RatingProps extends Disableable, WithIcon {
    /** The maximum number of rating icons */
    max?: number;

    /** True if the icon can be selected by its half */
    allowHalf?: boolean;
}
