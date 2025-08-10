import type { Slot } from 'vue';

export interface WithDefaultSlot {
    /** The component's default slot */
    default?: Slot;
}

export type WithRequiredDefaultSlot = Required<WithDefaultSlot>;
