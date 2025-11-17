import type { ComponentName } from '@/Lib';

export type OrientableComponentName = Extract<
    ComponentName,
    'FoCheckboxGroup' | 'FoJoin' | 'FoListGroup' | 'FoListGroupItem' | 'FoMenu' | 'FoStats' | 'FoSwitchGroup'
>;

export type Orientation = 'horizontal' | 'vertical';

export interface Orientable {
    /** The component's orientation */
    orientation?: Orientation;
}
