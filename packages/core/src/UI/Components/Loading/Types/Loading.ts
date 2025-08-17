import type { Colorable, Sizable  } from '@/Lib';

export type Animation = 'spinner' | 'dots' | 'ring' | 'ball' | 'bars' | 'infinity';

export interface LoadingProps extends Colorable, Sizable {
    /** The component's loading animation */
    animation?: Animation;
}
