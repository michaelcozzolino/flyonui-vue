import type { Default }       from '@/Shared/Utils';
import type { ComponentName } from '@/Shared/Utils/Internal';

export type StatefulComponentName = Extract<ComponentName, 'FoButton' | 'FoMenuItem'>;

export type State = Default | 'active' | 'disabled';

export interface Disableable {
    isDisabled?: boolean;
}
