import type { SizeWithout2XL, TextColor } from '@/Shared/Types/Variants';

export type Animation = 'spinner' | 'dots' | 'ring' | 'ball' | 'bars' | 'infinity';

export interface LoadingProps {
    animation?: Animation;
    color?:     TextColor;
    size?:      SizeWithout2XL;
}
