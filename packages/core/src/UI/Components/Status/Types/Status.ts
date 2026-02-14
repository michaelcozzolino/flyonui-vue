import type { Colorable, Sizable } from '@/Lib';

export type StatusAnimation = 'bounce' | 'ping' | 'pulse';

export interface StatusProps extends Colorable, Sizable {
    animation?: StatusAnimation;
}
