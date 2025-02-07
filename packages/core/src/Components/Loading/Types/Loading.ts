import type { Color, Size } from '@/Shared/Types/Variants';

export type Animation = 'spinner' | 'dots' | 'ring' | 'ball' | 'bars' | 'infinity';

export interface LoadingProps {
    animation?: Animation;
    color?:     Color;
    size?:      Size;
}
