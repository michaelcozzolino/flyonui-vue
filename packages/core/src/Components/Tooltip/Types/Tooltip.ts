import type { Size }      from '@/Shared/Types';
import type { Color }     from '@/Shared/UseColor';
import type { Placement } from '@floating-ui/vue';

export interface TooltipProps {
    color?:     Color;
    placement?: Placement;
    maxSize?:   Size;
}
