import type { ComponentName } from '@/Lib';

export type BorderableComponentName = Extract<ComponentName, 'FoStats' | 'FoTable'>;

export interface Borderable {
    /** If True, it displays the component's borders */
    isBordered?: boolean;
}
