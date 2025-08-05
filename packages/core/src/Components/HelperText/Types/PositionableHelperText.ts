import type { ComponentName }      from '@/Shared';
import type { HorizontalPosition } from '@/Shared/Utils';

export type PositionableHelperTextComponentName = Extract<ComponentName, 'FoInputText' | 'FoSelect' | 'FoTextarea'>;

export type ConfigurableHelperText = string | PositionableHelperText;

export interface PositionableHelperText {
    text:      string;
    position?: HorizontalPosition;
}

export interface WithConfigurableHelperText {
    helperText?: ConfigurableHelperText;
}
