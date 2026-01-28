import type { ComponentName } from '@/Lib';

export type ColorableComponentName = Extract<
    ComponentName,
    'FoBadge' | 'FoButton' | 'FoCheckbox' | 'FoModal' | 'FoRadio' | 'FoSwitch' | 'FoTooltip' | ColorableTextComponentName
>;

export type ColorableTextComponentName = Extract<ComponentName, 'FoHeading' | 'FoLink' | 'FoLoading'>;

export type Color = 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';

export interface Colorable {
    /** The component's color */
    color?: Color;
}
