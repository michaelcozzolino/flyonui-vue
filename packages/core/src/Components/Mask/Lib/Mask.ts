import type { Mask }                          from '@/Components/Mask/Types/Mask';
import type { HorizontalPosition }            from '@/Shared/Types';
import type { ComputedRef, MaybeRefOrGetter } from 'vue';
import { computed, toValue }                  from 'vue';

function useMask(mask: MaybeRefOrGetter<Mask>): ComputedRef<string> {
    return computed((): string => {
        const classes: Record<Mask, string> = {
            'heart':           'mask mask-heart',
            'squircle':        'mask mask-squircle',
            'hexagon':         'mask mask-hexagon',
            'hexagon-2':       'mask mask-hexagon-2',
            'decagon':         'mask mask-decagon',
            'pentagon':        'mask mask-pentagon',
            'diamond':         'mask mask-diamond',
            'square':          'mask mask-square',
            'circle':          'mask mask-circle',
            'parallelogram':   'mask mask-parallelogram',
            'parallelogram-2': 'mask mask-parallelogram-2',
            'parallelogram-3': 'mask mask-parallelogram-3',
            'parallelogram-4': 'mask mask-parallelogram-4',
            'star':            'mask mask-star',
            'star-2':          'mask mask-star-2',
            'triangle':        'mask mask-triangle',
            'triangle-2':      'mask mask-triangle-2',
            'triangle-3':      'mask mask-triangle-3',
            'triangle-4':      'mask mask-triangle-4',
        };

        return classes[toValue(mask)];
    });
}

function useSideMask(sideMask: MaybeRefOrGetter<HorizontalPosition>): ComputedRef<string> {
    return computed((): string => {
        const classes: Record<HorizontalPosition, string> = {
            left:  'mask-half-1',
            right: 'mask-half-2',
        };

        return classes[toValue(sideMask)];
    });
}

export const heartMaskClass          = useMask('heart');
export const squircleMaskClass       = useMask('squircle');
export const hexagonMaskClass        = useMask('hexagon');
export const hexagon2MaskClass       = useMask('hexagon-2');
export const decagonMaskClass        = useMask('decagon');
export const pentagonMaskClass       = useMask('pentagon');
export const diamondMaskClass        = useMask('diamond');
export const squareMaskClass         = useMask('square');
export const circleMaskClass         = useMask('circle');
export const parallelogramMaskClass  = useMask('parallelogram');
export const parallelogram2MaskClass = useMask('parallelogram-2');
export const parallelogram3MaskClass = useMask('parallelogram-3');
export const parallelogram4MaskClass = useMask('parallelogram-4');
export const starMaskClass           = useMask('star');
export const star2MaskClass          = useMask('star-2');
export const triangleMaskClass       = useMask('triangle');
export const triangle2MaskClass      = useMask('triangle-2');
export const triangle3MaskClass      = useMask('triangle-3');
export const triangle4MaskClass      = useMask('triangle-4');
export const leftSideMaskClass       = useSideMask('left');
export const rightSideMaskClass      = useSideMask('right');
