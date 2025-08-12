import type { ComponentName } from '@/Shared';

export type BorderableComponentName = Extract<ComponentName, 'FoStats' | 'FoTable'>;

export interface Borderable {
    /** If True, it displays the component's borders */
    isBordered?: boolean;
}
