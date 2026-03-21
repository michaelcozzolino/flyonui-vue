import type { Colorable, Disableable, Sizable } from '@/Lib';

export interface RangeProps extends Colorable, Sizable, Disableable {
    /** The minimum range's value */
    min?: number;

    /** The maximum range's value */
    max?: number;

    /** The increment size the slide is allowed to move by between values */
    step?: number;
}
