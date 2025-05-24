import type { ComponentName } from '@/Shared/Utils/Internal';

export type StripedComponentName = Extract<ComponentName, 'FoListGroup' | 'FoListGroupItem'>;

export interface Striped {
    isStriped?: boolean;
}
