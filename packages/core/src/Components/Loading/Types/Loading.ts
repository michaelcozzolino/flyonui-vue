import type { Color }          from '@/Shared/UseColor';
import type { SizeWithout2XL } from '@/Shared/UseSize';

export type Animation = 'spinner' | 'dots' | 'ring' | 'ball' | 'bars' | 'infinity';

export interface LoadingProps {
    animation?: Animation;
    color?:     Color;
    size?:      SizeWithout2XL;
}
