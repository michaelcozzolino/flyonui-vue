import type { ComponentName } from '@/Shared';

export type BorderableComponentName = Extract<ComponentName, 'FoStats' | 'FoTable'>;

export interface Borderable {
    isBordered?: boolean;
}
