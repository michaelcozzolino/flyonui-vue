import type { ComponentName } from '@/Shared/Types/ComponentTypes';

export type ShapeableComponentName = Extract<ComponentName, 'FoBadge' | 'FoButton' | 'FoInputText'>;

export type Shape = 'rounded' | 'pilled' | 'square' | 'circle';

export interface Shapeable {
    shape?: Shape;
}
