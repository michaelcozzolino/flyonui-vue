import type { Striped }           from '@/Lib';
import type { TailwindAnimation } from '@/Lib/UseTailwindAnimation';

export type SkeletonAnimation = 'loading' | TailwindAnimation;

export interface SkeletonProps extends Striped {
    animation?: SkeletonAnimation;
}
