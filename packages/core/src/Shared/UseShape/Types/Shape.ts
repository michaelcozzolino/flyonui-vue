import type { ComponentName } from '@/Shared';

export type ShapeableComponentName = Extract<ComponentName, 'FoBadge' | 'FoButton' | 'FoInputText' | 'FoSelect'>;

export type Shape = 'rounded' | 'pilled' | 'square' | 'circle';

export interface Shapeable<T extends Shape = Shape> {
    /** The component's shape */
    shape?: T;
}
