import type { ComponentName } from '@/Shared';
import type { Default }       from '@/Shared/Utils';

export type StatefulComponentName = Extract<ComponentName, 'FoButton' | 'FoMenuItem'>;

export type State = Default | 'active' | 'disabled';

export interface Disableable {
    /** If true, the component will be disabled without allowing more interactions */
    isDisabled?: boolean;
}
