import type { Slot } from 'vue';

export interface WithDefaultSlot {
    /** The content to be shown on the component by default */
    default?: Slot;
}

export type WithRequiredDefaultSlot = Required<WithDefaultSlot>;

export interface WithAddonSlots {
    /** The content to be prepended to the component */
    prepend?: Slot;

    /** The content to be appended to the component */
    append?: Slot;
}
