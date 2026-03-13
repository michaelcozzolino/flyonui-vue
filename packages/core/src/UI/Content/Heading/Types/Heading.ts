import type { TextColorable } from '@/Lib';

export type HeadingLevel = '1' | '2' | '3' | '4' | '5' | '6';

export interface HeadingProps extends TextColorable {
    /** The heading's rank */
    level: HeadingLevel;
}
