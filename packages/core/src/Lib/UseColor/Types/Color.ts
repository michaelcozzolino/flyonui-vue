import type { ComponentName } from '@/Lib';

export type ColorableComponentName = Extract<
    ComponentName,
    'FoAlert'
    | 'FoBadge'
    | 'FoButton'
    | 'FoCheckbox'
    | 'FoDivider'
    | 'FoModal'
    | 'FoRadialProgress'
    | 'FoRadio'
    | 'FoRange'
    | 'FoStatus'
    | 'FoSwitch'
    | 'FoTooltip'
    | ColorableTextComponentName
>;

export type ColorableTextComponentName = Extract<ComponentName, 'FoDivider' | 'FoHeading' | 'FoLink' | 'FoLoading'>;

export type Color = 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';

export interface Colorable {
    /** The component's color */
    color?: Color;
}
