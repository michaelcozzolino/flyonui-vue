import type { ComponentName } from '@/Shared/Utils/Internal';

export type PresetComponentName = Extract<ComponentName, 'FoBadge' | 'FoButton'>;

export type Preset = 'solid' | 'gradient' | 'text' | 'soft' | 'outline' | 'dash';
