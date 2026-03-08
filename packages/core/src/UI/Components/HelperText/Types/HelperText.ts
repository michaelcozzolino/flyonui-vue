import type { ComponentName }      from '@/Lib';
import type { HorizontalPosition } from '@/Types';

export type PositionableHelperTextComponentName = Extract<ComponentName, 'FoInputFile' | 'FoInputText' | 'FoSelect' | 'FoTextarea'>;

export type HelperText = string;

export type ConfigurableHelperText = HelperText | PositionableHelperText;

export interface PositionableHelperText {
    text:      string;
    position?: HorizontalPosition;
}

export interface WithConfigurableHelperText {
    /**
     * The component's configurable helper text, that is either a string or an object containing "text" and "position".
     * The available positions for the text are "left" | "right"
     */
    helperText?: ConfigurableHelperText;
}

export interface WithHelperText {
    /** The component's helper text */
    helperText?: HelperText;
}
