import type { ComponentName } from '@/Shared/Utils/Internal';

export type ColorableComponentName = Extract<
    ComponentName,
    'FoBadge' | 'FoButton' | 'FoCheckbox' | 'FoRadio' | 'FoTooltip' | ColorableTextComponentName
>;

export type ColorableTextComponentName = Extract<ComponentName, 'FoLink' | 'FoLoading'>;

export type Color = 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';

// todo: replace all
export interface Colorable {
    color?: Color;
}
