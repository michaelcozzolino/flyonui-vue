import type { Colorable, Disableable, Sizable } from '@/Lib';

export interface RangeProps extends Colorable, Sizable, Disableable {
    min?:  number;
    max?:  number;
    step?: number;
}
