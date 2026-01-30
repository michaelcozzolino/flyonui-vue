import type { ComponentName } from '@/Lib';

export type PresettableComponentName = Extract<ComponentName, 'FoAlert' | 'FoBadge' | 'FoButton' | 'FoSwitch'>;

export type Preset = 'solid' | 'gradient' | 'text' | 'soft' | 'outline' | 'dash';

export interface Presettable<T extends Preset = Preset> {
    /** The component's preset */
    preset?: T;
}
