import type { HorizontalPosition } from '@/Shared/Utils';
import type { ComponentName }      from '@/Shared/Utils/Internal';

export type PositionableHelperTextComponentName = Extract<ComponentName, 'FoInputText' | 'FoTextarea'>;

export type ConfigurableHelperText = string | PositionableHelperText;

export interface PositionableHelperText {
    text:      string;
    position?: HorizontalPosition;
}

export interface WithConfigurableHelperText {
    helperText?: ConfigurableHelperText;
}
