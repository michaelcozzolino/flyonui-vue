import type { Color, Sizable, Size } from '@/Lib';
import type { VueClass }             from '@/Types';

export type ModalSize = Exclude<Size, 'extraSmall'>;

export type ModalSide = 'top' | 'middle' | 'bottom';

export type ModalAlignment = 'start' | 'center' | 'end';

export type ModalPlacement = `${ModalSide}-${ModalAlignment}`;

export type ModalTransition = 'slide-up' | 'slide-down';

export type ModalScrollingType = 'body' | 'document-body' | 'modal-body' | 'viewport';

export type ModalBackdropType = 'static' | 'disabled';

export interface ModalProps extends Sizable<ModalSize> {
    /** Custom classes that can be inferred in the specific modal's slot */
    classes?: {
        header?: VueClass;
        body?:   VueClass;
        footer?: VueClass;
    };

    /** If true, the modal can be closed by pressing the key "esc" on the keyboard  */
    closeOnEscape?: boolean;

    /** If true, the modal will take the whole screen */
    isFullscreen?: boolean;

    /** If true, the modal's background color won't be shown */
    isTransparent?: boolean;

    /** The transition that the modal will perform when shown */
    transition?: ModalTransition;

    /**
     * The type of the scrolling that can be applied for the modal body (default), both the document and modal bodies
     * or the viewport.
     */
    scrollingType?: ModalScrollingType;

    /** The position where the modal will be placed in the page */
    placement?: ModalPlacement;

    /** Backdrop options such as color and the type that can either be static or disabled */
    backdrop?: { color?: Color; type?: ModalBackdropType };
}
