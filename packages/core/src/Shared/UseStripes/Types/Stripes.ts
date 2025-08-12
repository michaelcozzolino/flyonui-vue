import type { ComponentName } from '@/Shared';

export type StripedComponentName = Extract<ComponentName, 'FoListGroup' | 'FoListGroupItem'>;

export interface Striped {
    /** If true, the component will be shown with alternate stripes */
    isStriped?: boolean;
}
