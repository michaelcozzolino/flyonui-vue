import type { SizeWithout2XL } from '@/Shared/Types/Variants';
import type { Color }          from '@/Shared/UseColor';

export type Animation = 'spinner' | 'dots' | 'ring' | 'ball' | 'bars' | 'infinity';

export interface LoadingProps {
    animation?: Animation;
    color?:     Color;
    size?:      SizeWithout2XL;
}
