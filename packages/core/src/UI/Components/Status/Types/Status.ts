import type { Colorable, Sizable } from '@/Lib';
import type { TailwindAnimation }  from '@/Lib/UseTailwindAnimation';

export interface StatusProps extends Colorable, Sizable {
    /** A tailwind animation https://tailwindcss.com/docs/animation */
    animation?: TailwindAnimation;
}
