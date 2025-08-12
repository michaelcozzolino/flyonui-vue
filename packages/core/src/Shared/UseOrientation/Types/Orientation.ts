import type { ComponentName } from '@/Shared';

export type OrientableComponentName = Extract<
    ComponentName,
    'FoCheckboxGroup' | 'FoJoin' | 'FoListGroup' | 'FoListGroupItem' | 'FoMenu' | 'FoStats'
>;

export type Orientation = 'horizontal' | 'vertical';

export interface Orientable {
    /** The component's orientation */
    orientation?: Orientation;
}
