import type { ComponentName } from '@/Lib';

export type AlignableComponentName = Extract<ComponentName, 'FoDivider' | 'FoPagination' | 'FoTabs'>;

export type Alignment = 'left' | 'center' | 'right';

export interface Alignable {
    /** The component's alignment */
    alignment?: Alignment;
}
