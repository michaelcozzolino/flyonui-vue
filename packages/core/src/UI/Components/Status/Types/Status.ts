import type { Colorable, Sizable } from '@/Lib';
import type { TailwindAnimation }  from '@/Lib/UseTailwindAnimation';

export interface StatusProps extends Colorable, Sizable {
    animation?: TailwindAnimation;
}
