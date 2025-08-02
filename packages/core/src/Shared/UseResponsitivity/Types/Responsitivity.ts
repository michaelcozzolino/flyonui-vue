import type { ComponentName } from '@/Shared/Utils/Internal';

export type ResponsiveComponentName = Extract<ComponentName, 'FoButton' | 'FoJoin' | 'FoTable'>;

export interface Responsive {
    isResponsive?: boolean;
}
