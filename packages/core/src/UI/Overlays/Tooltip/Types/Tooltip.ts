import type { Colorable, Sizable  } from '@/Lib';

import type { WithRequiredDefaultSlot } from '@/Types';
import type { Placement }               from '@floating-ui/vue';
import type { Slot }                    from 'vue';

export interface TooltipProps extends Colorable, Sizable {
    /** The component's placement */
    placement?: Placement;
}

export interface TooltipSlots extends WithRequiredDefaultSlot {
    /** The tooltip/popover's body that will appear on hover/click */
    body: Slot;
}
