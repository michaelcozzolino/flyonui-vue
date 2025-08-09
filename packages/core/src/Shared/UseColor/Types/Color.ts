import type { ComponentName } from '@/Shared';

export type ColorableComponentName = Extract<
    ComponentName,
    'FoBadge' | 'FoButton' | 'FoCheckbox' | 'FoRadio' | 'FoTooltip' | ColorableTextComponentName
>;

export type ColorableTextComponentName = Extract<ComponentName, 'FoLink' | 'FoLoading'>;

export type Color = 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';

export interface Colorable {
    /** The component's color */
    color?: Color;
}
