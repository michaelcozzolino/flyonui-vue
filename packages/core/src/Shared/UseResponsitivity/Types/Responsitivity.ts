import type { ComponentName } from '@/Shared';

export type ResponsiveComponentName = Extract<ComponentName, 'FoButton' | 'FoJoin' | 'FoTable'>;

export interface Responsive {
    isResponsive?: boolean;
}
