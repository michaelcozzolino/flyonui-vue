import type { ComponentName } from '@/Shared/Types/ComponentTypes.ts';

export type PresetComponentName = Extract<ComponentName, 'FoBadge' | 'FoButton'>;

export type Preset = 'solid' | 'gradient' | 'text' | 'soft' | 'outline' | 'dash';
