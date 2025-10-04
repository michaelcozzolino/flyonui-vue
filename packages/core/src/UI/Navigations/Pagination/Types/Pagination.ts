import type { Preset, Presettable, Shape, Shapeable, Sizable } from '@/Lib';
import type { Alignable }                                      from '@/Lib/UseAlignment';
import type { Icon }                                           from '@/UI/Customization';
import type { breakpointsTailwind }                            from '@vueuse/core';

export type PaginationShape = Extract<Shape, 'rounded' | 'square' | 'circle'>;
export type PaginationPreset = Extract<Preset, 'soft' | 'outline' | 'text'>;

export interface PaginationIcon {
    previous?: Icon;
    next?:     Icon;
}

export interface PaginationProps extends Alignable,
    Shapeable<PaginationShape>,
    Presettable<PaginationPreset>,
    Sizable {
    /** The number of pages */
    length:    number;
    /** The component previous/next button's icons */
    icon?:     PaginationIcon;
    /** Hides the text on specific page breakpoints, if always the text will never be shown, if never the text will always be shown */
    hideText?: 'always' | 'never' | keyof typeof breakpointsTailwind;
}
