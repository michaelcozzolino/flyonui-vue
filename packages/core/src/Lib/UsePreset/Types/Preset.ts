import type { ComponentName } from '@/Lib';

export type PresettableComponentName = Extract<
    ComponentName,
    'FoAlert' | 'FoBadge' | 'FoButton' | 'FoDivider' | 'FoSwitch'
>;

export type Preset = 'solid' | 'gradient' | 'text' | 'soft' | 'outline' | 'dash' | 'dot';

export interface Presettable<T extends Preset = Preset> {
    /** The component's preset */
    preset?: T;
}
