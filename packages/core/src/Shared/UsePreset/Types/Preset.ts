import type { ComponentName } from '@/Shared';

export type PresettableComponentName = Extract<ComponentName, 'FoBadge' | 'FoButton'>;

export type Preset = 'solid' | 'gradient' | 'text' | 'soft' | 'outline' | 'dash';

export interface Presettable<T extends Preset = Preset> {
    /**
     * The component's preset
     *
     * @values 'solid' | 'gradient' | 'text' | 'soft' | 'outline' | 'dash'
     */
    preset?: T;
}
