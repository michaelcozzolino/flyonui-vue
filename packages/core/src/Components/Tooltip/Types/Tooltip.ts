import type { Colorable } from '@/Shared/UseColor';
import type { Size }      from '@/Shared/UseSize';
import type { Placement } from '@floating-ui/vue';

export interface TooltipProps extends Colorable, Sizable {
    /** The component's placement */
    placement?: Placement;
}
