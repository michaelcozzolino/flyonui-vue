import type { ComponentName } from '@/Shared/Types/ComponentTypes.ts';

export type OrientableComponentName = Extract<
    ComponentName,
    'FoCheckboxGroup' | 'FoJoin' | 'FoListGroup' | 'FoListGroupItem' | 'FoMenu' | 'FoStats'
>;

export type Orientation = 'horizontal' | 'vertical';

export interface Orientable {
    orientation?: Orientation;
}
