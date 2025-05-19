import type { ComponentName } from '@/Shared/Types/ComponentTypes.ts';

export type StripedComponentName = Extract<ComponentName, 'FoListGroup' | 'FoListGroupItem'>;

export interface Striped {
    isStriped?: boolean;
}
