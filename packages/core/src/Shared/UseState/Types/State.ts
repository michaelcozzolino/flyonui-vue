import type { Default }       from '@/Shared/Types';
import type { ComponentName } from '@/Shared/Types/ComponentTypes.ts';

export type StatefulComponentName = Extract<ComponentName, 'FoButton' | 'FoMenuItem'>;

export type State = Default | 'active' | 'disabled';
