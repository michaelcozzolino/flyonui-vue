import type { Sizable, TextColorable } from '@/Lib';

export type LoadingAnimation = 'spinner' | 'dots' | 'ring' | 'ball' | 'bars' | 'infinity';

export interface LoadingProps extends TextColorable, Sizable {
    /** The component's loading animation */
    animation?: LoadingAnimation;
}
