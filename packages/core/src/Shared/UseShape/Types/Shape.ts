import type { ComponentName } from '@/Shared/Utils/Internal';

export type ShapeableComponentName = Extract<ComponentName, 'FoBadge' | 'FoButton' | 'FoInputText' | 'FoSelect'>;

export type Shape = 'rounded' | 'pilled' | 'square' | 'circle';

export interface Shapeable {
    shape?: Shape;
}
