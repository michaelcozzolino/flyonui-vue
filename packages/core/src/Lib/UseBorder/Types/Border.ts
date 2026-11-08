import type { ComponentName } from '@/Lib';

export type BorderableComponentName = Extract<
    ComponentName,
    'FoBrowser' | 'FoBrowserToolbarURL' | 'FoCard' | 'FoStats' | 'FoTable' | 'FoWindow'
>;

export interface Borderable {
    /** If True, it displays the component's borders */
    isBordered?: boolean;
}
