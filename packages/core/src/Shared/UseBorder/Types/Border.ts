import type { ComponentName } from '@/Shared/Utils/Internal';

export type BorderableComponentName = Extract<ComponentName, 'FoStats' | 'FoTable'>;

export interface Borderable {
    isBordered?: boolean;
}
