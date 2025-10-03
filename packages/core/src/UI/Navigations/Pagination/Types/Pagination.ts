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
    length:    number;
    icon?:     PaginationIcon;
    hideText?: 'always' | 'never' | keyof typeof breakpointsTailwind;
}
