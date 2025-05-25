import type { Colorable }      from '@/Shared/UseColor';
import type { SizeWithout2XL } from '@/Shared/UseSize';

export type Animation = 'spinner' | 'dots' | 'ring' | 'ball' | 'bars' | 'infinity';

export interface LoadingProps extends Colorable {
    animation?: Animation;
    size?:      SizeWithout2XL;
}
