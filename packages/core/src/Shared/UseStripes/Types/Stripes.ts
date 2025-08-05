import type { ComponentName } from '@/Shared';

export type StripedComponentName = Extract<ComponentName, 'FoListGroup' | 'FoListGroupItem'>;

export interface Striped {
    isStriped?: boolean;
}
