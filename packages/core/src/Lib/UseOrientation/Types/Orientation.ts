import type { ComponentName } from '@/Lib';

export type OrientableComponentName = Extract<
    ComponentName,
    'FoCheckboxGroup'
    | 'FoDivider'
    | 'FoJoin'
    | 'FoListGroup'
    | 'FoListGroupItem'
    | 'FoMenu'
    | 'FoStats'
    | 'FoSwitchGroup'
    | 'FoTabs'
>;

export type Orientation = 'horizontal' | 'vertical';

export interface Orientable {
    /** The component's orientation */
    orientation?: Orientation;
}
